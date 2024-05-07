import styles from "./Cursos.module.css";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Cursos() {
    const HtmlCss = () =>
        window.open(
            "https://youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&si=UIRGu88NCpPrVa_I"
        );

    return (
        <div className={styles.cursos}>
            <h1 className={styles.title}>Cursos completados</h1>
            <FaHtml5 className={styles.logo} onClick={HtmlCss} />
            <FaCss3 className={styles.logo} onClick={HtmlCss}/>
            <IoLogoJavascript className={styles.logo} onClick={() => {
              window.open("https://youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&si=_Q81wlkhnk6p0rlC")
            }} />
            <FaReact className={styles.logo} onClick={() => {
            window.open("https://youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&si=J9kqZkJWOjyZpsrl")}}/>
        </div>
    );
}
