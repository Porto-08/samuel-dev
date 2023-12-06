"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  FaBriefcase,
  FaHome,
  FaMoon,
  FaPhone,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const { dark, setDark } = useDarkMode();
  const pathname = usePathname();

  return (
    <aside className={styles.nav}>
      <button
        type="button"
        className={styles.changeMode}
        onClick={() => setDark(!dark)}
      >
        {dark === true ? (
          <i role="button">
            <FaSun
              role="button"
              aria-label="Turn on Dark Mode"
              title="Turn on Dark Mode"
            />
          </i>
        ) : (
          <i role="button">
            <FaMoon
              role="button"
              aria-label="Turn on Light Mode"
              title="Turn on Light Mode"
            />
          </i>
        )}
      </button>

      <nav className={styles.navContainer}>
        <ul>
          <li title="Home">
            <Link
              href="/"
              aria-label="Home"
              passHref
              className={`${pathname === "/" ? "active" : ""}`}
            >
              <FaHome />
            </Link>
          </li>
          <li title="About">
            <Link
              href="about"
              aria-label="About me"
              passHref
              className={`${pathname === "/about" ? "active" : ""}`}
            >
              <FaUser />
            </Link>
          </li>
          <li title="Projects">
            <Link
              href="projects"
              aria-label="My Projects"
              passHref
              className={`${pathname === "/projects" ? "active" : ""}`}
            >
              <FaBriefcase />
            </Link>
          </li>
          <li title="Contact">
            <Link
              href="contact"
              aria-label="Getting in touch"
              passHref
              className={`${pathname === "/contact" ? "active" : ""}`}
            >
              <FaPhone />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidenav;
