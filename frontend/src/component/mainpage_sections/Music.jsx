import React from 'react';

export const Music = ({ imageUrl, youtubeUrl }) => {
  return (
    <>
      <div className="h-32 w-44">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block', 
            height: '100%',
            width: '100%',
          }}
        >
        </a>
      </div>
    </>
  );
};
