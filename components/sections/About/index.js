import React from "react";
import Image from "next/image";

import styles from "./About.module.scss";

import mediaMockup from "../../../shared/media/images/mediaMockup.png";

function About() {
  return (
    <section id="sobre" className={styles.aboutComponent}>
      <div>
        <div className="row g-0">
          <div className="col-12 col-lg-7 d-grid align-items-end">
            <div className={styles.aboutMedia}>
              <Image src={mediaMockup} layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.aboutMediaBackground}></div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.aboutDescription}>
              <h2 className="text-end text-white">
                SOMOS <br />
                ESPECIA<b>LEADS</b>
              </h2>
              <br />
              <p className="text-end text-justify text-white">
                Se você nos encontrou, seu paciente vai te encontrar também! A
                UP Resultados é formada por Especialistas em Gestão de Tráfego
                com mais de 7 anos de experiência de Google Ads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
