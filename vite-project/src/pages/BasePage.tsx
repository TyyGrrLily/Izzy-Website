import { Navbar } from "../components/NavBar";
import "./BasePage.css";

type props = { children: JSX.Element };

export const BasePage = (prop: props) => {
  return (
    <div>
      <Navbar />
      <div className="page">{prop.children}</div>
    </div>
  );
};
