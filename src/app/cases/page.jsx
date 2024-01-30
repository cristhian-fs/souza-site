"use client";

import { FullProject } from "../../svg/FullProject";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbacksSwiper from "../../components/FeedbacksSwiper";

// smooth scroll
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

import { useEffect, useRef, useState } from "react";

export default function Cases() {
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

  const refVideo = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // useEffect(() => {
  //   if (!refVideo.current) {
  //     return;
  //   }

  //   if (isMuted) {
  //     //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
  //     refVideo.current.defaultMuted = true;
  //     refVideo.current.muted = true;
  //   }
  // }, []);

  return (
    <>
      <>
        <Header />
        {/* HERO */}
        <main
          className="h-auto py-24 flex flex-col items-center justify-end px-6 pb-8 relative md:h-[775px] z-10 heroSection overflow-hidden"
          id="hero"
        >
          <div className="w-full h-[146px] md:h-full md:absolute md:inset-0 flex items-center justify-center">
            <video
              playsInline={true}
              className="w-full h-full object-cover"
              autoPlay={true}
              loop={true}
              muted={true}
              ref={refVideo}
              // poster="/img/thumb.png"
            >
              <source
                src="https://videosouza-destination920a3c57-hr7vq0ozjdev.s3.amazonaws.com/herovideo.mp4"
                type="video/mp4"
                id="heroVideo"
              />
              <source src="/img/herovideo.webm" type="video/webm" />
              Seu navegador não suporta ao elemento de vídeo
            </video>
          </div>
          <div className="relative z-10 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto">
            <h1 className="mt-8 md:mt-0 text-5xl md:text-8xl revealHeroText">
              Veja alguns projetos de sucesso que desenvolvemos
            </h1>
          </div>
        </main>
        {/* SECTION CASES */}
        <section
          className="px-6 py-14 md:py-36 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto"
          id="cases"
        >
          <h5 className="text-sm uppercase py-2">
            <span className="text-[#4F4F4F]">03 / </span>cases
          </h5>
          <div className="flex flex-col md:gap-8 md:w-full  md:mt-8">
            <div className="relative md:flex md:flex-wrap">
              {/* CASE LEVI MOTION */}
              <div className="mainCase mt-8 md:flex-1">
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
            </div>
            <div className="relative md:flex md:flex-wrap md:gap-8 md:pb-6 md:border-b md:border-[#999999]">
              {/* CASE PALMBEACH */}
              <div className="mainCase z-10 md:flex-1 mt-8">
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
                    </div>
                  </div>
                </a>
                <div className="mt-6 flex items-end justify-between pb-6 md:pb-0 border-b border-[#999999] md:border-none">
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
              {/* CASE CANDY LIPS */}
              <div className="mainCase md:flex-1 mt-8">
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
                    <p className="text-2xl font-medium text-[#F3F3F2]">
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
            <div className="relative md:flex md:flex-wrap md:gap-8 md:pb-6 md:border-b md:border-[#999999]">
              {/* CASE GABI */}
              <div className="mainCase md:flex-1 mt-8">
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
                    <p className="text-2xl font-medium">Gabi Cervantes</p>
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
              {/* CASE BPO */}
              <div className="mainCase md:flex-1 mt-8">
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
                    <p className="text-2xl font-medium text-[#F3F3F2]">
                      BPO Class Submit
                    </p>
                    <p className="text-base opacity-80 mt-1">
                      Evento presencial de BPO Financeiro
                    </p>
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
            </div>
            <div className="relative md:flex md:flex-wrap md:gap-8 md:pb-6 md:border-b md:border-[#999999]">
              {/* CASE PYONG */}
              <div className="mainCase md:flex-1 mt-8">
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
                    <p className="text-2xl font-medium">
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
              {/* CASE BERNARDO */}
              <div className="mainCase md:flex-1 mt-8">
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
                    <p className="text-2xl font-medium">Agência Tucano</p>
                    <p className="text-base opacity-80 mt-1">
                      Ui Design Landing Page
                    </p>
                  </div>
                  <a href="/case-bernardo">
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
    </>
  );
}
