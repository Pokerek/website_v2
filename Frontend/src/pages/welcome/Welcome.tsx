import "./Welcome.scss";
import { SuperBox } from "../../components/SuperBox/SuperBox";
import { Button } from "../../components/Button/Button";
import { Write } from "../../components/Write";

const elementsToWrite = [
  { className: "welcome__title", text: "HELLO FRIEND" },
  { className: "welcome__text", text: "I'm Karol Chrobok" },
  { className: "welcome__text", text: "Padawan of Fullstack" },
];

export const Welcome = () => {
  return (
    <SuperBox className="welcome">
      <div className="welcome__inner">
        <a href="/about.me">
          <img
            src="./images/logo.png"
            alt="Logo images"
            className="welcome__img"
          />
        </a>
        <div className="welcome__info">
          <Write elements={[...elementsToWrite]} />
          <Button
            link="/about.me"
            className="btn--green hidden"
            text="Drop the mask"
          />
        </div>
      </div>
    </SuperBox>
  );
};
