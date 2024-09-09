import React from "react";
import "../styles/home.css";

export default function Home() {

    return (
        <div className="home-container">
            <h1>Bem-vindo ao Nosso Site</h1>
            <p>
                Estamos empenhados em oferecer as melhores soluções tecnológicas para o seu negócio.
                Com anos de experiência e uma equipe dedicada, estamos prontos para transformar suas ideias em realidade.
            </p>

            <h2>Nossos Destaques</h2>
            <div className="highlights">
                <div className="highlight-item">
                    <h3>Serviços de Consultoria</h3>
                    <p>Oferecemos consultoria especializada para ajudar sua empresa a alcançar novos patamares de eficiência.</p>
                </div>
                <div className="highlight-item">
                    <h3>Desenvolvimento de Software</h3>
                    <p>Nossa equipe desenvolve soluções personalizadas que atendem às suas necessidades específicas.</p>
                </div>
                <div className="highlight-item">
                    <h3>Suporte Técnico</h3>
                    <p>Garantimos que sua infraestrutura tecnológica esteja sempre funcionando com o máximo desempenho.</p>
                </div>
            </div>

            <h2>Visão</h2>
            <p>
                Ser a principal escolha em soluções tecnológicas, oferecendo inovação constante e suporte de qualidade,
                criando parcerias duradouras com nossos clientes.
            </p>

            <h2>Galeria de Imagens</h2>
            <div className="image-gallery">
                <img src="https://audcontcontabilidade.com.br/wp-content/uploads/Como-Abrir-uma-Empresa-de-Software.jpg" alt="Imagem de exemplo" className="gallery-image" />
                <img src="https://docmanagement.com.br/wp-content/uploads/2020/02/software-brasil-1-768x512.png" alt="Imagem de exemplo" className="gallery-image" />
                <img src="https://www.starkcloud.com/hubfs/Imported_Blog_Media/Desarrollo-de-Software.webp" alt="Imagem de exemplo" className="gallery-image" />
            </div>

            <h2>Informações Adicionais</h2>
            <p>
                Para mais informações sobre nossos serviços e como podemos ajudar sua empresa a crescer,
                entre em contato conosco através dos nossos canais de comunicação.
            </p>
        </div>
    );
};


