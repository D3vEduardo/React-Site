import styles from "./Avaliar.module.css";
import { IoIosHappy } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegFrownOpen, FaFrownOpen } from "react-icons/fa";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../Firebase";

const ClickRate = id => {
    alert(`Clicou no ${id}`);
};

const Carinha = () => (
    <section className={styles.sec_carinhas}>
        <figure className={styles.fig_carinha}>
            <FaRegFrownOpen
                onClick={() => {
                    ClickRate(1);
                }}
            />
            <p>Ruim</p>
        </figure>
        <figure className={styles.fig_carinha}>
            <BsEmojiNeutral
                onClick={() => {
                    ClickRate(2);
                }}
            />
            <p>Médio</p>
        </figure>
        <figure className={styles.fig_carinha}>
            <IoHappyOutline
                onClick={() => {
                    ClickRate(3);
                }}
            />
            <p>Bom</p>
        </figure>
    </section>
);

export default function Avaliar() {
    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Avalie o site:</h1>
            <Carinha />
        </section>
    );
}
