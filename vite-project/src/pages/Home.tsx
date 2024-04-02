import { BasePage } from "./BasePage";
import evcat from "../images/ev-cat.png";
export const Home = () => {
  return (
    <BasePage>
      <>
        <h1>Welcome to my page!!</h1>
        <img src={evcat} />
      </>
    </BasePage>
  );
};
