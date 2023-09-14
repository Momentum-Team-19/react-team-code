import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
      const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
    ];

    const [curCard, setCurCard] = useState('');
    const [prevCard, setPrevCard] = useState('');
    const [shuffledColors, setShuffledColors] = useState(colors)
 

    

    useEffect(() => {
      const colorsCopy = [...colors]
      setShuffledColors(colorsCopy.sort(() => Math.random() - 0.5));

    },[]) 


    return (
        <>
            <div className='container'>
                {shuffledColors.map((color, index) => (
                    <Card key={index} color={color} 
                    curCard={curCard}
                    prevCard={prevCard} 
                    setCurCard={setCurCard} 
                    setPrevCard={setPrevCard}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
