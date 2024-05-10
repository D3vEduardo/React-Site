import styles from "./Avaliar.module.css";
import { IoIosHappy } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegFrownOpen, FaFrownOpen } from "react-icons/fa";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import app from "../../Firebase";
import PegarDado from "../../Cruds/PegarDados";
import AtualizarDados from "../../Cruds/AtualizarDados";
import Alert from "../Elements/Alert/Alert";

export default function Avaliar() {
  
    const [Bad, setBad] = useState([]);
    const [Medium, setMedium] = useState([]);
    const [Good, setGood] = useState([]);
    const [QtdAll, setQtdAll] = useState([]);

    const [AlertContent, setAlertContent] = useState("");
    const [AlertType, setAlertType] = useState("");

    function getCookie(name) {
        let cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    const ClickRate = (url, nome, valorAtual, setState) => {
        if (document.cookie.includes("rate=true")) {
            let thisrate = getCookie("thisrate");
            setAlertContent(
                `Você avaliou o site anteriormente como ${thisrate}!`
            );
            setAlertType("erro");
            setTimeout(() => {
                setAlertContent();
                setAlertType();
            }, 3000);
        } else {
            let valorNovo = valorAtual + 1;
            setState(valorNovo);
            String(valorNovo);
            AtualizarDados(url, {
                qtd: valorNovo
            });
            document.cookie =
                "rate=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
            document.cookie = `thisrate=${nome}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
            setAlertContent(
                `Você avaliou o site como ${nome}! Obrigado pelo feedback!`
            );
            setAlertType("sucesso");
            setTimeout(() => {
                setAlertContent();
                setAlertType();
            }, 3000);
        }
    };

    useEffect(() => {
        PegarDado("/Main/Stars/Bad", setBad);
        PegarDado("/Main/Stars/Medium", setMedium);
        PegarDado("/Main/Stars/Good", setGood);
    }, []);

    return (
        <>
            {AlertContent && <Alert msg={AlertContent} tipo={AlertType} />}
            <section className={styles.body}>
                <h1 className={styles.title}>Avalie o site:</h1>
                <section className={styles.sec_carinhas}>
                    <figure className={styles.fig_carinha}>
                        <FaRegFrownOpen
                            onClick={() => {
                                ClickRate(
                                    "/Main/Stars/Bad",
                                    "Ruim",
                                    Number(Bad),
                                    setBad
                                );
                            }}
                        />
                        <p>{String(Bad)} votos</p>
                    </figure>
                    <figure className={styles.fig_carinha}>
                        <BsEmojiNeutral
                            onClick={() => {
                                ClickRate(
                                    "/Main/Stars/Medium",
                                    "Mediano",
                                    Number(Medium),
                                    setMedium
                                );
                            }}
                        />
                        <p>{String(Medium)} votos</p>
                    </figure>
                    <figure className={styles.fig_carinha}>
                        <IoHappyOutline
                            onClick={() => {
                                ClickRate(
                                    "/Main/Stars/Good",
                                    "Bom",
                                    Number(Good),
                                    setGood
                                );
                            }}
                        />
                        <p>{String(Good)} votos</p>
                    </figure>
                </section>
            </section>
        </>
    );
}
