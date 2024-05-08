import styles from "./Profile.module.css";
import { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logo.png";
import PegarDado from "../../Cruds/PegarDados";

export default function Profile() {
    const [nome, setNome] = useState([]);

    useEffect(() => {
        PegarDado("/Main/Nome/Nome", setNome);
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#img", {
            opacity: 0,
            width: "85%",
            maxWidth: "500px",
            scrollTrigger: {
                trigger: "#img",
                start: "top 120px",
                end: "bottom 180px",
                markers: false, // <-- Mude para true
                scrub: true,
                toggleActions: "restart pause reverse pause"
            }
        });
    }, []);

    const text =
        "Olá, eu sou um jovem de 15 anos que mora no interior de Goiás (Bom Jardim de Goiás). Fiz cursos gratuitos de HTML, CSS, JavaScript e React. Adoro programar e criar sites!";

    return (
        <div className={styles.profile}>
            <img src={logo} id="img" className={styles.img} />
            <h1 className={styles.name}>{nome}</h1>
            <h4>{text}</h4>
        </div>
    );
}
