import { useState } from "react";
import "../styles/hero.css";
import "../styles/utility.css";
import Button from "../components/button/button";
import Retangulo1 from "../assets/r1.svg";
import Retangulo2 from "../assets/r2.svg";

export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={Retangulo2} alt="Retangulo um tela inicial" />
                </span>
                <img src={Retangulo1} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>
                        Gestão do seu rebanho na palma da sua mão
                    </h1>
                    <h2>
                        Já pensou em monitorar o ciclo reprodutivo das suas vacas através do celular?
                    </h2>
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
        </>
    );
}
