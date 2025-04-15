import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    RenatoDev
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
