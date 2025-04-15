import emailjs from "emailjs-com";
import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "danger" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0fxodi7",
      "template_xvrfkjb",
      e.target as HTMLFormElement,
     "DiIXqaTMeMF_62HQs"
    )
    .then(
      () => {
        setStatusMessage("Mensagem enviada com sucesso!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        setStatusMessage("Erro ao enviar mensagem. Tente novamente.");
        setStatusType("danger");
      }
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)" }}>
      <main className="flex-grow-1 mt-5" id="contact">
        <h1 className="mb-4 text-primary fw-bold text-center">Contato</h1>
        <p className="mb-4 text-center">Se gostou do que viu, entre em contato comigo, que responderei assim que possível.</p>
        <div className="container py-5">
          <div className="row g-4">
            <div className="container p-4 rounded shadow-lg bg-white" style={{ maxWidth: "600px" }}>
              {statusMessage && (
                <div className={`alert alert-${statusType} alert-dismissible fade show`} role="alert">
                  {statusMessage}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setStatusMessage(null)}
                  ></button>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Mensagem</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  ></textarea>
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
                <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
              </a>
            </p>
            <p className="mx-3">
              <a href="https://wa.me/5516997410581" target="_blank">
                <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whatsapp" />
              </a>
            </p>
            <p className="mx-3">
              <a href="https://github.com/renatoxd152" target="_blank">
                <img width="48" height="48" src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="GitHub" />
              </a>
            </p>
            <p className="mx-3">
              <a href="mailto:renatomorillo@gmail.com" target="_blank" rel="noopener noreferrer">
                <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
