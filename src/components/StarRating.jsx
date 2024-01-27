import React from 'react';

function StarRating({ rating }) {
  const generateStars = () => {
    const wholeStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }

    if (halfStar) {
      stars.push(<span key={wholeStars} className="star">&#9733;</span>);
    }

    return stars;
  };

  return (
    <div className="imdb-rating">
      <span className="rating">{rating}</span>
      <div className="stars">
        {generateStars()}
      </div>
    </div>
  );
}

export default StarRating;