import styles from "./Profile.module.css";
import { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../Firebase";
import logo from "../../assets/logo.png";

export default function Profile() {
    const [nome, setNome] = useState([]);

    const getNome = async () => {
        try {
            const db = getDatabase(app);
            const CaminhoDoDado = ref(db, "/Main/Nome/Nome");
            const snapshot = await get(CaminhoDoDado);
            if (snapshot.exists()) {
                setNome(Object.values(snapshot.val()));
            } else {
                console.error("Error fetching data 1");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getNome();
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#img", {
            opacity: 0,
            width: "85%",
            scrollTrigger: {
                trigger: "#img",
                start: "top 125px",
                end: "bottom 140px",
                startTrigger: "#img",
                endTrigger: "#img",
                markers: true,
                scrub: true
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
