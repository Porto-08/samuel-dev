"use client";
import type { NextPage } from "next";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import styles from "./styles.module.scss";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import DownloadCv from "../components/DownloadCv";
import Typist from "react-text-typist";
import Link from "next/link";
import { useDarkMode } from "../context/DarkModeContext";

const Home: NextPage = () => {
  const { dark } = useDarkMode();

  return (
    <div className={`${styles.container}  fadeInTop`}>
      <Image
        className={dark ? "not-gray-profile" : "gray-profile"}
        src={profile}
        height={300}
        width={300}
        alt="Samuel Porto - Profile"
        title="Samuel Porto - Profile"
        objectFit="cover"
        priority={true}
        draggable={false}
        loading="eager"
      />

      <div className={styles.description}>
        <h1 title="Me!">
          <Typist
            sentences={["Samuel Porto", "Fullstack Dev."]}
            typingSpeed={200}
          />
        </h1>

        <p>
          I am a fullstack developer who loves helping people through technology
          and share knowledge.
        </p>

        <div>
          <a
            href="https://github.com/Porto-08"
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/porto__0/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/samuelporto/"
            target="_blank"
            title="Linkedin"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511980540272"
            target="_blank"
            title="Send me a message"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <section className={styles.buttons}>
          <DownloadCv />

          <Link href="/contact">Contact</Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
