import React from "react";

interface TecnologiaProp {
    name: string;
    icon: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
    githubLink?: string;
    tecnologias: Array<TecnologiaProp>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    link,
    githubLink,
    tecnologias,
}) => {
    return (
        <div className="col-md-12 mb-4">
            <div className="card h-100 shadow-sm rounded hover-effect transition-all bg-transparent border-0">
                <div className="row g-0 h-100">
                    {imageUrl && (
                        <div className="col-md-4 d-flex align-items-center">
                            <img
                                src={imageUrl}
                                className="img-fluid rounded-start w-100"
                                alt={title}
                                style={{ 
                                    objectFit: "contain",
                                    maxHeight: "300px",
                                    height: "auto"
                                }}
                            />
                        </div>
                    )}
                    
                    <div className={imageUrl ? "col-md-8" : "col-md-12"}>
                        <div className="card-body h-100 d-flex flex-column">
                            <h5 className="card-title text-primary fw-bold">{title}</h5>
                            <p className="card-text flex-grow-1 text-muted">{description}</p>
                            
                            {tecnologias.length > 0 && (
                                <div className="mt-3">
                                    <h6 className="fw-semibold">Tecnologias usadas:</h6>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {tecnologias.map((tech, index) => (
                                            <div key={index} className="d-flex flex-column align-items-center">
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    style={{ width: "48px", height: "48px" }}
                                                    className="mb-1"
                                                />
                                                <span className="text-dark fw-semibold small">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="d-flex justify-content-start gap-3 mt-auto">
                                {link && (
                                    <div className="d-flex flex-column align-items-center">
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Ver Projeto Online"
                                            className="icon-button"
                                        >
                                            <img
                                                src="https://img.icons8.com/?size=100&id=13450&format=png&color=000000"
                                                alt="Ver projeto"
                                                style={{ width: "48px", height: "48px" }}
                                            />
                                        </a>
                                        <small className="mt-1">
                                            <a href={link} target="_blank" rel="noopener noreferrer">
                                                Ver Projeto
                                            </a>
                                        </small>
                                    </div>
                                )}
                                
                                {githubLink && (
                                    <div className="d-flex flex-column align-items-center">
                                        <a
                                            href={githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Ver no GitHub"
                                            className="icon-button"
                                        >
                                            <img
                                                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                                                alt="GitHub"
                                                style={{ width: "48px", height: "48px" }}
                                            />
                                        </a>
                                        <small className="mt-1">
                                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        </small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};