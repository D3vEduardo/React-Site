import { useLayoutEffect } from "react";
import Profile from "../Home/Profile";
import Cursos from "../Home/Cursos";
import Projeto from "../Home/Projeto";
import Avaliar from "../Home/Avaliar";
import "./Home.module.css";

export default function Home() {
    return (
        <div>
            <Profile className="Profile" />
            <Cursos />
            <Projeto />
            <Avaliar/>
        </div>
    );
}
