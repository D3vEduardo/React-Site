import app from "../Firebase";
import { getDatabase, ref, update } from "firebase/database";

export default async function AtualizarDados(src, NovoDado) {
    try {
        const db = getDatabase(app);
        const CaminhoDoDado = ref(db, `${src}`);
        await update(CaminhoDoDado, NovoDado);
        console.log(`Dados atualizados!`);
    } catch (error) {
        alert("Erro ao atualizar o dado:", error);
    }
}
