import { useState } from "react";
import Button from "../components/button/button";
import Logo from "../assets/logoMeuRebanho.svg";
import Menu from "../assets/hamburger-menu.svg";
import Close from "../assets/close-square.svg";
import Retangulo1 from "../assets/r1.svg";
import Retangulo2 from "../assets/r2.svg";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";

export default function Header() {
    // Hook useState para gerenciar o estado do menu mobile
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <div className="fixedHeader">
                <header className="container py-sm">
                    <div>
                        <nav className="flex items-center justify-between">
                            <img src={Logo} alt="Logo DonaFrost" width={80} height={80} />

                            <div className="desktop-only">
                                <ul className="no-bullets flex gap-1">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#solution">Soluções</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Preços</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="desktop-only">
                                <div className="flex items-center" style={{ gap: 10 }} >
                                    <a className="reverse-color ml-lg" href="">Login</a>
                                    <Button text="Cadastre-se" />
                                    {/* <Button text="Sair" secondary /> */}
                                </div>
                            </div>

                            <div className="mobile-menu">
                                {showMobileMenu ? (
                                    <div className="mobile-menu-content">
                                        <div className="container flex">
                                            <ul>
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#solution">Soluções</a>
                                                </li>
                                                <li>
                                                    <a href="#testimonials">Depoimentos</a>
                                                </li>
                                                <li>
                                                    <a href="#pricing">Preços</a>
                                                </li>
                                                <li>
                                                    <a href="#contact">Contato</a>
                                                </li>
                                                <li>
                                                    <a href="#login" className="reverse-color" >Login</a>
                                                </li>
                                            </ul>
                                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                                <img src={Close} alt="ícone fechar menu" width={36} height={36} />
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Menu} alt="ícone menu" width={36} height={36} />
                                    </span>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}
