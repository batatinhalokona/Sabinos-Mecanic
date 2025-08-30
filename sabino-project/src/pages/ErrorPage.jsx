import { useNavigate } from "react-router-dom";
import Login from "./login";

export default function ErrorPage() {
    const navigate = useNavigate('/Login');
    return (
        <>
            <h3>Erro ocorrido!</h3>
            <p>Temos um probleminha....</p>

            <button onClick={navigate}> Retornar para a tela de login</button>
        </>
    )
}