import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import evcat from "../images/ev-cat.png";
import partyCat from "../images/meow_party.gif";
import "../App.css";

export function Welcome() {
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
        <NavLink to="/main">Enter</NavLink>
        <Button onClick={handleButton}>Enter</Button>
      </header>
      {open && <img src={evcat} />}
    </div>
  );
}
