"use client";

import { DownArrow } from "../../svg/DownArrow";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbacksSwiper from "../../components/FeedbacksSwiper";

// hooks
import useBlurredImageLoader from "../../hooks/usePreload";

// smooth scroll
import Lenis from "@studio-freight/lenis";

export default function CaseAOrdem() {
  const lenis = new Lenis({
    duration: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  useBlurredImageLoader(".blurred-img");
  return (
    <>
      <Header />
      {/* HERO */}
      <main
        className="h-[851px] flex flex-col items-center justify-end px-6 pb-8 relative md:h-[775px] z-10 heroSection overflow-hidden"
        id="hero"
      >
        <div className="w-full h-full absolute inset-0 flex items-center justify-center heroVideo">
          <video
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source
              src="/img/output35.mp4"
              id="heroVideo"
              type="video/mp4"
              loading="lazy"
            />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <div className="relative z-10 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto">
          <h1 className="text-5xl md:text-8xl revealHeroText">
            USANDO O DESIGN PARA POTENCIALIZAR RESULTADOS
          </h1>
          <div className="flex items-center justify-center gap-2 mt-12 md:absolute md:bottom-0 md:right-0">
            <p className="">Scroll</p>
            <DownArrow className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </main>
      {/* SECTION CASE */}
      <section
        className="px-6 py-14 md:py-36 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto"
        id="cases"
      >
        <h5 className="text-sm uppercase py-2">
          <span className="text-[#4F4F4F]">03 / </span>cases
        </h5>
        <div className="flex flex-col md:gap-8 md:w-full md:mt-8">
          <div className="relative">
            <div className="mainCase mt-8 md:flex-1">
              <div className="h-[271px] md:h-[518px] flex flex-col justify-end align-center">
                <div
                  className="blurred-img w-full h-full"
                  style={{
                    backgroundImage:
                      "url(/img/aOrdem/casePage/image1-small.jpg)",
                  }}
                >
                  <img
                    src="/img/aOrdem/casePage/image1.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999]">
                <div>
                  <p className="text-base font-semibold">A Ordem</p>
                  <p className="text-base opacity-80">Programa de mentoria</p>
                </div>
                <p className="text-base opacity-80">2023</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-8">
              <div className="h-[271px] md:h-[444px] flex flex-col justify-end align-center pb-6 border-b border-[#999999] md:pb-0 md:border-none md:flex-1">
                <div
                  className="blurred-img w-full h-full"
                  style={{
                    backgroundImage:
                      "url(/img/aOrdem/casePage/image2-small.jpg)",
                  }}
                >
                  <img
                    src="/img/aOrdem/casePage/image2.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-8 pb-6 border-b border-[#999999] md:pb-0 md:border-none">
              <div className="flex flex-col md:flex-1">
                <p className="text-base font-semibold text-white">
                  Gabi Cervantes
                </p>
                <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                  KV e Logo para Mentoria
                  <br />
                  <br />
                  Atena é um programa de Mentoria High ticket. Conceito criado
                  para desenvolvimento de alunos com foco na estética grega. A
                  centralidade do Símbolo foi desenvolvida sobre a deusa Athena,
                  mesclando modernidade, clareza e exclusividade.
                </p>
              </div>
              <div className="flex flex-col md:flex-1">
                <p className="text-base font-semibold text-white">Serviços</p>
                <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                  Criação de identidade do curso e evento, slides, Símbolo,
                  cores e tipografia.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-32 blurred-img pb-6 border-b border-[#999999]">
              <div
                className="blurred-img w-full h-full"
                style={{
                  backgroundImage: "url(/img/aOrdem/casePage/image3-small.jpg)",
                }}
              >
                <img
                  src="/img/aOrdem/casePage/image3.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-14 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto section05">
        <h5 className="text-sm uppercase py-2">
          <span className="text-[#4F4F4F]">04 / </span>DEPOIMENTOS
        </h5>
        {/* Slider main container */}
        <FeedbacksSwiper />
      </section>
      <Footer />
    </>
  );
}
