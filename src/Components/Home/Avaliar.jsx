import styles from "./Avaliar.module.css";
import { IoIosHappy } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegFrownOpen, FaFrownOpen } from "react-icons/fa";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Alert from "../Elements/Alert/Alert";

import GetDado from "../../Cruds/Get";
import GetIp from "../../Cruds/GetIp";

export default function Avaliar() {
    const [RateData, setRateData] = useState({});
    const [IpData, setIpData] = useState([]);
    const [UserIp, setUserIp] = useState([]);

    const [AlertContent, setAlertContent] = useState("");
    const [AlertType, setAlertType] = useState("");

    useEffect(() => {
        GetDado("rates", setRateData);
        GetDado("ips", setIpData);
        GetIp(setUserIp);
        console.log(IpData);
    }, []);

    return (
        <>
            {AlertContent && <Alert msg={AlertContent} tipo={AlertType} />}
            <section className={styles.body}>
                <h1 className={styles.title}>Avalie o site:</h1>
                <section className={styles.sec_carinhas}>
                    <figure className={styles.fig_carinha}>
                        <FaRegFrownOpen />
                        <p>{RateData.bad} votos</p>
                    </figure>
                    <figure className={styles.fig_carinha}>
                        <BsEmojiNeutral />
                        <p>{RateData.medium} votos</p>
                    </figure>
                    <figure className={styles.fig_carinha}>
                        <IoHappyOutline />
                        <p>{RateData.good} votos</p>
                    </figure>
                </section>
            </section>
        </>
    );
}
