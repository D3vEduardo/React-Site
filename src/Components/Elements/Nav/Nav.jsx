import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link to="/" className={styles.link}>
                        <IoHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link to="/contato" className={styles.link}>
                        <IoMdContact />
                        <span>Contato</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
