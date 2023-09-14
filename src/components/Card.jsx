import React from "react";

const Card = ({color}) => {
  return (
    <React.Fragment>
      <div className='card-container'>
        <>
        <p>{color}</p>
        </>
      </div>
    </React.Fragment>
  );
};

export default Card;
