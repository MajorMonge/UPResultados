import React from "react";
import Slider from "react-slick";

import About from "../About";

import styles from "./Services.module.scss";

function ServiceCard(props) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.header}>{props.icon}</div>
      <div className={styles.body}>
        <h4 className={styles.title}>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

function Services() {
  const sliderDesktopSettings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    rows: 2,
    speed: 500,
    dots: true,
    arrows: true,
  };

  const sliderMobileSettings = {
    infinite: true,
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    centerMode: true,
    centerPadding: "25px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      name: (
        <>
          <b>WEBSITES</b>
          <br /> DE ALTA CONVERSÃO
        </>
      ),
      description: "Sites e E-Commerce que impulsionam sua identidade na web.",
      icon: <i className="uil uil-globe"></i>,
    },
    {
      name: (
        <>
          <b>CAMPANHAS</b>
          <br /> INTELIGENTES
        </>
      ),
      description: "Ads inteligentes para maior captção e insights.",
      icon: <i className="uil uil-bullseye"></i>,
    },
    {
      name: (
        <>
          <b>IDENTIDADE</b>
          <br /> VISUAL
        </>
      ),
      description:
        "Criamos e atualizamos sua identidade visual com modernidade.",
      icon: <i className="uil uil-eye"></i>,
    },
    {
      name: (
        <>
          <b>REDES SOCIAIS</b>
          <br /> PARA ENGAJAMENTO
        </>
      ),
      description:
        "Criamos e atualizamos sua identidade visual com modernidade.",
      icon: <i className="uil uil-analysis"></i>,
    }
  ];

  return (
    <section id="nossos-servicos" className={styles.servicesComponent}>
      <div className="container mt-5 mt-lg-1 ">
        <h2 className="text-center">
          <b>SERVIÇOS DIGITAIS</b> <br /> <small>Conteúdos para redes sociais e ações de marketing para gerar leads</small>
        </h2>
        <br />
        <Slider {...sliderDesktopSettings} className="mt-5 d-none d-lg-block">
          {services.map((service, index) => (
            <div className="p-3" key={"service#" + index}>
              <ServiceCard
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Slider {...sliderMobileSettings} className="mt-5 d-block d-lg-none">
        {services.map((service, index) => (
          <div className="p-1" key={"service#" + index}>
            <ServiceCard
              name={service.name}
              description={service.description}
              icon={service.icon}
            />
          </div>
        ))}
      </Slider>

      <About />
    </section>
  );
}

export default Services;
