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
                        />
                        
                    </div>
                </div>
            </main>
        </div>
    );
};
