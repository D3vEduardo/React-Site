import { useState } from "react";
import Profile from "../Home/Profile";
import Cursos from "../Home/Cursos";
import Projeto from "../Home/Projeto";
import Avaliar from "../Home/Avaliar";
import Loader from "../Elements/Loader/Loader";

export default function Home() {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            {loading === true ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <Profile className="Profile" setLoad={setLoading} />
                    <Cursos />
                    <Projeto />
                    <Avaliar />
                </>
            )}
        </div>
    );
}
