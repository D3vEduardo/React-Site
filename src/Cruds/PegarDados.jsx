import app from "../Firebase";
import { getDatabase, ref, get } from "firebase/database";

export default async function PegarDado(src, setState) {
    try {
        const db = getDatabase(app);
        const CaminhoDoDado = ref(db, `${src}`);
        const snapshot = await get(CaminhoDoDado);
        if (snapshot.exists()) {
            setState(Object.values(snapshot.val()));
        } else {
            alert("Error fetching data 1");
        }
    } catch (error) {
       alert("Error fetching data:", error);
    }
}
