import Alert from "../Elements/Alert/Alert";
import { useState } from "react";
import styles from "./Email.module.css";
import { MdOutlineMail } from "react-icons/md";

export default function Email() {
    const [AlertContent, setAlertContent] = useState("");
    const [AlertType, setAlertType] = useState("");
    const [AssuntoEmail, setAssuntoEmail] = useState("");
    const [MensagemEmail, setMensagemEmail] = useState("");
    return (
        <>
            {AlertContent && (
                <Alert
                    msg="Você será redireciondo em alguns segundos!"
                    tipo="sucesso"
                />
            )}
            <div className={styles.body}>
                <MdOutlineMail className={styles.icone} />
                <h1 className={styles.title}>E-mail</h1>
                <p>
                    Uma forma bem antiquada e atual ao mesmo tempo, más é uma
                    boa forma de entrar em contato comigo
                </p>
                <div className={styles.link}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Digite um assunto para o e-mail"
                        onChange={e => setAssuntoEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Digite uma mensagem para o e-mail"
                        onChange={e => setMensagemEmail(e.target.value)}
                    /><button
    className={styles.button}
    onClick={() => {
            setAlertContent("Você será redirecionado em alguns segundos!");
            setAlertType("sucesso");
            setTimeout(() => {
                setAlertContent("");
                setAlertType("");
                window.open(
                    `mailto:eduardoaugustolimabueno423@gmail.com?subject=${AssuntoEmail}&body=${MensagemEmail}`
                );
            }, 3000);
        }
    }
>
    Chama no e-mail
</button>
                    
                </div>
            </div>
        </>
    );
}
