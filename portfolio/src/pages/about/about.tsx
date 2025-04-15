import React from "react";
import "../../pages/index.css";

export const About: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
            <main className="flex-grow-1 mt-5" id="about">
                {/* Mantenha o título centralizado */}
                <h1 className="mb-4 text-primary fw-bold text-center">Um pouco sobre mim</h1>
                <p className="mb-4 text-center">Aqui você encontra um pouco sobre mim e as linguagens que utilizo</p>
                
                <div className="container py-5">
                    <div className="row g-4">
                        <aside className="col-md-4 p-5 rounded">
                            <div className="d-flex flex-column justify-content-center h-100">
                                <div className="lead text-muted text-start">
                                    <p>
                                        Sou um desenvolvedor web fullstack focado em soluções modernas e eficientes.
                                        Confira alguns dos meus projetos na seção de portfólio.
                                    </p>
                                    <p>
                                        Tenho paixão por tecnologia, inovação e segurança, buscando sempre entregar valor
                                        e sucesso para os negócios.
                                    </p>
                                    <p>
                                        Estou aberto a oportunidades de crescimento. Se meus projetos ou tecnologias chamaram
                                        sua atenção, entre em contato comigo!
                                    </p>
                                </div>
                            </div>
                        </aside>

                        <article className="col-md-8">
                            <section>
                                <h2 className="mb-5 text-dark fw-bold text-center">Minhas Habilidades</h2>
                                <div className="row justify-content-center gy-4">
                                    {skills.map((skill, index) => (
                                        <div className="col-6 col-md-4 col-lg-3" key={index}>
                                            <div className="bg-white p-3 rounded-3 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center hover-effect">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    style={{ width: "48px", height: "48px" }}
                                                    className="mb-2"
                                                />
                                                <p className="mb-0 text-dark fw-semibold">{skill.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
};

const skills = [
    { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "Java", icon: "https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000" },
    { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { name: "React", icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
    { name: "SQL", icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" },
    { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
    { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
];