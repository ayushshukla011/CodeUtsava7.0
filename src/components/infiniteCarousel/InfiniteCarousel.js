import React from "react";

import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ sponsers }) => {
  return (
    <div className="codeutsava__sponsers-carousel-container">
      <div className="codeutsava__sponsers-carousel">
        {sponsers.map((sponser) => {
          return (
            <div className="codeutsava__sponsers-carousel-item">
              <img src={sponser.img} />
            </div>
          );
        })}
        <div style={{margin: '0px 15vw', display: 'inline-block'}}></div>
        {sponsers.map((sponser) => {
          return (
            <div className="codeutsava__sponsers-carousel-item">
              <img src={sponser.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
