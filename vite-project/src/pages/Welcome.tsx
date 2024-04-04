import { NavLink } from "react-router-dom";
import partyCat from "../images/meow_party.gif";
import "../App.css";
import { Button } from "@mui/material";

export const Welcome = () => {
  return (
    <div>
      <header>
        <h1>
          <img src={partyCat} />
          Oh Hoi!
          <img src={partyCat} />
        </h1>
        <Button
          color="secondary"
          component={NavLink}
          to="/main"
          variant="outlined"
        >
          Enter
        </Button>
        <h2 style={{ color: "#ffcd38" }}>
          Website currently under construction
        </h2>
      </header>
    </div>
  );
};
