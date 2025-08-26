function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> Mecanica Sabino</div>
            <ul>
                <li><link to="/clientes">Clientes</link></li>
                <li><link to="/servico">Serviços</link></li>
                <li><link to="/estoque">Estoque</link></li>
            </ul>
        </nav>

    )
}