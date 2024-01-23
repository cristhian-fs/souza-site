"use client";

import { FullProject } from "../../svg/FullProject";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedbacksSwiper from "../../components/FeedbacksSwiper";

// smooth scroll
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

export default function Cases() {
  const lenis = new Lenis({
    duration: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
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
            <a href="#cases" onclick="lenis.scrollTo('#cases')">
              <button className="w-full md:w-auto px-12 py-4 gradient-button flex items-center justify-center gap-3 rounded-full mt-10 md:mt-0 md:hidden maskButtonAnim group transition-all duration-300">
                <div className="mask-button-text">
                  <p className="text-[#08060C] first-text">See project</p>
                  <p className="text-[#08060C] second-text">See project</p>
                </div>
                <img
                  src="/svg/right-arrow-button.svg"
                  className="transition-all duration-300 group-hover:translate-x-2"
                  alt=""
                />
              </button>
            </a>
            <div className="flex items-center justify-center gap-2 mt-12 md:absolute md:bottom-0 md:right-0">
              <p className="">Scroll</p>
              <img src="/svg/down-arrow.svg" alt="" />
            </div>
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
                      <div className="mask-button-text">
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
                      <div className="mask-button-text">
                        <p className=" first-text">Veja completo</p>
                        <p className=" second-text">Veja completo</p>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              {/* CASE CANDY LIPS */}
              <div className="mainCase md:flex-1 mt-8">
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
                      <div className="mask-button-text">
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
                      <div className="mask-button-text">
                        <p className=" first-text">Veja completo</p>
                        <p className=" second-text">Veja completo</p>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              {/* CASE BPO */}
              <div className="mainCase md:flex-1 mt-8">
                <div className="mainCaseThumb flex flex-col justify-end align-center">
                  <div className="absolute inset-0 caseThumb">
                    <img
                      src="img/BPO Class Thumb.webp"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
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
                      <div className="mask-button-text">
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
                      <div className="mask-button-text text-nowrap">
                        <p className=" first-text">Veja completo</p>
                        <p className=" second-text">Veja completo</p>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              {/* CASE BERNARDO */}
              <div className="mainCase md:flex-1 mt-8">
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
                <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999] md:border-none">
                  <div>
                    <p className="text-2xl font-medium">
                      Bernardo Caetano I Agência Tucano
                    </p>
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