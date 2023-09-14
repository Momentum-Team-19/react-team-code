import { useState } from "react";
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
const shuffledColors = colors.sort(() => Math.random()-0.5);
  const [count, setCount] = useState(0);

  return (
    <>
      {colors.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </>
  );
}

export default App;
