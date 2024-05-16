import styles from "./Profile.module.css";
import logo from "../../assets/logo.png";

export default function Profile() {
    const text =
        "Olá, eu sou um jovem de 15 anos que mora no interior de Goiás (Bom Jardim de Goiás). Fiz cursos gratuitos de HTML, CSS, JavaScript e React. Adoro programar e criar sites!";

    return (
        <header className={styles.profile}>
            <img src={logo} id="img" className={styles.img} />
            <h1 className={styles.name}>Eduardo Augusto</h1>
            <h4>{text}</h4>
        </header>
    );
}
