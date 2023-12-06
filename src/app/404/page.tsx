"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useDarkMode } from "../../context/DarkModeContext";
import NotFoundDark from "../../assets/svg/notFoundDark.svg";
import NotFoundLight from "../../assets/svg/notFoundLight.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

const NotFound = () => {
  const { dark } = useDarkMode();

  return (
    <div className={`${styles.container} fadeInTop`}>
      <div className={styles.imageContainer}>
        {dark ? (
          <Image
            src={NotFoundDark}
            layout="responsive"
            alt="404 - Page not found"
          />
        ) : (
          <Image
            src={NotFoundLight}
            layout="responsive"
            alt="404 - Page not found"
          />
        )}
      </div>

      <div>
        <h1>You are not supposed to be here</h1>
        <span>
          But dont worry, just click <Link href="/">here</Link> to go back to
          the home page
        </span>
      </div>
    </div>
  );
};

export default NotFound;
