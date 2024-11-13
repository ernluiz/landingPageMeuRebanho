import { useState } from "react";
import Button from "../components/button/button";

const GOOGLE_CLOUD_FUNCTION_URL = "https://us-central1-projeto-arch-lambda-lfern.cloudfunctions.net/function-3";

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setStatus("sending");

        fetch(GOOGLE_CLOUD_FUNCTION_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                conteudo: message,
            }),
        })
            .then(() => {
                setStatus("success");
                setEmail("");
                setMessage("");
            })
            .catch(error => {
                console.error("Erro:", error);
                setStatus("error");
            });
    };

    return (
        <section id="contact">
            <div className="container content">
                <h3>Alguma dúvida?</h3>
                <h2>Entre em contato</h2>
                <h4>Preencha seu e-mail e deixe sua mensagem para que possamos ajudar com suas dúvidas, ouvir sugestões ou resolver qualquer questão. Retornaremos sua mensagem o mais breve possível!</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Sua pergunta, sugestão ou crítica"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <Button
                        text={status === "sending" ? "Enviando..." : "Enviar"}
                        func={handleSubmit}
                        disabled={status === "sending"}
                    />
                </form>
                {status === "success" && <p>Mensagem enviada com sucesso!</p>}
                {status === "error" && <p>Erro ao enviar mensagem. Tente novamente mais tarde.</p>}
            </div>
        </section>
    );
};

export default ContactForm;
