import { Navbar } from "../components/NavBar";

type props = { children: JSX.Element };

export const BasePage = (prop: props) => {
  return (
    <div>
      <Navbar />
      {prop.children}
    </div>
  );
};
