import styles from "./Profile.module.css";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import PegarDado from "../../Cruds/PegarDados";

export default function Profile() {
    const [nome, setNome] = useState([]);

    useEffect(() => {
        PegarDado("/Main/Nome/Nome", setNome);
    }, []);

    const text =
        "Olá, eu sou um jovem de 15 anos que mora no interior de Goiás (Bom Jardim de Goiás). Fiz cursos gratuitos de HTML, CSS, JavaScript e React. Adoro programar e criar sites!";

    return (
        <header className={styles.profile}>
            <img src={logo} id="img" className={styles.img} />
            <h1 className={styles.name}>{nome}</h1>
            <h4>{text}</h4>
        </header>
    );
}
