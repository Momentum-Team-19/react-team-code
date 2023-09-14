import React, { useState, useEffect } from 'react';

const Card = ({ color, prevCard, curCard, setCurCard, setPrevCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [isEqual, setIsEqual] = useState(false)

  useEffect(() => {
    if (curCard === prevCard && curCard === color) {
      setIsEqual(true)
    } else {
      setIsEqual(false)
    }
    console.log(isEqual)
  }, [curCard, prevCard])


  const handleClick = () => {
    if (!isSolved) {
        console.log('clicked')
        let temp = curCard
        setPrevCard(temp)
        setCurCard(color)
        // timeout needed

        setIsFlipped(true); 

        setTimeout(() => {
            setIsFlipped(false)
        }, 2000)

    } else {
        setIsFlipped(true)
        // conditional css classname
    }
  };

  useEffect(() => {
    if (isEqual) {
        setIsSolved(true)

    }
  },[isEqual])


  return (
    <React.Fragment>
      <div className={`card-container ${isSolved ? color : null}`} onClick={handleClick}>
        <>{isFlipped ? <p>{color}</p> : null}</>
      </div>
    </React.Fragment>
  );
};

export default Card;
