import { useFetch } from "usehooks-ts";
import { useState, useEffect } from "react";

import { SuperBox } from "../../components/SuperBox/SuperBox";
import { TCV } from "../../types/cv/CV";
import { Button } from "../../components/Button/Button";
import { AboutMe } from "./AboutMe";
import { AboutTech } from "./AboutTech";

import "./About.scss";

export default function About() {
  const { data } = useFetch<TCV>(`${process.env.REACT_APP_BACKEND_URL}/cv`);
  const [cvData, setCvData] = useState(data);
  const [isPersonal, setIsPersonal] = useState(true);
  let section: JSX.Element;

  useEffect(() => {
    setCvData(data);
  }, [data]);

  const changeSectionPersonal = () => {
    setIsPersonal(true);
  };

  const changeSectionTech = () => {
    setIsPersonal(false);
  };

  if (!cvData) return null;

  if (isPersonal) {
    section = <AboutMe data={cvData} />;
  } else {
    section = <AboutTech data={cvData} />;
  }

  return (
    <SuperBox className="about">
      <div className="about__left superBox__left">
        <h2 className="about__title">About</h2>
        <Button
          className={`about__btn ${isPersonal ? "active" : ""}`}
          text="Personal"
          onClick={changeSectionPersonal}
        />
        <Button
          className={`about__btn ${!isPersonal ? "active" : ""}`}
          text="Tech"
          onClick={changeSectionTech}
        />
      </div>
      <div className="about__right superBox__right">{section}</div>
    </SuperBox>
  );
}
