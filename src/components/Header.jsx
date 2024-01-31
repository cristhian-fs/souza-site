"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// icons
import { CloseMenuIcon } from "../svg/CloseMenuIcon";
import { ArrowBottomRight } from "../svg/ArrowBottomRight";
import Lenis from "@studio-freight/lenis/types";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const hamburgerButtonRef = useRef(null);
  const headerOptions = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu(e) {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  useGSAP(() => {
    const headerOptionsButton = gsap.utils.toArray(".headerOptionsButton");

    if (headerOptionsButton) {
      gsap.set(headerOptionsButton, {
        y: -50,
      });
    }

    gsap.set(headerOptions.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    if (isMenuOpen) {
      gsap.to(headerOptionsButton, {
        y: 0,
        stagger: 0.2,
        duration: 1.25,
        ease: "none",
        delay: 0,
      });

      gsap.to(headerOptions.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.5,
        ease: "none",
      });
    }
  }, null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#040305] to-[#04030500] md:hidden">
        <div className="flex items-center justify-between px-6 py-8 w-full">
          <Image
            src="/img/LogoHeader.png"
            className="w-24"
            width={96}
            height={16}
            alt=""
          />
          <button
            className={`hamburger hamburger--spin ${
              isMenuOpen ? "is-active" : ""
            }`}
            type="button"
            ref={hamburgerButtonRef}
            onClick={(e) => handleMenu(e)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
      <div
        className={`headerOptions rounded-2xl md:hidden`}
        ref={headerOptions}
      >
        <div className="w-full flex items-center justify-end p-8">
          <button
            className="closeMenuMobile flex items-center gap-2"
            onClick={(e) => handleMenu(e)}
          >
            <CloseMenuIcon className="w-4 h-4" />
            <p className="text-base text-black">Fechar menu</p>
          </button>
        </div>
        <div className="mt-4">
          <div className="border-b border-b-black overflow-hidden">
            <a href="/#hero">
              <button className="w-full flex items-center justify-between px-8 py-4 headerOptionsButton group transition-all duration-300">
                <p className="text-base text-black transition-all duration-300 group-hover:translate-x-2">
                  Home
                </p>
                <ArrowBottomRight className={`arrowToggle h-6 w-6`} />
              </button>
            </a>
          </div>
          <div className="border-b border-b-black overflow-hidden">
            <a href="/#services">
              <button className="w-full flex items-center justify-between px-8 py-4 headerOptionsButton group transition-all duration-300">
                <p className="text-base text-black transition-all duration-300 group-hover:translate-x-2">
                  Serviços
                </p>
                <ArrowBottomRight className={`arrowToggle h-6 w-6`} />
              </button>
            </a>
          </div>
          <div className="border-b border-b-black overflow-hidden">
            <a href="/cases">
              <button className="w-full flex items-center justify-between px-8 py-4 headerOptionsButton group transition-all duration-300">
                <p className="text-base text-black transition-all duration-300 group-hover:translate-x-2">
                  Cases
                </p>
                <ArrowBottomRight className={`arrowToggle h-6 w-6`} />
              </button>
            </a>
          </div>
          <div className="border-b border-b-black overflow-hidden">
            <a href="/#about">
              <button className="w-full flex items-center justify-between px-8 py-4 headerOptionsButton group transition-all duration-300">
                <p className="text-base text-black transition-all duration-300 group-hover:translate-x-2">
                  Sobre
                </p>
                <ArrowBottomRight className={`arrowToggle h-6 w-6`} />
              </button>
            </a>
          </div>
          <div className="border-b border-b-black overflow-hidden">
            <a href="https://wa.me/5531975053019?text=Olá+Souza%2C+eu+gostaria+de+um+orçamento">
              <button className="w-full flex items-center justify-between px-8 py-4 headerOptionsButton group transition-all duration-300">
                <p className="text-base text-black transition-all duration-300 group-hover:translate-x-2">
                  Solicitar contato
                </p>
                <ArrowBottomRight className={`arrowToggle h-6 w-6`} />
              </button>
            </a>
          </div>
        </div>
        <div></div>
      </div>

      <header className="hidden md:block mx-auto md:max-w-screen-lg lg:max-w-screen-xl py-10 absolute top-0 left-0 right-0 z-20 w-full">
        <div className="flex items-center gap-32">
          <Image
            src="/img/LogoHeader.png"
            className="w-24 flex-1"
            width={96}
            height={16}
            alt=""
          />
          <p className="text-xs w-1/2 uppercase flex-shrink-0 flex-1">
            Se diferencie, aumente seus resultados
          </p>
          <p className="text-xs w-1/2 uppercase">
            Design para seu <br />
            lançamento digital
          </p>
        </div>
      </header>

      <nav className="hidden fixed bottom-10 left-0 right-0 mx-auto w-fit z-50 md:flex items-center justify-center gap-3 py-3 px-4 navOptionsDesktop rounded-full">
        <a
          href="/#hero"
          className="px-5 py-3 group transition-all duration-300 hover:opacity-70"
        >
          <p className="text-base">Home</p>
        </a>
        <a
          href="/#services"
          className="px-5 py-3 group transition-all duration-300 hover:opacity-70"
        >
          <p className="text-base">Serviços</p>
        </a>
        <a
          href="/cases"
          className="px-5 py-3 group transition-all duration-300 hover:opacity-70"
        >
          <p className="text-base">Cases</p>
        </a>
        <a
          href="/#about"
          className="px-5 py-3 group transition-all duration-300 hover:opacity-70"
        >
          <p className="text-base">Sobre</p>
        </a>

        <a href="https://wa.me/5531975053019?text=Olá+Souza%2C+eu+gostaria+de+um+orçamento">
          <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white rounded-full group transition-all duration-300 maskButtonAnim">
            <div className="mask-button-text">
              <p className="text-[#08060C] first-text">Solicitar contato</p>
              <p className="text-[#08060C] second-text">Solicitar contato</p>
            </div>
            <img
              src="/svg/right-arrow-button.svg"
              alt=""
              className="transition-all duration-300 group-hover:translate-x-2"
            />
          </button>
        </a>
      </nav>
    </>
  );
};

export default Header;
