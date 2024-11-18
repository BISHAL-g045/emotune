import React from 'react';

const Player = ({ musicList }) => {
  if (!musicList || musicList.length === 0) {
    return <p className="text-white">No music recommendations yet!</p>;
  }

  return (
    <div className="text-white">
      <h3 className="text-lg font-bold mb-2">Recommended Songs:</h3>
      <ul className="list-disc list-inside">
        {musicList.map((track, index) => (
          <li key={index}>
            <strong>{track.title}</strong> by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
