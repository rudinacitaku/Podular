import React from 'react';
import Photo1 from './photos/photo1.jpg';

const Home = () => {
  return (
    <div className="banner">
        <img src={Photo1} alt="Example" />
        <h1 className="photo-text">Top Picks for you!</h1>
          <h3 className="photo-subtext">Head on to your personalized picks to find more of what you like</h3>
      </div>
  );
}

export default Home

