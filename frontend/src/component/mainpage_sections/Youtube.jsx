import React from 'react';
import { Music } from './Music';
import kgaru from "../../images/kgaru.jpg"
import china from "../../images/china.jpg"
import dws from "../../images/diewithsmile.jpg"

export const Youtube = () => {
  return (
    <>
      <h2 className='text-center  ' >Youtube Feed</h2>
      <h6 className='text-center'>Latest Track</h6>

      <div className='flex flex-auto justify-center space-x-20'>
      <div><Music imageUrl={kgaru} youtubeUrl="https://youtu.be/fGF10RLUm1U?si=c5LPzM17ZIzshVXl" /></div>
      <div><Music imageUrl={china} youtubeUrl="https://youtu.be/-oLaIlMaPu8?si=wL4vt5aQ3Y1jsnJW" /></div>
      <div><Music imageUrl={dws} youtubeUrl="https://youtu.be/kPa7bsKwL-c?si=M1HSzMuLVhKqRwpb" /></div>
      </div>
    </>
  );
};
