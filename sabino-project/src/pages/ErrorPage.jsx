import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <>
            <h3>Erro ocorrido!</h3>
            <p>Temos um probleminha....</p>

            <Link to={"/"}>  Retornar para a tela de login</Link>
        </>
    )
}