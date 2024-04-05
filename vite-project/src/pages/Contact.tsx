import { Link } from "@mui/material";
import { BasePage } from "./BasePage";

export const Contact = () => {
  return (
    <BasePage>
      <>
        <h2>Thank you for wanting to contact me!</h2>
        Please reach out!
        <br />
        <Link
          href="https://www.linkedin.com/in/izabel-h/"
          rel="noopener"
          target="_blank"
          underline="hover"
        >
          My LinkedIn
        </Link>
      </>
    </BasePage>
  );
};
