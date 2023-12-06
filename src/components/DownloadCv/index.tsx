import styles from "./styles.module.scss";

const DownloadCv = () => {
  return (
    <a
      href="./samuel-porto.pdf"
      download
      className={styles.btnDownloadCv}
      title="Download CV"
    >
      Download CV
    </a>
  );
};

export default DownloadCv;
