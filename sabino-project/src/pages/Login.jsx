import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                senha,
            });

            // Se login for bem-sucedido, redirecionar
            if (response.status === 200) {
                navigate("/dashboard"); // ou outra página principal
            }

        } catch (err) {
            console.error(err);
            navigate("/ErrorPage"); // Redireciona para rota de erro
        }
    };

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

