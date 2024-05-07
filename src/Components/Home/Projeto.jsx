import styles from "./Projeto.module.css";
import { FaLink } from "react-icons/fa6";

export default function Projeto() {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Projetos/Exercícios</h1>
            <div
                className={styles.projetos}
                onClick={() => {
                    window.open("https://oduhgym.netlify.app");
                }}
            >
                <div className={styles.projeto}>
                    <FaLink className={styles.icone} />
                    <h3 className={styles.text}>
                        Web-Site
                        <br />
                        pessoal
                    </h3>
                </div>
                <div
                    className={styles.projeto}
                    onClick={() => {
                        window.open("https://bakibrowser.netlify.app");
                    }}
                >
                    <FaLink className={styles.icone} />
                    <h3 className={styles.text}>
                        "Browser"
                        <br />
                        pessoal
                    </h3>
                </div>
            </div>
        </div>
    );
}
