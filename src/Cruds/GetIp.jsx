import axios from "axios";

export default async function GetIp(SetarState) {
    const ip = await axios.get("https://ipapi.co/json");
    SetarState(ip.data.ip);
}
