import React from "react";
import "./ProductRating.css";
function ProductRating({ rate }) {
  function countstar() {
    let stars = [];
    let rem = 0;

    rem = rate % 1;
    let c = Math.floor(rate);
    for (let i = 0; i < 5; i++) {
      if (i < c) {
        stars.push(
          <img className="yellow" key={i} src="yellow.png" alt="star" />
        );
      } else if (rem > 0) {
        stars.push(
          <img className="yellow" key={i} src="halfyellows.png" alt="star" />
        );
      } else {
        stars.push(
          <img className="white" key={i} src="whiteshade.png" alt="star" />
        );
      }
    }
    return stars;
  }
  return <div className="stars">{countstar()}</div>;
}

export default ProductRating;
