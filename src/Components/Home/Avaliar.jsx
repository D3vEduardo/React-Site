import styles from "./Avaliar.module.css";
import { IoIosHappy } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegFrownOpen, FaFrownOpen } from "react-icons/fa";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import app from "../../Firebase";
import PegarDado from "../../Cruds/PegarDados";
import AtualizarDados from "../../Cruds/AtualizarDados";

export default function Avaliar() {
    const ClickRate = (url, nome, valorAtual, setState) => {
 
  if (document.cookie.replace(/(?:(?:^|.*;\s*)avaliou\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "true") {
    alert("❌ • Você já avaliou o site anteriormente!");
  } else {
    let valorNovo = valorAtual + 1;
            setState(valorNovo);
            String(valorNovo);
            AtualizarDados(url, {
                qtd: valorNovo
            });
    document.cookie = "avaliou=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
}
      
            


       

    const [Bad, setBad] = useState([]);
    const [Medium, setMedium] = useState([]);
    const [Good, setGood] = useState([]);
    const [QtdAll, setQtdAll] = useState([]);

    useEffect(() => {
        PegarDado("/Main/Stars/Bad", setBad);
        PegarDado("/Main/Stars/Medium", setMedium);
        PegarDado("/Main/Stars/Good", setGood);
    }, []);

    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Avalie o site:</h1>
            <section className={styles.sec_carinhas}>
                <figure className={styles.fig_carinha}>
                    <FaRegFrownOpen
                        onClick={() => {
                            ClickRate(
                                "/Main/Stars/Bad",
                                "Bad",
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
                                "Medium",
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
                                "Good",
                                Number(Good),
                                setGood
                            );
                        }}
                    />
                    <p>{String(Good)} votos</p>
                </figure>
            </section>
        </section>
    );
}
