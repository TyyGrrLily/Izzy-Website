import { Link } from "@mui/material";
import { BasePage } from "./BasePage";

export const Projects = () => {
  return (
    <BasePage>
      <>
        <h2>Thank you for wanting to see my projects!</h2>
        <>
          This website is currently the project I am working on. This is
          implemented using React, Vite, and Typescript.
          <br /> I am planning to add to this as I continue. Next plan is to add
          Mui for styling.
          <br />
          Future projects can be found here:{" "}
          <Link
            href="https://github.com/TyyGrrLily"
            rel="noopener"
            target="_blank"
            underline="hover"
          >
            My LinkedIn
          </Link>
        </>
      </>
    </BasePage>
  );
};
