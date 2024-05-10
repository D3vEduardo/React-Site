import styles from "./Alert.module.css";
import { useState, useEffect } from "react";

export default function Alert({ msg, tipo }) {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisivel(false);
            return;
        }
        const tempo = setVisivel(true);
        setTimeout(() => {
            setVisivel(false);
        }, 3000);

        return () => clearTimeout(tempo);
    }, []);

    return (
        <>
            {visivel && (
                <div className={`${styles.alert} ${styles[tipo]}`}>
                    {msg}
                </div>
            )}
        </>
    );
}
