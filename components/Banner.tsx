import { FC } from "react";
import {
  container,
  title,
  title1,
  title2,
  subtitle,
  button,
} from "./Banner.module.css";

const Banner: FC<{ text: string; handleButtonClick: () => void }> = ({
  text,
}) => {
  return (
    <div className={container}>
      <h1 className={title}>
        <span className={title1}>Coffee</span>
        <span className={title2}>Conniosseur</span>
      </h1>
      <p className={subtitle}>Discover your local coffee shops!</p>
      <button className={button}>{text}</button>
    </div>
  );
};

export default Banner;
