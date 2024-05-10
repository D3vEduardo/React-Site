import { IoMdContact } from "react-icons/io";
import styles from "./Header.module.css";

export default function Head() {
    return (
        <div class={styles.body}>
            <IoMdContact className={styles.icone} />
            <h1 className={styles.title}>Contato</h1>
            <p>Entre em contato comigo para tirar dúvidas ou até mesmo contratar meu serviço.</p>
        </div>
    );
}
