import { useState } from "react";
import Button from "@mui/material/Button";
import evcat from "./images/ev-cat.png";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <h1>Yellow</h1>
        <Button onClick={handleButton}>Beep beep beep</Button>
      </header>
      {open && <img src={evcat} />}
    </div>
  );
}

export default App;
