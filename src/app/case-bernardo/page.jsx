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

import { useEffect } from "react";

export default function CaseBernardo() {
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
              <div className="h-[271px] md:h-[518px] flex flex-col justify-end align-center overflow-hidden">
                <div
                  className="blurred-img w-full h-full"
                  style={{
                    backgroundImage:
                      "url(/img/bernandoCaetano/casePage/image1-small.png)",
                  }}
                >
                  <img
                    src="/img/bernandoCaetano/casePage/image1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between pb-6 border-b border-[#999999]">
                <div>
                  <p className="text-base font-semibold">
                    Bernardo Caetano I Agência Tucano
                  </p>
                  <p className="text-base opacity-80">Website</p>
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
                      "url(/img/bernandoCaetano/casePage/image2-small.jpg)",
                  }}
                >
                  <img
                    src="/img/bernandoCaetano/casePage/image2.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[271px] md:h-[444px] flex flex-col justify-end align-center md:flex-1">
                <div
                  className="blurred-img w-full h-full"
                  style={{
                    backgroundImage:
                      "url(/img/bernandoCaetano/casePage/image3-small.jpg)",
                  }}
                >
                  <img
                    src="/img/bernandoCaetano/casePage/image3.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-8 pb-6 border-b border-[#999999] md:pb-0 md:border-none">
              <div className="flex flex-col md:flex-1">
                <p className="text-base font-semibold text-white">
                  Bernardo Caetano I Agência Tucano
                </p>
                <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                  Ui Design Landing Page
                  <br />
                  <br />
                  Bernardo Caetano é CEO da agência Tucano, com abrangência
                  nacional e internacional. Produziu e produz sites e landing
                  pages para grandes nomes do mercado digital de diversos
                  nichos.
                </p>
              </div>
              <div className="flex flex-col md:flex-1">
                <p className="text-base font-semibold text-white">Serviços</p>
                <p className="mt-1 md:mt-8 text-base font-semibold text-white opacity-80">
                  Ui design de landing page
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-32 blurred-img pb-6 md:pb-24 border-b border-[#999999]">
              <div
                className="blurred-img w-full h-full"
                style={{
                  backgroundImage:
                    "url(/img/bernandoCaetano/casePage/image4-small.jpg)",
                }}
              >
                <img
                  src="/img/bernandoCaetano/casePage/image4.jpg"
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
