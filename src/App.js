import { Badge, Button } from "react-bootstrap";

import "./App.css";
import { Luz } from "./components/luz";
import { SwapButton } from "./components/button";

import { useState } from "react";

const colores = ["red", "yellow", "green"];

function App() {
  const [selectedColor, setColor] = useState("");
  return (
    <>
      <Badge className="bg-black m-4 text-center">
        {colores.map((color) => {
          return (
            <Luz
              color={color}
              colorSetter={setColor}
              selectedColor={selectedColor}
            />
          );
        })}
        <SwapButton
          colores={colores}
          colorSetter={setColor}
          selectedColor={selectedColor}
        />
      </Badge>
    </>
  );
}

export default App;
