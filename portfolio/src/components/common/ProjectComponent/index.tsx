import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    link,
}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded hover-effect transition-all">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        className="card-img-top rounded-top"
                        alt={title}
                        style={{ objectFit: "cover", height: "200px" }}
                    />
                )}
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1 text-start">{description}</p>
                    <div className="d-flex justify-content-center gap-3 mt-3">
                        {link && (
                             <div className="text-center">
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
                                        className="icon-img"
                                    />
                                </a>
                                <small className="d-block mt-1"><a href={link} target="_blank">Ver Projeto</a></small>
                            </div>
                        )}
                         <div className="text-center">
                            <a
                                href="https://github.com/renatoxd152/SistemaConsultas"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver no GitHub"
                                className="icon-button"
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                                    alt="GitHub"
                                    className="icon-img"
                                />
                            </a>
                            <small className="d-block mt-1"><a href="https://github.com/renatoxd152/SistemaConsultas" target="_blank">GitHub</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
