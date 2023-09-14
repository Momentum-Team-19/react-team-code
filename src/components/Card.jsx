import React, { useState } from 'react';

const Card = ({ color }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [curCard, setCurCard] = useState('');
  const [prevCard, setPrevCard] = useState('');

  const handleClick = () => {
    let temp = curCard;
    setIsFlipped(!isFlipped);
    setCurCard(color);
    setPrevCard(temp);
    console.log('curCard: ', curCard);
    console.log('prevCard: ', prevCard);
  };

  return (
    <React.Fragment>
      <div className='card-container' onClick={handleClick}>
        <>{isFlipped ? <p>{color}</p> : null}</>
      </div>
    </React.Fragment>
  );
};

export default Card;
