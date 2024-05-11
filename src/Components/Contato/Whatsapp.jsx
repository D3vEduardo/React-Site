import { FaWhatsapp, FaLink } from "react-icons/fa";
import styles from "./Whatsapp.module.css";
import { useState } from "react";

import Alert from "../../Components/Elements/Alert/Alert";

export default function Whatsapp() {
    const [ValueInput, setValueInput] = useState("");

    const [AlertContent, setAlertContent] = useState("");
    const [AlertType, setAlertType] = useState("");

    const buttonClick = () => {
        if (ValueInput != "") {
            setAlertContent("Você será redirecionado em alguns segundos!");
            setAlertType("sucesso");
            setTimeout(() => {
                window.open(
                    `https://api.whatsapp.com/send?phone=5564996266515&text=${ValueInput}`
                );
                setAlertContent();
                setAlertType();
            }, 3000);
        } else {
            setAlertContent("Digite uma mensagem no campo de texto!");
            setAlertType("erro");
            setTimeout(() => {
                setAlertContent();
                setAlertType();
            }, 3000);
        }
    };

    return (
        <>
            {AlertContent && <Alert msg={AlertContent} tipo={AlertType} />}
            <div className={styles.body}>
                <FaWhatsapp className={styles.icone} />
                <h1 className={styles.title}>WhatsApp</h1>
                <p>
                    Caso tenha alguma dúvida aperte no botão abaixo para ser
                    redirecionado para o WhatsApp.
                </p>
                <section className={styles.link}>
                    <input
                        placeholder="Digite uma mensagem personalizada: "
                        type="text"
                        className={styles.input}
                        onChange={e => setValueInput(e.target.value)}
                    />
                    <button className={styles.button} onClick={buttonClick}>
                        <FaLink />
                        Chama no Zap!
                    </button>
                </section>
            </div>
        </>
    );
}
