import { List, ListItem, ListItemText } from "@mui/material";
import { BasePage } from "./BasePage";
import "./Experience.css";

export const Experience = () => {
  return (
    <BasePage>
      <>
        <h1>Work Experience</h1>
        <br />
        <h2>
          Full Stack Software Engineer <br /> Elation Health, Remote (May 2021 -
          Present)
        </h2>
        <List sx={{ listStyleType: "disc", px: "5rem" }}>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Owned project breakdown, technical design and execution for an initiative to reduce support case volume 5% company-wide. Added the ability for customers to make self-service edits to incorrect contact information in a proprietary user directory." />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Updated and unified prescription forms from Javascript to React framework while optimized the user experience (UX) by reducing thousands of clicks for users" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Integrated with health information networks to enable nationwide care coordination across healthcare organizations" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Implemented and simplified real-time prescription benefits workflows, reducing time to execute care plans and saving patients thousands of dollars a month" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Implemented automation to streamline the workflow for users sending out electronic prior authorization requests." />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Researched and troubleshooted critical issues within django python and frontend applications" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Created React queries and API endpoints for multiple frontend and full stack projects" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Developed frontend tests to mock API data with Jest and Mirage" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Worked in an Agile software development environment using Jira and Confluence for documentation" />
            {/* <ListItemText primary="" /> */}
          </ListItem>
        </List>
        <div className="toolList">
          <div className="toolListItem">
            <strong className="toolListItemTitle">Languages: </strong>{" "}
            JavaScript (Typescript & React), Python, FastAPI, Bash, SQL, CSS
            (Less)
          </div>
          <div className="toolListItem">
            <strong className="toolListItemTitle">Tools: </strong>Postman,
            Sequel Ace, Git
          </div>
          <div className="toolListItem">
            <strong className="toolListItemTitle">Frameworks: </strong> React,
            React query, Redux, Redux query, Django, Jest, Mirage, Selenium,
            Behave
          </div>
        </div>
        <h2>
          GPS Test Engineer & Software Engineer <br /> CTSi, San Diego
          California (January 2019 – April 2021)
        </h2>
        <List sx={{ listStyleType: "disc", px: "5rem" }}>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Performed test planning and procedures, scenario development and validation, test execution, and test reporting for the GPS Directorate Integrated System Test" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Provided technical, engineering, and test expertise for the GPS test program using an advanced global navigation simulator" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Focused on complete independent testing of the MGUE (Military GPS User Equipment) to the Technical Requirements Document for the MGUE Aviation form factors" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Developed and updated software for a simulation system for use in other simulation testing and development of GPS equipment" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Implemented automation to streamline the workflow for users sending out electronic prior authorization requests" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Utilized QT Creator for the Front End development" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Added advanced sensors for use in simulations of naval ships and their systems" />
          </ListItem>
        </List>
        <div className="toolList">
          <div className="toolListItem">
            <strong className="toolListItemTitle">Languages: </strong>
            C/C++, Python, Bash
          </div>
          <div className="toolListItem">
            <strong className="toolListItemTitle">Tools: </strong>QT Creator,
            Git
          </div>
        </div>
        <h2>
          Software Engineer <br /> General Atomic, Poway California (March 2018
          – Oct 2018)
        </h2>
        <List sx={{ listStyleType: "disc", px: "5rem" }}>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Developed software for unmanned aircraft ground control stations" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Produced project documentation and test plans along with developing, testing and checking in of software" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Led in-person software peer review processes" />
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Worked efficiently under challenging schedules, sometimes working three separate projects a week" />
          </ListItem>
        </List>
        <div className="toolList">
          <div className="toolListItem">
            <strong className="toolListItemTitle">Languages: </strong>
            Python, Bash
          </div>
        </div>
        <h2>
          Pharmacy Clerk <br /> Advanced Diabetes Supply, Carlsbad California
          (2016 – 2017)
        </h2>
        <List sx={{ listStyleType: "disc", px: "5rem" }}>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText primary="Worked in fast paced environment getting hundreds of orders sent out daily" />
          </ListItem>
        </List>
      </>
    </BasePage>
  );
};
