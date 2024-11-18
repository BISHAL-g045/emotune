import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          withCredentials: true, // Include session cookies
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching user information');
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard">
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
          {/* Add other user-specific information or features */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
