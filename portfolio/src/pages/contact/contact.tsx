import React from "react";

export const Contact: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
            <main className="flex-grow-1 mt-5" id="contact">
                <h1 className="mb-4 text-primary fw-bold text-center">Contato</h1>
                <p className="mb-4 text-center">Se gostou do que viu, entre em contato comigo, que responderei assim que possível.</p>
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="container p-4 rounded shadow-lg bg-white" style={{ maxWidth: "600px" }}>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">Nome</label>
                                    <input type="text" className="form-control" id="name" placeholder="Seu nome" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@email.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-semibold">Mensagem</label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Escreva sua mensagem aqui..." required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg animated-button1">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <div className="container">
                    <p className="mb-0">&copy; {new Date().getFullYear()} RenatoDev</p>
                    <p className="mb-0">Todos os direitos reservados</p>
                    
                    <div className="d-flex justify-content-center">
                        <p className="mx-3">
                            <a href="https://www.linkedin.com/in/renato-morillo-b91a761b4/" target="_blank">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                            </a>
                        </p>
                        <p className="mx-3">
                            <a href="https://wa.me/5516997410581" target="_blank">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whatsapp"/>
                            </a>
                        </p>
                        <p className="mx-3">
                            <a href="https://github.com/renatoxd152" target="_blank">
                                <img width="48" height="48" src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="GitHub"/>
                            </a>
                        </p>
                        <p className="mx-3">
                            <a href="mailto:renatomorillo@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail"/>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};