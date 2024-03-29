"use client";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "../components/forms/contact-form";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbacksSwiper from "../components/FeedbacksSwiper";
import VimeoEmbed from "../components/VideoEmbed";
import VimeoEmbedMobile from "../components/VideoEmbedMobile";

// ICONS
import { DownArrow } from "../svg/DownArrow";
import { RightArrowButton } from "../svg/RightArrowButton";
import { FullProject } from "../svg/FullProject";
import { ArrowDownFullProject } from "../svg/ArrowDownFullProject";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { LogoHeader } from "../svg/SouzaLogo";

// COMPONENTS
import ServicosToggleDesktop from "../components/ServicesToggleDesktop";
import ServicosToggleMobile from "../components/ServicesToggleMobile";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// smooth scroll
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

export default function Home() {
  useEffect(() => {
    var originalElement = document.querySelector(".texts-infinite");
    if (originalElement) {
      var copy = originalElement.cloneNode(true);
      var cloned = document.querySelector(".slider").appendChild(copy);
    }
  }, []);

  useEffect(() => {
    const heroButton = document.querySelector(".heroButton");
    const heroSection = document.querySelector(".heroSection");

    if (heroButton && heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

      gsap.set(heroButton, {
        "--mouse-y": `70%`,
        "--mouse-x": `55%`,
      });

      const handleMouseMove = (e) => {
        const x = e.clientX - heroRect.left;
        const y = e.clientY - heroRect.top;

        const mouseXDelayed = windowWidth * -0.15 + x * 0.3;
        const mouseYDelayed = windowHeight * -0.15 + y * 0.3;

        gsap.to(heroButton, {
          "--mouse-x": `calc(55% + ${mouseXDelayed}px)`,
          "--mouse-y": `calc(70% + ${mouseYDelayed}px)`,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      heroSection.addEventListener("mousemove", handleMouseMove);

      return () => {
        // Remover o listener do evento quando o componente é desmontado

        heroSection.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section06 = document.querySelector(".section06");
      const letsTalkOverlay = document.querySelector(".letsTalkOverlay");

      const handleMouseMoveLets = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        gsap.to(letsTalkOverlay, {
          "--mouse-x": `${x}px`,
          "--mouse-y": `${y}px`,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      section06.addEventListener("mouseover", () => {
        if (letsTalkOverlay) {
          gsap.to(letsTalkOverlay, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });
      section06.addEventListener("mouseleave", () => {
        if (letsTalkOverlay) {
          gsap.to(letsTalkOverlay, {
            scale: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });

      section06.addEventListener("mousemove", handleMouseMoveLets);
      return () => {
        section06.removeEventListener("mousemove", handleMouseMoveLets);
      };
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const isMobile = useMediaQuery("(max-width: 767px)");

  useGSAP(() => {
    // ENTERING HERO TEXT ANIMATION
    const heroWords = new SplitType(".revealHeroText");

    if (heroWords) {
      gsap.from(heroWords.words, {
        y: 40,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
        ease: "none",
      });
    }

    // FUNCTION TO SHOW A LOADING SCREEN

    const loadingScreen = document.getElementById("loader");
    const loadingBar = document.querySelector(".loadingBar");
    const numberLoading = document.getElementById("numberLoading");

    if (loadingScreen) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: loadingScreen,
          start: "top center", // Inicia a animação quando o topo do loadingScreen atinge o centro da janela
        },
        onComplete: hideLoadingScreen,
      });
      timeline.fromTo(
        loadingBar,
        {
          scaleX: 0,
        },
        { duration: 3, scaleX: 1, ease: "power2.inOut" }
      );
      let currentValue = 0;

      // // Animação usando GSAP e ScrollTrigger
      timeline.to(
        {},
        {
          duration: 3,
          onUpdate: function () {
            currentValue =
              Math.floor(gsap.getProperty(numberLoading, "innerHTML")) + 1;

            // Limita o valor entre 0 e 100
            currentValue = Math.min(Math.max(currentValue, 0), 100);

            numberLoading.innerHTML = currentValue;
          },
          ease: "power2.inOut",
        },
        0
      );

      function hideLoadingScreen() {
        // Quando a animação estiver completa, esconda a tela de loading
        loadingScreen.classList.add("loaded");

        gsap.from(heroWords.words, {
          y: 40,
          opacity: 0,
          stagger: 0.3,
          duration: 0.5,
          ease: "none",
        });
      }
    }

    // ENTERING SECOND TEXT TIMELINE
    let mm = gsap.matchMedia();

    const secondHeaders = document.querySelectorAll(".secondHeader");

    const heroVideo = document.querySelector(".heroVideo");
    const secondVideo = document.querySelector(".secondVideo");
    const section02 = document.querySelector(".section02");
    const expertName = new SplitType(".aboutName");

    if (secondHeaders) {
      secondHeaders.forEach((word, i) => {
        const text = new SplitType(word, { types: "word" });
        gsap.from(text.words, {
          opacity: 0.2,
          stagger: 0.03,
          delay: 0.25,
          duration: 0.3,
          scrollTrigger: {
            trigger: section02,
            start: "top 60%",
            end: "center 40%",
            scrub: 1,
          },
        });
      });
    }

    // ONLY MOBILE ANIMATIONS
    mm.add("(max-width: 767px)", () => {
      if (secondVideo) {
        gsap.set(secondVideo, { y: -200 });
        gsap.to(heroVideo, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: section02,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        });
        gsap.to(secondVideo, {
          y: 250,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section02,
            start: "top 60%",
            end: "center 40%",
            scrub: 1,
          },
        });
      }

      if (expertName) {
        gsap.from(expertName.chars, {
          y: 40,
          opacity: 0,
          skewX: 30,
          stagger: 0.03,
          scrollTrigger: {
            trigger: ".section06",
            start: "top 80%",
            end: "top 25%",
            scrub: 1,
          },
        });
      }
    });

    // // ONLY DESKTOP ANIMATIONS
    mm.add("(min-width: 768px)", () => {
      if (secondVideo) {
        gsap.set(secondVideo, { y: -200, opacity: 0 });
        gsap.to(heroVideo, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: section02,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        });
        gsap.to(secondVideo, {
          y: 250,
          opacity: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section02,
            start: "top 60%",
            end: "center 40%",
            scrub: 1,
          },
        });
      }

      if (expertName) {
        gsap.from(expertName.chars, {
          y: 40,
          opacity: 0,
          skewX: 30,
          stagger: 0.03,
          scrollTrigger: {
            trigger: ".section06",
            start: "top 60%",
            end: "top 25%",
            scrub: 1,
          },
        });
      }

      const section06 = document.querySelector(".section06");
      const letsTalkOverlay = document.querySelector(".letsTalkOverlay");

      if (section06) {
        section06.addEventListener("mousemove", (e) => {
          const x = e.clientX;
          const y = e.clientY;

          gsap.to(letsTalkOverlay, {
            "--mouse-x": `${x}px`,
            "--mouse-y": `${y}px`,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        section06.addEventListener("mouseover", () => {
          if (letsTalkOverlay) {
            gsap.to(letsTalkOverlay, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
        section06.addEventListener("mouseleave", () => {
          if (letsTalkOverlay) {
            gsap.to(letsTalkOverlay, {
              scale: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
      }
    });

    const section03 = document.querySelector(".section03");
    const contentAsideBars = gsap.utils.toArray(".contentAsideBar");
    const contentToggleButtons = gsap.utils.toArray(".toggleButton");

    if (contentAsideBars) {
      gsap.fromTo(
        contentAsideBars,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.3,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: {
            trigger: section03,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (contentToggleButtons) {
      gsap.fromTo(
        contentToggleButtons,
        {
          y: 250,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section03,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // SCROLL TESTIMONIAL ANIMATION
    if (document.querySelector(".section05")) {
      gsap.from(".section05 > div", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.2 },
        duration: 3,
        scrollTrigger: {
          trigger: ".section05",
          start: "top 80%",
          end: "top 25%",
          scrub: 1,
          //markers: true,
        },
      });
    }

    // SCROLL ABOUT ANIMATION
    if (document.querySelector(".section06")) {
      gsap.from(".section06 > img", {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.2 },
        duration: 3,
        scrollTrigger: {
          trigger: ".section05",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          //markers: true,
        },
      });
    }

    ScrollTrigger.refresh();
  }, null);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const refVideo = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      {/* LOADING SCREEN */}
      <div id="loader" className="">
        <div className="bars">
          <div className="relative">
            <div className="grayBar" />
            <div className="loadingBar" />
          </div>
          <div className="flex items-center justify-between mt-8">
            <LogoHeader />
            <p id="numberLoading" className="text-xl" />
          </div>
        </div>
      </div>

      <Header />
      {/* HERO */}
      <main
        className="h-[851px] flex flex-col items-center justify-end px-6 pb-8 relative md:h-[775px] z-10 heroSection overflow-hidden bg-black"
        id="hero"
      >
        <a href="/cases" className="heroButton">
          <button className="w-full md:w-auto px-12 py-4 gradient-button md:flex items-center justify-center gap-3 rounded-full mt-10 md:mt-0 hidden maskButtonAnim">
            <div className="mask-button-text whitespace-nowrap">
              <p className="text-[#08060C] first-text">See project</p>
              <p className="text-[#08060C] second-text">See project</p>
            </div>
            <RightArrowButton className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
          </button>
        </a>
        <div className="w-full h-auto md:h-full absolute inset-0 flex items-center justify-center">
          {isMobile ? <VimeoEmbedMobile /> : <VimeoEmbed />}
        </div>
        <div className="relative z-10 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto">
          <h1 className="text-5xl md:text-8xl revealHeroText">
            USANDO O DESIGN PARA POTENCIALIZAR RESULTADOS
          </h1>
          <a href="/cases">
            <button className="w-full md:w-auto px-12 py-4 gradient-button flex items-center justify-center gap-3 rounded-full mt-10 md:mt-0 md:hidden maskButtonAnim group transition-all duration-300">
              <div className="mask-button-text whitespace-nowrap">
                <p className="text-[#08060C] first-text">See project</p>
                <p className="text-[#08060C] second-text">See project</p>
              </div>
              <RightArrowButton className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
            </button>
          </a>
          <div className="flex items-center justify-center gap-2 mt-12 md:absolute md:bottom-0 md:right-0">
            <p className="">Scroll</p>
            <DownArrow className="w-4 h-4" />
          </div>
        </div>
      </main>
      {/* DESKTOP INFINITE SLIDER */}
      <section className="slider hidden md:flex px-0 py-1 w-full whitespace-nowrap">
        <section className="texts-infinite whitespace-nowrap flex gap-2">
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
          <p className="text-sm text-[#E7E7F5]">POTENCIALIZE SEUS RESULTADOS</p>
          <p className="text-sm text-[#E7E7F5]">®</p>
        </section>
      </section>
      {/* SECTION 02 */}
      <section className="px-6 py-14 md:py-32 relative md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto section02 ">
        <video
          className="w-[146px] md:w-[306px] secondVideo"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source
            src="https://videosouza-destination920a3c57-hr7vq0ozjdev.s3.amazonaws.com/herovideo.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h2 className="text-3xl uppercase first-line:block first-line:text-right md:hidden secondHeader relative z-10">
          <div className="text-right">“MELHORE SUA</div> VISIBILIDADE E PRESENÇA
          DIGITAL ATRÁVES DO NOSSO DESIGN. CUIDAMOS DOS SEUS CRIATIVOS, KEY
          VISUAL, IDENTIDADE VISUAL E SITE DO SEU Negócio e/ou LANCAMENTO”
        </h2>
        <h2 className="text-[46px] uppercase first-line:block first-line:text-right secondHeader hidden md:block relative z-10">
          <div className="text-right flex items-center justify-end relative z-10 w-full">
            “MELHORE SUA VISIBILIDADE E
          </div>
          <div className="w-full">PRESENÇA DIGITAL ATRÁVES DO NOSSO</div>
          <div className="w-full">
            {" "}
            DESIGN. CUIDAMOS DOS SEUS CRIATIVOS, KEY
          </div>
          <div className="w-full">
            VISUAL, IDENTIDADE VISUAL E SITE DO SEU
          </div>{" "}
          Negócio e/ou LANCAMENTO”
        </h2>
      </section>
      {/* SECTION 03 SERVICES */}
      {isMobile ? <ServicosToggleMobile /> : <ServicosToggleDesktop />}
      {/* SECTION 04 CASES */}
      <section
        className="px-6 py-14 md:py-36 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto"
        id="cases"
      >
        <h5 className="text-sm uppercase py-2">
          <span className="text-[#4F4F4F]">03 / </span>cases
        </h5>
        <div className="relative">
          <span className="topBarCase1" />
          <div className="mainCase motionInsiderCase mt-8">
            <a href="/case-motion-insider">
              <div className="mainCaseThumb flex flex-col justify-end align-center">
                <div className="motionInsider absolute inset-0 caseThumb">
                  <span className="motionInsiderOverlay" />
                  <img
                    src="/img/motionInsiderAssets/HERO.webp"
                    className="heroImg"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/RedVector.svg"
                    className="redVector"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/linha2.svg"
                    className="lineMotion"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/overlayLogoReduzida.png"
                    className="overlayLogo"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/logoReduzida.png"
                    className="backTextSmallLogo"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/logoReduzida.png"
                    className="backSmallLogo"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/logoReduzida.png"
                    className="backSmallLogo2"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/ELIPSE.svg"
                    className="elipseOverlay"
                    alt=""
                  />
                  <img
                    src="/img/motionInsiderAssets/overlayCruzEsq.svg"
                    className="overlayCruzEsq"
                    alt=""
                  />
                </div>
              </div>
            </a>
            <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999]">
              <div>
                <p className="text-base font-semibold">
                  Motion Insider | Levy Motion
                </p>
                <p className="text-base opacity-80">Lançamentos</p>
              </div>
              <a href="/case-motion-insider">
                <button className="flex items-center gap-2 maskButtonAnim">
                  <FullProject className="w-5 h-5" />
                  <div className="mask-button-text whitespace-nowrap">
                    <p className=" first-text">Veja completo</p>
                    <p className=" second-text">Veja completo</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="mainCase palmBeachCase absolute inset-0 z-10">
            <a href="/case-palm-beach">
              <div className="mainCaseThumb flex flex-col justify-end align-center">
                <div className="palmBeach absolute inset-0 caseThumb">
                  <img
                    src="/img/palmBeach/FOTO FAMILIA.webp"
                    className="palmBeachFoto"
                    alt=""
                  />
                  <img
                    src="/img/palmBeach/setas-palm-beach.svg"
                    className="palmBeachArrows"
                    alt=""
                  />
                  <span className="palmBeachSquare" />
                </div>
              </div>
            </a>

            <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999]">
              <div>
                <p className="text-base font-semibold">Palm Beach</p>
                <p className="text-base opacity-80">
                  Site institucional Imobiliário
                </p>
              </div>
              <a href="/case-palm-beach">
                <button className="flex items-center gap-2 maskButtonAnim">
                  <FullProject className="w-5 h-5" />
                  <div className="mask-button-text whitespace-nowrap">
                    <p className=" first-text">Veja completo</p>
                    <p className=" second-text">Veja completo</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 md:w-full  md:mt-8">
          <div className="relative md:flex md:flex-1 mt-9">
            <span className="topBarCase2" />
            <div className="mainCase bpoClassCase md:flex-1 opacity-0">
              <a href="/case-bpo-class">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <img
                      src="img/BPO Class Thumb.webp"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </a>

              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                <div>
                  <p className="text-base font-medium text-[#F3F3F2]">
                    BPO Class Summit
                  </p>
                  <p className="text-base opacity-80 mt-1">Evento presencial</p>
                </div>
                <a href="/case-bpo-class">
                  <button className="flex items-center gap-2 maskButtonAnim">
                    <FullProject className="w-5 h-5" />
                    <div className="mask-button-text whitespace-nowrap">
                      <p className=" first-text">Veja completo</p>
                      <p className=" second-text">Veja completo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="mainCase candyLipsCase absolute inset-0 z-10 md:flex-1">
              <a href="/case-candy-lips">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <span className="candyLipsOverlay" />
                    <img
                      src="img/CandyLips/candyLips.webp"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </a>

              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                <div>
                  <p className="text-base font-medium text-[#F3F3F2]">
                    Karyn Souza
                  </p>
                  <p className="text-base opacity-80 mt-1">
                    Landing Page e KV lançamento
                  </p>
                </div>
                <a href="/case-candy-lips">
                  <button className="flex items-center gap-2 maskButtonAnim">
                    <FullProject className="w-5 h-5" />
                    <div className="mask-button-text whitespace-nowrap">
                      <p className=" first-text">Veja completo</p>
                      <p className=" second-text">Veja completo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative md:flex md:flex-1 mt-9">
            <span className="topBarCase3" />
            <div className="mainCase ordemCase md:flex-1">
              <a href="/case-a-ordem">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <span className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <img
                      src="img/AOrdemThumb.webp"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </a>

              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                <div>
                  <p className="text-base font-medium">Gabi Cervantes</p>
                  <p className="text-base opacity-80 mt-1">
                    KV e Logo para Mentoria
                  </p>
                </div>
                <a href="/case-a-ordem">
                  <button className="flex items-center gap-2 maskButtonAnim">
                    <FullProject className="w-5 h-5" />
                    <div className="mask-button-text whitespace-nowrap">
                      <p className=" first-text">Veja completo</p>
                      <p className=" second-text">Veja completo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="mainCase bernardoCase md:flex-1 absolute inset-0 z-10">
              <a href="/case-bernardo">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <span className="mviOverlay" />
                    <img
                      src="img/bernandoCaetano/bernardoCaetano.jpg"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </a>

              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                <div>
                  <p className="text-base font-medium">Agência Tucano</p>
                  <p className="text-base opacity-80 mt-1">
                    Ui Design Landing Page
                  </p>
                </div>
                <a href="/case-bernardo">
                  <button className="flex items-center gap-2 maskButtonAnim">
                    <FullProject className="w-5 h-5" />
                    <div className="mask-button-text text-nowrap">
                      <p className=" first-text">Veja completo</p>
                      <p className=" second-text">Veja completo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="mainCase pyongCase md:flex-1 absolute inset-0 z-10">
              <a href="/case-pyong-lee">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <span className="mviOverlay" />
                    <img
                      src="img/pyongLee/pyongLeeImage.jpg"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </a>
              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                <div>
                  <p className="text-base font-medium">
                    Nexo 2023 - Pyong Lee e Márcio Martins
                  </p>
                  <p className="text-base opacity-80 mt-1">
                    Ui Design Landing Page / Kv
                  </p>
                </div>
                <a href="/case-pyong-lee">
                  <button className="flex items-center gap-2 maskButtonAnim">
                    <FullProject className="w-5 h-5" />
                    <div className="mask-button-text whitespace-nowrap text-nowrap">
                      <p className=" first-text">Veja completo</p>
                      <p className=" second-text">Veja completo</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:flex md:items-center md:justify-between">
          <p className="hidden md:block text-xl w-3/4 md:flex-1">
            “66% dos cliques são norteados pelo design
          </p>
          <div className="flex items-center md:flex-1 justify-between mt-8 md:mt-0">
            <a href="/cases">
              <button className="w-full px-12 py-4 gradient-button flex items-center justify-center gap-3 rounded-full group transition-all duration-300 maskButtonAnim">
                <div className="mask-button-text whitespace-nowrap">
                  <p className="text-[#08060C] first-text">
                    Ver todos os projetos
                  </p>
                  <p className="text-[#08060C] second-text">
                    Ver todos os projetos
                  </p>
                </div>
                <RightArrowButton className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
              </button>
            </a>
            <div className="border-solid border border-[#8E8E8E] h-9 w-9 md:h-14 rounded-full flex items-center justify-center">
              <ArrowDownFullProject className="w-3 h-3" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION TESTIMONIAL */}
      <section className="px-6 py-14 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto section05">
        <h5 className="text-sm uppercase py-2">
          <span className="text-[#4F4F4F]">04 / </span>DEPOIMENTOS
        </h5>
        {/* Slider main container */}
        <FeedbacksSwiper />
      </section>
      {/* SECTION ABOUT */}
      <section className="section06 relative overflow-hidden" id="about">
        <div className="px-6 py-14 relative md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto">
          <p className="text-7xl md:text-[213px] uppercase aboutName">
            Davidson <span className="font-medium">Souza</span>
          </p>
          <p className="text-sm md:text-lg text-[#5F5F5F] mt-4 w-1/2">
            Escrevi e transformei diversas histórias através do meu trabalho.
            <br />
            <br />
            Já trabalhei com diversas agências no mercado de infoproduto, mais
            de 30 projetos que geraram resultados de excelência. Meu objetivo é
            construir parcerias e potencializar os resultados do seu negócio,
            <br />
            <br />
            Seja diferente, potencialize sua voz e gere resultados!
          </p>
          <div className="flex items-center mt-10 gap-11">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-2 border border-solid border-[#808080] rounded ">
                <img
                  src="/svg/projects-delivery-icon.svg"
                  className="w-5 h-5 md:w-11 md:h-11"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-base md:text-4xl font-bold">+30</p>
                <p className="text-xs md:text-base">Projetos entregues</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-2 border border-solid border-[#808080] rounded">
                <img
                  src="/svg/experience-years.svg"
                  className="w-5 h-5 md:w-11 md:h-11"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-base md:text-4xl font-bold">4 anos</p>
                <p className="text-xs md:text-base">de experiência</p>
              </div>
            </div>
          </div>
          <img src="/img/imagemSouza.jpg" className="imagemBio" alt="" />
        </div>
        <a href="https://wa.me/5531975053019?text=Olá+Souza%2C+eu+gostaria+de+um+orçamento">
          <img src="/svg/letsTalk.svg" className="letsTalkOverlay" alt="" />
        </a>
      </section>
      {/* SECTION CTA */}
      <section className="px-6 py-14 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto md:flex">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h5 className="text-sm uppercase py-2">
              <span className="text-[#4F4F4F]">04 / </span>CONTATO
            </h5>
            <p className="text-5xl md:text-6xl uppercase mt-6 md:mt-8">
              Vamos conversar?
            </p>
            <p className="text-sm md:text-lg text-[#5F5F5F] mt-4 md:mt-8 w-96 text-wrap">
              Nos mande uma mensagem, estou pronto para te atender e trazer uma
              solução adequada ao seu negócio! Preencha o formulário que em
              breve retornaremos seu contato.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <img src="/img/messagePhoto.png" alt="" />

            <a href="https://wa.me/5531975053019?text=Olá+Souza%2C+eu+gostaria+de+um+orçamento">
              <p className="text-xl underline w-2/3">
                Se preferir, me mande uma mensagem!
              </p>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
