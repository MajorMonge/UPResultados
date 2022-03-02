import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Button from "../../objects/Button";

import styles from "./Cases.module.scss";

import caseAlpha from "../../../shared/media/images/casesAlpha.webp";
import caseBeta from "../../../shared/media/images/casesBeta.webp";
import caseGama from "../../../shared/media/images/casesGama.webp";
import caseOmega from "../../../shared/media/images/casesOmega.webp";

const CaseCard = (props) => {
  return (
    <div className={styles.caseCard} {...props}>
      <Image src={props.image} layout="fill" objectFit="cover" />
    </div>
  );
};

function Cases() {
  const [caseInfo, setcaseInfo] = useState({
    title: "MARKETING MÉDICO",
    name: "DR. MATEUS TOMAZ",
    description: "",
    link: "",
  });

  const sliderSettings = {
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
  };

  return (
    <section id="cases" className={styles.casesComponent}>
      <div className="container">
        <h1 className="text-start mb-5">
          CONFIRA NOSSOS
          <br /> <b>CASES E CLIENTES</b>
        </h1>
      </div>
      <br />
      <div className="mt-5 mb-5 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="10px">
                  <CaseCard
                    image={caseAlpha.src}
                    onMouseEnter={() => {
                      setcaseInfo({
                        title: "MARKETING MÉDICO",
                        name: "DRA. DANIELE SCHERER",
                      });
                    }}
                  />
                  <CaseCard
                    image={caseBeta.src}
                    onMouseEnter={() => {
                      setcaseInfo({
                        title: "MARKETING MÉDICO",
                        name: "DR. SAMIR HUSSEIN",
                      });
                    }}
                  />
                  <CaseCard
                    image={caseGama.src}
                    onMouseEnter={() => {
                      setcaseInfo({
                        title: "MARKETING MÉDICO",
                        name: "DR. MATEUS TOMAZ",
                      });
                    }}
                  />
                  <CaseCard
                    image={caseOmega.src}
                    onMouseEnter={() => {
                      setcaseInfo({
                        title: "MARKETING MÉDICO",
                        name: "DR. SAMUEL TOMAZ",
                      });
                    }}
                  />
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <div className="col-4">
              <div className="text-center mb-5 h-100 d-grid align-content-center align-items-center">
                <h4 className="fw-bold title-color mb-2">{caseInfo.title}</h4>
                <h4 className="fw-normal">{caseInfo.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 d-block d-lg-none">
        <Slider {...sliderSettings}>
          <div className="p-1">
            <CaseCard image={caseAlpha.src} />
            <div className="text-center my-3  d-grid align-content-center align-items-center">
              <h4 className="fw-bold title-color mb-2">MARKETING MÉDICO</h4>
              <h4 className="fw-normal">DRA. DANIELE SCHERER</h4>
            </div>
          </div>
          <div className="p-1">
            <CaseCard image={caseBeta.src} />
            <div className="text-center my-3  d-grid align-content-center align-items-center">
              <h4 className="fw-bold title-color mb-2">MARKETING MÉDICO</h4>
              <h4 className="fw-normal">DR. SAMIR HUSSEIN</h4>
            </div>
          </div>
          <div className="p-1">
            <CaseCard image={caseGama.src} />
            <div className="text-center my-3  d-grid align-content-center align-items-center">
              <h4 className="fw-bold title-color mb-2">MARKETING MÉDICO</h4>
              <h4 className="fw-normal">DR. MATEUS TOMAZ</h4>
            </div>
          </div>
          <div className="p-1">
            <CaseCard image={caseOmega.src} />
            <div className="text-center my-3  d-grid align-content-center align-items-center">
              <h4 className="fw-bold title-color mb-2">MARKETING MÉDICO</h4>
              <h4 className="fw-normal">DR. SAMUEL TOMAZ</h4>
            </div>
          </div>
        </Slider>
      </div>
      
      <div className="col-12 mt-5 mt-lg-0 mb-3 d-flex align-items-center justify-content-center">
          <Button>
            <h5 className="mb-0 px-4 py-1">Ver mais</h5>
          </Button>
        </div>
    </section>
  );
}

export default Cases;
