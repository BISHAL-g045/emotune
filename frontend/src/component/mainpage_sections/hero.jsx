import React, { useState } from 'react';
import Camera from '../camera';
import Player from '../player';
import '../Hero.css';

export const Hero = () => {
  const [emotion, setEmotion] = useState(null);
  const [recommendedMusic, setRecommendedMusic] = useState([]);

  // Handle the emotion detection and update UI
  const handleEmotionDetected = (data) => {
    if (data && data.length > 0) {
      setEmotion(data[0].emotion); // Set detected emotion
      setRecommendedMusic(data[0].music_recommendations); // Set recommended music
    }
  };

  return (
    <div className="hero-bg h-screen">
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-4xl font-bold text-white mb-4">EMOTUNE</h1>

        <h6 className="text-lg font-semibold text-white mb-2">Detected Emotion</h6>
        <div className="w-64 h-32 mb-6 flex items-center justify-center bg-white rounded-lg shadow">
          <Camera onEmotionDetected={handleEmotionDetected} />
        </div>

        {emotion && (
          <div className="text-white mb-4">
            <h2>Emotion Detected: {emotion}</h2>
          </div>
        )}

        <h6 className="text-lg font-semibold text-white mb-2">Recommended Music</h6>
        <div className="bg-red-600 rounded-full shadow p-4 flex items-center justify-center">
          <Player musicList={recommendedMusic} />
        </div>
      </div>
    </div>
  );
};
