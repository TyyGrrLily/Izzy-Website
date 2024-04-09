import { BasePage } from "./BasePage";
import evcat from "../images/ev-cat.png";
import jojocat from "../images/jojocat.png";
import { Link } from "@mui/material";
export const Main = () => {
  return (
    <BasePage>
      <>
        <h1>Welcome to my page!!</h1>
        <div>
          <div> I see you have found this website.</div>
          Feel free to check it out and my github!
          <br />
          <Link
            href="https://github.com/TyyGrrLily"
            rel="noopener"
            target="_blank"
            underline="hover"
          >
            My Github
          </Link>
          <br />
          <h3>Website sponsered by Ev and Jojo Hardy</h3>
          <img src={evcat} width={"250"} title="Ev is baby princess!" />{" "}
          <img src={jojocat} width={"250"} title="Jojo is baked bean!" />
        </div>
      </>
    </BasePage>
  );
};
