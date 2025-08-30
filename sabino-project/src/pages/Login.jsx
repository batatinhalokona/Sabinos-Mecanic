import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import "../css/Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro(null);

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                senha,
            });
        } catch (err) {
            console.error(err);
            setErro("Credenciais inválidas ou erro no servidor.");
        }
    };

    if (erro) {
        return <ErrorPage />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />

            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login;
