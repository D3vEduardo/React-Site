import styles from "./Projeto.module.css";
import { FaLink } from "react-icons/fa6";

const ProjetoItem = ({ url, title }) => (
    <figure className={styles.projeto} onClick={() => window.open(url)}>
        <FaLink className={styles.icone} />
        <h3 className={styles.text}>{title}</h3>
    </figure>
);

export default function Projeto() {
    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Projetos/Exercícios</h1>
            <div className={styles.projetos}>
                <ProjetoItem
                    url="https://oduhgym.vercel.app"
                    title={
                        <>
                            Web-Site
                            <br />
                            pessoal
                        </>
                    }
                />
                <ProjetoItem
                    url="https://oduhbrowser.vercel.app"
                    title={
                        <>
                            "Browser"
                            <br />
                            pessoal
                        </>
                    }
                />
            </div>
        </section>
    );
}
