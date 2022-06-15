import React from "react";

const SmallCard = ({ name, imgSrc, mobNo, emailId = "" }) => {
  return (
    <div className="small-card">
      <div className="image-container">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="small-card-div">
        <h2>{name}</h2>
        <div>
          <h4>{mobNo}</h4>
          <h4>{emailId}</h4>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
