import { Link } from "@mui/material";
import { BasePage } from "./BasePage";

export const Projects = () => {
  return (
    <BasePage>
      <>
        <h2>Thank you for wanting to see my projects!</h2>
        <>
          This website one of the project I am working on. This is implemented
          using React, Vite, and Typescript.
          <br />
          Working on a separate project on GoDot but more will come upon that.
          <br />
          Projects can be found here:{" "}
          <Link
            href="https://github.com/TyyGrrLily"
            rel="noopener"
            target="_blank"
            underline="hover"
          >
            My Github
          </Link>
        </>
      </>
    </BasePage>
  );
};
