import axios from "axios";

export default async function GetDado(CategoriaDoDado, SetaState) {
    await axios
        .get(`https://rate-api.vercel.app/${CategoriaDoDado}`)
        .then(response => {
            SetaState(response.data);
            console.log(response.data);
        })
        .catch(error => console.error("Deu erro meu patrão!", error));
}
