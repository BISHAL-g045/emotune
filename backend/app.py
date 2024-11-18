from flask import Flask, request, jsonify, session
import cv2
import numpy as np
from tensorflow.keras.models import load_model
import pandas as pd
from flask_cors import CORS
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email, EqualTo
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
from collections import Counter


app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'mydatabase'
app.secret_key = 'helloworld'

mysql = MySQL(app)
bcrypt = Bcrypt(app) 

emotion_model = load_model('models/CNN_Model.h5')
face_cascade = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')
emotion_labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Calm', 'Energetic']
music_data = pd.read_csv('data/data_moods.csv')
user_emotions = {}

class RegisterForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    repassword = PasswordField("Re-enter Password", validators=[DataRequired(), EqualTo('password', message='Passwords must match')])

class LoginForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])

def recommend_music(emotion):
    recommended_tracks = music_data[music_data['mood'] == emotion]
    return recommended_tracks.to_dict(orient='records')

@app.route('/db_test', methods=['GET'])
def db_test():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT 1")
        cursor.close()
        return jsonify({'message': 'Database connection is successful!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    repassword = data.get('repassword')

    if password != repassword:
        return jsonify({'error': 'Passwords do not match'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, hashed_password))
    mysql.connection.commit()
    cursor.close()
    return jsonify({'message': 'Registration successful. You can now login.'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()
    cursor.close()

    if user and bcrypt.check_password_hash(user[3], password):
        session['user_id'] = user[0]
        return jsonify({'message': 'Login successful', 'redirect': '/home'}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

@app.route('/profile', methods=['GET'])
def profile():
    if 'user_id' in session:
        user_id = session['user_id']
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT id, name, email FROM users WHERE id=%s", (user_id,))
        user = cursor.fetchone()
        cursor.close()
        
        if user:
            return jsonify({
                'id': user[0],
                'name': user[1],
                'email': user[2]
            }), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    else:
        return jsonify({'error': 'User not logged in'}), 401


@app.route('/emotion', methods=['POST'])
def emot():
    data = request.get_json()
    emotionArray = data.get('arrayVariable', [])

    if 'user_id' in session:
        user_id = session['user_id']
        user_emotions.setdefault(user_id, []).extend(emotionArray)
        return jsonify({'message': 'Emotion data received successfully'})
    else:
        return jsonify({'error': 'User not logged in'}), 401

@app.route('/process_emotion', methods=['POST'])
def process_emotion():
    try:
        ret, frame = cap.read()
        if not ret:
            return jsonify({"error": "Failed to capture frame from the camera."})

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
        emotion_results = []

        for (x, y, w, h) in faces:
            face_roi = gray[y:y + h, x:x + w]
            face_img = cv2.cvtColor(face_roi, cv2.COLOR_GRAY2BGR)
            face_img = cv2.resize(face_img, (48, 48))
            face_img = np.reshape(face_img, [1, 48, 48, 3]) / 255.0
            emotion_prediction = emotion_model.predict(face_img)
            predicted_emotion = emotion_labels[np.argmax(emotion_prediction)]
            music_recommendations = recommend_music(predicted_emotion)
            emotion_results.append({
                "x": int(x), "y": int(y), "w": int(w), "h": int(h),
                "emotion": predicted_emotion,
                "music_recommendations": music_recommendations
            })

        return jsonify(emotion_results)

    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/logout')
def logout():
    if 'user_id' in session:
        user_id = session.pop('user_id', None)
        emotion_list = user_emotions.get(user_id, [])
        if emotion_list:
            most_common_emotion = Counter(emotion_list).most_common(1)[0][0]
            cursor = mysql.connection.cursor()
            cursor.execute("UPDATE users SET Emotion = %s WHERE id = %s", (most_common_emotion, user_id))
            mysql.connection.commit()
            cursor.close()
        return jsonify({'message': 'Logout successful'})

if __name__ == '__main__':
    app.run(debug=True)
