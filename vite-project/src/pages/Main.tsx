import { BasePage } from "./BasePage";
import evcat from "../images/ev-cat.png";
export const Main = () => {
  return (
    <BasePage>
      <>
        <h1>Welcome to my page!!</h1>
        <div>
          <img src={evcat} width={"250"} />{" "}
          <div>Welcome, I see you have found this website.</div>
        </div>
      </>
    </BasePage>
  );
};
