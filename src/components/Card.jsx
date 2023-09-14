import React, { useState } from "react";

const Card = ({ color }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <React.Fragment>
            <div className='card-container' onClick={handleClick}>
                <>
                    {isFlipped ? <p>{color}</p> : null}
                </>
            </div>
        </React.Fragment>
    );
};

export default Card;
