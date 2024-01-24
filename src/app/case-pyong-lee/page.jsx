"use client";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbacksSwiper from "../../components/FeedbacksSwiper";

import { DownArrow } from "../../svg/DownArrow";

// hooks
import useBlurredImageLoader from "../../hooks/usePreload";

// smooth scroll
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

import { useEffect } from "react";

export default function CasePyongLee() {
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

  useBlurredImageLoader(".blurred-img");
  return (
    <>
      <Header />
      <>
        {/* HERO */}
        <main
          className="h-[851px] flex flex-col items-center justify-end px-6 pb-8 relative md:h-[775px] z-10 heroSection overflow-hidden"
          id="hero"
        >
          <div className="w-full h-full absolute inset-0 flex items-center justify-center heroVideo">
            <video
              className="w-full h-full object-cover"
              autoPlay=""
              muted=""
              loop=""
            >
              <source
                src="/img/herovideo.mp4"
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
              <img src="/svg/down-arrow.svg" alt="" />
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
                        "url(/img/pyongLee/casePage/image1-small.jpg)",
                    }}
                  >
                    <img
                      src="/img/pyongLee/casePage/image1.jpg"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999]">
                  <div>
                    <p className="text-base font-semibold">
                      Nexo 2023 CDL Summit
                    </p>
                    <p className="text-base opacity-80">
                      Kv evento e UI design Landing page
                    </p>
                  </div>
                  <p className="text-base opacity-80">2023</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row gap-8">
                <div className="h-[271px] md:h-[444px] md:flex md:flex-col md:justify-end md:align-center pb-6 border-b border-[#999999] md:pb-0 md:border-none hidden md:flex-1">
                  <div
                    className="blurred-img w-full h-full"
                    style={{
                      backgroundImage:
                        "url(/img/pyongLee/casePage/image2-small.jpg)",
                    }}
                  >
                    <img
                      src="/img/pyongLee/casePage/image2.jpg"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-[271px] md:h-[444px] flex md:hidden flex-col justify-end align-center pb-6 border-b border-[#999999] md:pb-0 md:border-none md:flex-1">
                  <div
                    className="blurred-img w-full h-full"
                    style={{
                      backgroundImage:
                        "url(/img/pyongLee/casePage/image2Mobile-small.png)",
                    }}
                  >
                    <img
                      src="/img/pyongLee/casePage/image2Mobile.png"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row gap-8 pb-6 border-b border-[#999999] md:pb-0 md:border-none">
                <div className="flex flex-col md:flex-1">
                  <p className="text-base font-semibold text-white">
                    Evento presencial
                  </p>
                  <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                    Evento destaque na cena empresarial de Cachoeira do Su(RS),
                    a convenção Nexo CDL 2023 reuniu um público de 500 pessoas,
                    dentre empresários, lojistas, autoridades municipais e
                    painelistas de renome. Dente as figuras chaves o Head
                    trainer Marcio Martins e o Hipnotista e empreendedor Pyong
                    Lee.
                  </p>
                </div>
                <div className="flex flex-col md:flex-1">
                  <p className="text-base font-semibold text-white">Serviços</p>
                  <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                    Criação de KV do evento e UI design da Landing Page
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-32 blurred-img pb-6 border-b border-[#999999]">
                <div
                  className="blurred-img w-full h-full"
                  style={{
                    backgroundImage:
                      "url(/img/pyongLee/casePage/image3-small.png)",
                  }}
                >
                  <img
                    src="/img/pyongLee/casePage/image3.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

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
