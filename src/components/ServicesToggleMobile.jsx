"use client";

import { useState, useEffect } from "react";

import { SitesIcon } from "../svg/SitesIcon";
import { IDVisual } from "../svg/IDVisual";
import { KeyVisual } from "../svg/KeyVisual";
import { LancamentoIcon } from "../svg/LancamentosIcon";
import { ArrowBottomRight } from "../svg/ArrowBottomRight";

const ServicosToggleMobile = () => {
  const services = [
    {
      icon: <SitesIcon className="h-8 w-8 gradientToggleIcon sitesELp" />,
      title: "Sites e Landing Pages",
      content:
        "Nossos Sites e Landing Pages são criados e desenvolvidos de forma criativa, exclusiva e direcionada ao seu negócio. O Visual vende, mas somos também especialistas em entregar páginas rápidas, adaptadas e responsivas para a melhor experiencia do seu lead e venda do seu infoproduto e serviço no digital.",
    },
    {
      icon: <KeyVisual className="h-8 w-8 gradientToggleIcon keyVisual" />,
      title: "Key visual",
      content:
        "Desenvolvemos Kv`s conceituais e alinhadas a sua estratégia. Já trabalhamos e criamos peças responsáveis por gerar faturamentos acima de 6 dígitos aos nossos clientes.",
    },
    {
      icon: <IDVisual className="h-8 w-8 gradientToggleIcon idVisual" />,
      title: "Identidade visual",
      content:
        "Sua mensagem precisa ser transmitida e dar voz aos seus valores e a personalidade do seu produto e/ou negócio. Criamos marcas, elementos gráficos, cores, formatos, tipografias que posicionam, diferenciam e potencializam a voz do seu negócio.",
    },
    {
      icon: <LancamentoIcon className="h-8 w-8 gradientToggleIcon designerP" />,
      title: "Design para Lançamentos",
      content:
        "Pensamos e criamos nosso design de acordo com a estratégia do seu lançamento. O Design não basta ser bonito, ele precisa ser funcional. Gere percepção de valor ao seu produto ou serviço, comunique de forma assertiva.",
    },
  ];

  useEffect(() => {
    // FUNCTION TO OPEN TOGGLE OPTIONS
    const toggleButtons = document.querySelectorAll(".toggleButton");
    const toggleContents = document.querySelectorAll(".toggleContent");
    const extraContents = document.querySelectorAll(".extraContent");

    // Inicializando alturas máximas para 0
    extraContents.forEach((item) => {
      item.style.maxHeight = 0;
    });

    function handleToggleContent(index) {
      toggleContents.forEach((contentItem, contentIndex) => {
        contentItem.classList.toggle("active", contentIndex === index);
      });

      extraContents.forEach((extraContent, extraContentIndex) => {
        if (extraContentIndex === index) {
          extraContent.style.maxHeight = extraContent.scrollHeight + "px";
          extraContent.classList.add("mt-4");
        } else {
          extraContent.style.maxHeight = 0;
          extraContent.classList.remove("mt-4");
        }
      });
    }

    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        handleToggleContent(index);
      });
    });
  }, []);

  return (
    <section
      className="px-6 py-14 md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto section03"
      id="services"
    >
      <h5 className="text-sm uppercase py-2">
        <span className="text-[#4F4F4F]">02 / </span>Nossos serviços
      </h5>
      {services.map((service, index) => (
        <div key={index} className={`toggleContent pt-6 pb-8`}>
          <div className={`toggleButton flex items-center justify-between`}>
            <div className="flex items-center gap-4">
              {service.icon}
              <p className="text-xl md:text-3xl toggleServiceName">
                {service.title}
              </p>
            </div>
            <ArrowBottomRight className={`arrowToggle h-6 w-6`} alt="" />
          </div>

          <p className={`text-base md:text-2xl extraContent`}>
            {service.content}
          </p>
          <span className="contentAsideBar" />
        </div>
      ))}
    </section>
  );
};

export default ServicosToggleMobile;
