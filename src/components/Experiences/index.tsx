import React from "react";
import styles from "./styles.module.scss";

interface ITecnologies {
  title: string;
  link: string;
}

interface IExperiencesProps {
  title: string;
  date: string;
  description: string;
  linkWebsite: string;
  technologies: ITecnologies[];
}

const Experiences = ({
  title,
  technologies,
  date,
  description,
  linkWebsite,
}: IExperiencesProps) => {
  const descriptionFormatted = description.split(";").map((item, index) => {
    return (
      <span key={index} className={styles.description}>
        {item}
        <br />
      </span>
    );
  });

  return (
    <div className={styles.experienceBox}>
      <header>
        <h4>{title}</h4>
        <span>{date}</span>
      </header>

      {descriptionFormatted}

      <ul>
        <li>
          <a
            href={linkWebsite}
            target="_blank"
            rel="noreferrer"
            title="Visit Website"
          >
            Website
          </a>
        </li>

        <span>|</span>

        {technologies.map((technology) => {
          return (
            <li key={technology.title}>
              <a
                href={technology.link}
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                {technology.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experiences;
