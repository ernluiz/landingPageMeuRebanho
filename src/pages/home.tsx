import "../styles/home.css";
import "../styles/utility.css";
import Button from "../components/button/button";
import Retangulo1 from "../assets/r1.svg";
import Retangulo2 from "../assets/r2.svg";
import Imagem1 from "../assets/heads-black-white-holstein-cows.jpg";
import Imagem2 from "../assets/cows-green-field-sunny-day.jpg";
import Imagem3 from "../assets/cattleman-holding-tablet.jpg";
import Imagem4 from "../assets/young-man-farmer-hat-smiling.jpg";
import Imagem5 from "../assets/grass-farmer-black-man.jpg";
import Imagem6 from "../assets/mapa.jpg";
import Imagem7 from "../assets/youtube.png";
import Imagem8 from "../assets/instagram.png";
import Imagem9 from "../assets/facebook.png";
import Imagem10 from "../assets/linkedin.png";
import Check from "../assets/check.svg";


export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={Retangulo1} alt="Retangulo um tela inicial" />
                </span>
                <img src={Retangulo2} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <h1>
                        Gestão do seu rebanho na palma da sua mão
                    </h1>
                    <h2>
                        Já pensou em monitorar o ciclo reprodutivo das suas vacas através do celular?
                    </h2>
                    <h3>
                        Transforme a gestão do seu rebanho com tecnologia de ponta: monitore o ciclo reprodutivo das suas vacas em tempo real, diretamente do seu celular, e maximize a eficiência do seu negócio rural.
                    </h3>
                    <div className="flex gap-1">
                        <span>
                            <Button text="Cadastre-se" />
                        </span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section id="highlights">
                <div className="container content">
                    <h2>Nossos Destaques</h2>
                    <div className="highlights-cards">
                        <div className="highlight-item">
                            <h3>Monitoramento do ciclo reprodutivo</h3>
                            <img src={Imagem1} alt="Imagem de exemplo" className="gallery-image" />
                            <p>Acompanhe de forma eficiente o ciclo reprodutivo de vacas e novilhas, com alertas automáticos e relatórios detalhados sobre o estado de saúde e o período fértil.</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Gestão de reprodutores</h3>
                            <img src={Imagem2} alt="Imagem de exemplo" className="gallery-image" />
                            <p>Cadastre e gerencie touros reprodutores, monitorando a performance de cada um e maximizando os resultados do seu programa de reprodução.</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Suporte Especializado</h3>
                            <img src={Imagem3} alt="Imagem de exemplo" className="gallery-image" />
                            <p>Oferecemos suporte técnico e consultoria especializada para otimizar a gestão do seu rebanho, garantindo que você tire o máximo proveito do sistema.</p>
                        </div>
                    </div>
                </div >
            </section >


            <section id="planos">
                <div className="container content">
                    <h4>Escolha o melhor plano para você</h4>
                    <h2>Nossos Planos</h2>
                    <div className="planos-cards">
                        <div className="plano-card">
                            <h3>Plano Básico</h3>
                            <p className="plano-preco">Grátis</p>
                            <h4>
                                Ideal para pequenos produtores.
                            </h4>
                            <span>
                                <Button text="Assinar" />
                            </span>
                            <div className="features-container">
                                <div className="features-container">
                                    <span className="features">
                                        <img src={Check} alt="ícone check" width={24} height={24} />
                                        <h4>Cadastro simplificado de animais</h4>
                                    </span>
                                    <span className="features">
                                        <img src={Check} alt="ícone check" width={24} height={24} />
                                        <h4>Controle de vacinas e tratamentos</h4>
                                    </span>
                                    <span className="features">
                                        <img src={Check} alt="ícone check" width={24} height={24} />
                                        <h4>Alertas de manejo e eventos importantes</h4>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="plano-card">
                            <h3>Plano Avançado</h3>
                            <p className="plano-preco">R$ 99,90/mês</p>
                            <h4>
                                Ideal para produtores que buscam otimizar a gestão do gado.
                            </h4>
                            <span>
                                <Button text="Assinar" />
                            </span>
                            <div className="features-container">
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Relatórios detalhados de produção</h4>
                                </span>
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Integração com dispositivos IoT</h4>
                                </span>
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Controle financeiro e de despesas</h4>
                                </span>
                            </div>
                        </div>
                        <div className="plano-card">
                            <h3>Plano Premium</h3>
                            <p className="plano-preco">R$ 99,90/mês</p>
                            <h4>
                                Para grandes produtores que desejam total controle e eficiência.
                            </h4>
                            <span>
                                <Button text="Assinar" />
                            </span>
                            <div className="features-container">
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Gestão avançada de rebanho</h4>
                                </span>
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Previsão de produção com inteligência artificial</h4>
                                </span>
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Planejamento de manejo e nutrição</h4>
                                </span>
                                <span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <h4>Suporte técnico prioritário e treinamentos exclusivos</h4>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section id="testimonials">
                <div className="container content">
                    <h2>Depoimentos</h2>
                    <h3>Veja o que dizem alguns de nossos clientes:</h3>
                    <div className="highlights-cards">
                        <div className="highlight-item">
                            <p>"Desde que começamos a usar o Meu Rebanho, a produtividade da nossa fazenda aumentou significativamente.
                                Com a facilidade de monitorar o ciclo das vacas diretamente pelo celular, conseguimos otimizar o manejo
                                e garantir mais eficiência no nosso processo de reprodução. O suporte técnico
                                também é excelente, sempre prontos para nos ajudar com qualquer dúvida."</p>
                            <div className="author">
                                <h3>– Carlos Souza,</h3>
                                <p>Produtor Rural, Fazenda Santa Clara</p>
                            </div>
                            <img src={Imagem4} alt="Imagem de exemplo" className="gallery-image" />
                        </div>
                        <div className="highlight-item">
                            <p>
                                "A implementação do Meu Rebanho revolucionou a nossa fazenda, pois antes o controle do ciclo reprodutivo
                                das vacas era muito manual e sujeito a erros. Agora, com o monitoramento em tempo real, conseguimos identificar o
                                momento ideal para inseminações e vacinações, o que nos ajudou a aumentar a taxa de prenhez e a saúde do rebanho. "
                            </p>
                            <div className="author">
                                <h3>– Rodrigo Oliveira,</h3>
                                <p>Pecuarista de leite, Sítio Boa Vista</p>
                            </div>
                            <img src={Imagem5} alt="Imagem de exemplo" className="gallery-image" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="find-us">
                <div className="container content">
                    <h2>Onde nos encontrar</h2>
                    <div className="highlights-cards">
                        <div className="highlight-item">
                            <h3>Horário de atendimento:</h3>
                            <p>Segunda a Sexta: 8h - 18h e Sábado: 8h - 12h</p>
                            <h3>Contato:</h3>
                            <p>Telefone: (45) 99876-5432</p>
                            <h3>Email:</h3>
                            <p>contato@techgold.com.br</p>
                            <br />
                            <div className="icon-container">
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={Imagem7} alt="Imagem de exemplo" className="icon" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={Imagem8} alt="Imagem de exemplo" className="icon" />
                                </a>
                                <a href="https://www.facebok.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={Imagem9} alt="Imagem de exemplo" className="icon" />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={Imagem10} alt="Imagem de exemplo" className="icon" />
                                </a>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <h3>Nosso escritório:</h3>
                            <p>Techgold – Av. da FAG, 551 - Loteamento FAG, Cascavel - PR, CEP 85806-095</p>
                            <img src={Imagem6} alt="Imagem de exemplo" className="gallery-image" />
                            <a href="https://www.google.com/maps/place/Av.+da+Fag,+551+-+Santo+In%C3%A1cio,+Cascavel+-+PR,+85806-096" target="_blank" rel="noopener noreferrer">
                                Clique aqui para abrir no Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
