import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>Me siga:</p>
            <CiInstagram
                className={styles.icone}
                onClick={() => window.open("https://instagram.com/deveduardo")}
            />
            <FaGithub
                className={styles.icone}
                onClick={() => window.open("https://github.com/EduCod3")}
            />
        </footer>
    );
}
