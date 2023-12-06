"use client";
import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";
import ContactDark from "../../assets/svg/contactDark.svg";
import ContactLight from "../../assets/svg/contactLight.svg";
import Image from "next/image";

const Contact = () => {
  const { dark } = useDarkMode();

  return (
    <div className={`${styles.container} fadeInTop`}>
      <Head>
        <title>Samuel Porto - Contact</title>
      </Head>

      <h1>Contact</h1>
      <span>The easiest way to contact me</span>

      <section>
        {dark ? (
          <div className={styles.contactPhoto}>
            <Image src={ContactDark} alt="About me" draggable={false} />
          </div>
        ) : (
          <div className={styles.contactPhoto}>
            <Image src={ContactLight} alt="About me" draggable={false} />
          </div>
        )}

        <ul>
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
                title="Send a message on Whatsapp"
              >
                55+ (11) 980540272
              </a>
            </span>
          </li>
          <li>
            Linkedin:
            <span>
              <a
                href="https://www.linkedin.com/in/samuelporto/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                Ver perfil
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
