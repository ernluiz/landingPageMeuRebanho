import { useState } from "react";
import Button from "./button/button";

const GOOGLE_CLOUD_FUNCTION_URL = "https://us-central1-projeto-arch-lambda-lfern.cloudfunctions.net/function-1";

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch(GOOGLE_CLOUD_FUNCTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
                setMessage("");
            } else {
                throw new Error("Erro ao enviar a mensagem");
            }
        } catch (error) {
            console.error("Erro:", error);
            setStatus("error");
        }
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
                        placeholder="Seu e-mail por onde deseja ser respondido"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Digite sua pergunta, sugestão ou crítica"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <Button
                        text={status === "sending" ? "Enviando..." : "Enviar"}
                        func={() => handleSubmit} // Função anônima que chama handleSubmit corretamente
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