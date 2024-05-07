import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <CiInstagram
                className={styles.icone}
                onClick={() => window.open("https://instagram.com/oduh.gym")}
            />
            <FaGithub
                className={styles.icone}
                onClick={() => window.open("https://github.com/EduCod3")}
            />
            <p className={styles.p}>by Edu Code</p>
        </footer>
    );
}
