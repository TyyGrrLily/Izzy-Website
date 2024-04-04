import izzy from "../images/photo_2024-04-03 17.29.02.png";
import { BasePage } from "./BasePage";
import "./About.css";

export const About = () => {
  return (
    <BasePage>
      <div>
        <img className="image" src={izzy} />
        <h1>Izabel Hardy</h1>
        <h2>Software Engineer Extraordinaire</h2>
        <>
          As a software engineer, I am driven by creativity and collaboration,
          seeking challenging opportunities to thrive within community-focused
          teams. Outside of work, I immerse myself in personal art projects,
          sourdough baking, and engaging board games with friends. Continuously
          developing my skills in both programming and art, I find joy in
          creating new things—from implementing innovative forms to exploring
          diverse mediums like ceramics. My primary goal is growth, both
          personally and professionally.
        </>
        <br />
        <>Yes I did make my hat!</>
      </div>
    </BasePage>
  );
};
