import { ProjectCard } from "../../components/common/ProjectComponent";
import consultasmedicas from "/images/consultasmedicas.png";

export const Projects: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
            <main className="flex-grow-1 mt-5" id="projects">
                <h1 className="mb-4 text-primary fw-bold text-center">Projetos</h1>
                <p className="mb-4 text-center">Essa seção é destinada aos meus projetos pessoais</p>
                <div className="container py-5">
                    <div className="row g-4">
                        <ProjectCard
                            title="Sistema de consultas médicas"
                            description="Um sistema para consultas médicas 
                            que cadastra consultas, médicos, pacientes, medicamentos. Além disso, possui geração de relatórios e dashboards"
                            imageUrl={consultasmedicas}
                            link="https://sistema-consultas-olive.vercel.app/"
                            githubLink="https://github.com/renatoxd152/SistemaConsultas"
                            tecnologias={[
                                { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
                                { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
                                { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
                                { name: "Spring Boot", icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
                                { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
                                { name: "React", icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" },
                                { name: "SQL", icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" }
                            ]}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};