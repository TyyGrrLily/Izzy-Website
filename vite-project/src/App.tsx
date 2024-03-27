import { useState } from "react";
import Button from "@mui/material/Button";
import evcat from "./images/ev-cat.png";
import partyCat from "./images/meow_party.gif";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <h1>
          <img src={partyCat} />
          Oh Hoi!
          <img src={partyCat} />
        </h1>
        <Button onClick={handleButton}>Enter</Button>
      </header>
      {open && <img src={evcat} />}
    </div>
  );
}

export default App;
