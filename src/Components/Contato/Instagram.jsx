import Alert from "../Elements/Alert/Alert";
import { useState } from "react";
import styles from "./Instagram.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Instagra() {
    const [AlertContent, setAlertContent] = useState("");
    const [AlertType, setAlertType] = useState("");

    return (
        <>
            {AlertContent && <Alert msg={AlertContent} tipo={AlertType} />}
            <div className={styles.body}>
                <FaInstagram className={styles.icone} />
                <h1 className={styles.title}>Instagram</h1>
                <p>
                    Instagram é uma das redes sociais onde você pode entrar em
                    contato comigo. Por mais que eu demore um pouco para
                    responde
                </p>
                <button
                    onClick={() => {
                        setAlertContent(
                            "Você será redirecionado em alguns segundos!"
                        );
                        setAlertType("sucesso");
                        setTimeout(() => {
                            setAlertContent();
                            setAlertType();
                            window.open("https://ig.me/m/oduh.gym");
                        }, 3000);
                    }}
                    className={styles.button}
                >
                    Chama no Insta!!
                </button>
            </div>
        </>
    );
}
