import React from "react";
import "./index.css";
export const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex flex-column">
            <section className="flex-grow-1 d-flex align-items-center justify-content-center bg-light">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h1 className="display-4 mb-3">Olá, meu nome é Renato</h1>
                                <p className="lead mb-4">
                                    Sou um desenvolvedor web focado na criação de aplicações de alta performance
                                    que impulsionam o sucesso de produtos digitais.
                                </p>
                                <a href="#projects" className="animated-button1">
                                    Ver Projetos
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                
                </footer>
            </main>
        </div>
    );
};
