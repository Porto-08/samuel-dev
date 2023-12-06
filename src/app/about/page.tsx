import {
  FaReact,
  FaPhp,
  FaSass,
  FaGit,
  FaNode,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaAws,
} from "react-icons/fa";
import {
  SiMysql,
  SiTypescript,
  SiMongodb,
  SiInsomnia,
  SiVisualstudiocode,
  SiNextdotjs,
  SiStyledcomponents,
  SiJest,
  SiServerless,
} from "react-icons/si";
import { NextPage } from "next";
import Head from "next/head";
import Experiences from "../../components/Experiences";
import styles from "./styles.module.scss";

const About: NextPage = () => {
  const idade = new Date().getFullYear() - 2001;

  return (
    <>
      <Head>
        <title>Samuel Porto - Sobre mim</title>
      </Head>

      <div className={`${styles.container}  fadeInTop`}>
        <div className={styles.about}>
          <div className={styles.aboutMe}>
            <h1>Samuel Porto - Fullstack Developer</h1>

            <p>
              Graduated in Technical Systems Development from Etec and studying
              Systems Analysis and Development, I am a Fullstack Developer with
              three years experience in agile environments working with Node,
              React, Typescript, PHP, Docker and Jest for automated testing.
            </p>

            <br />

            <p>
              I have experience with CI/CD for continuous delivery using Azure
              Pipeline and with Cloud services such as AWS Lambda, S3, SQS, SNS,
              SES, DynamoDB, ECS, EC2, among others.
            </p>

            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5511980540272"
                target="_blank"
                rel="noreferrer"
                title="Send me a message"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://github.com/Porto-08"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/samuelporto"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className={styles.information}>
            <section className={styles.listProfile}>
              <ul>
                <li>
                  Age: <span>{idade}</span>
                </li>
                <li>
                  Location: <span>Brazil</span>
                </li>
                <li>
                  Email:
                  <span>
                    <a
                      href="mailto:samuelalcala2001@outlook.com?Subject=Bora%20falar%20de%20projetos%3F&Body=Sua%20mensagem..."
                      title="Send an email"
                    >
                      samuelalcala2001@outlook.com
                    </a>
                  </span>
                </li>
                <li>
                  Phone / Whatsapp:
                  <span>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511980540272"
                      target="_blank"
                      rel="noreferrer"
                      title="Send me an message on Whatsapp"
                    >
                      55+ (11) 980540272
                    </a>
                  </span>
                </li>
                <li>
                  Degree:
                  <span>
                    <a
                      href="https://www.unicesumar.edu.br/blog/analise-e-desenvolvimento-de-sistemas-ead/"
                      target="_blank"
                      rel="noreferrer"
                      title="Know the course"
                    >
                      Systems Analysis and Development
                    </a>
                  </span>
                </li>
                <li>
                  English:
                  <span>
                    <a
                      href="https://www.cna.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      title="Know the course"
                    >
                      Advanced
                    </a>
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className={styles.experiences}>
          <h2>Experiences</h2>

          <Experiences
            title="Uhuu! - Fullstack Developer"
            date={`Aug 2023 - Now`}
            description="
              - Applications Developments and maintenances with PHP - React - Laravel - SQL - Docker - NodeJs;
              - On-call support for applications in production;
              - SQL queries development for data extration;
              - Daily meetings with technical team.
            "
            linkWebsite="https://uhuu.com/"
            technologies={[
              { title: "React", link: "https://reactjs.org/" },
              { title: "NodeJs", link: "https://nodejs.org/en/" },
              { title: "Php", link: "https://www.php.net/" },
              {
                title: "Laravel",
                link: "https://laravel.com/",
              },
              {
                title: "AWS",
                link: "https://aws.amazon.com/",
              },
              {
                title: "Docker",
                link: "https://www.docker.com/",
              },
            ]}
          />

          <Experiences
            title="Albert Einstein - Fullstack Developer"
            date={`Mar 2022 - July 2023`}
            description="
            - Dashboards development and maintenance with React - Typescript - Styled Components;
            - APIs development and maintenance with NodeJs - Typescript - NestJs- SQL; 
            - APIs documentations with Swagger;
            - Docker for local development; 
            - Deploys applications on AWS manually or with pipelines (CI/CD);
            - Automated testing with Jest and Supertest;
            - Scrum-based development
            "
            linkWebsite="https://www.einstein.br/"
            technologies={[
              { title: "React", link: "https://reactjs.org/" },
              { title: "NodeJs", link: "https://nodejs.org/en/" },
              { title: "Typescript", link: "https://www.typescriptlang.org/" },
              {
                title: "Styled Components",
                link: "https://styled-components.com/",
              },
              {
                title: "AWS",
                link: "https://aws.amazon.com/",
              },
            ]}
          />

          <Experiences
            title="Bizsys - Fullstack Developer"
            date="June 2021 - Feb 2022"
            description="
            - Development of on-demand applications with React - NextJs - Styled Components - Unity;
            - Deployment of applications on AWS.
            "
            linkWebsite="https://bizsys.com.br/"
            technologies={[
              { title: "React", link: "https://reactjs.org/" },
              { title: "NodeJs", link: "https://nodejs.org/en/" },
              { title: "PHP", link: "https://www.php.net/" },
              { title: "Laravel", link: "https://laravel.com/" },
            ]}
          />

          <Experiences
            title="RecodePro - Programming Monitor"
            date="Dez 2020 - Mar 2021"
            description="
            - Tutoring three times a week;
            - Programming classes (React, NodeJs, Javascript) twice a week;
            - Correcting projects;
            - Preparing activities; 
            - Decision-making with the team.
            "
            linkWebsite="https://recodepro.org.br/"
            technologies={[
              { title: "React", link: "https://reactjs.org/" },
              { title: "NodeJs", link: "https://nodejs.org/en/" },
              { title: "React Native", link: "https://reactnative.dev/" },
            ]}
          />
        </div>

        <div className={styles.skills}>
          <section className={styles.skillsBox}>
            <h3>Front-end Development</h3>

            <div className={styles.skillContent}>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiNextdotjs />

                <span>NextJs</span>
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaReact />

                <span>React</span>
              </a>

              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaSass />
                <span>Sass</span>
              </a>

              <a
                href="https://styled-components.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiStyledcomponents />
                <span>Styled Components</span>
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiTypescript />
                <span>Typescript</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Back-end Development</h3>

            <div className={styles.skillContent}>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaNode />

                <span>NodeJs</span>
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiTypescript />
                <span>Typescript</span>
              </a>

              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaPhp />

                <span>Php</span>
              </a>

              <a
                href="https://www.serverless.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiServerless />

                <span>Serverless</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Tools and Databases</h3>

            <div className={styles.skillContent}>
              <a
                href="https://jestjs.io/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiJest />
                <span>Jest</span>
              </a>

              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaAws />
                <span>AWS</span>
              </a>

              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <FaGit />
                <span>Git</span>
              </a>

              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiMysql />
                <span>MySql</span>
              </a>

              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiMongodb />
                <span>MongoDB</span>
              </a>

              <a
                href="https://insomnia.rest/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiInsomnia />
                <span>Insomnia</span>
              </a>

              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
                title="See more about this technology"
              >
                <SiVisualstudiocode />
                <span>VS Code</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
