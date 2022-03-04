import React from "react";
import Image from "next/image";

import styles from "./About.module.scss";

import mediaMockup from "../../../shared/media/images/mediaMockup.webp";

function About() {
  return (
    <section id="sobre" className={styles.aboutComponent}>
      <div>
        <div className="row g-0">
          <div className="col-12 col-lg-7 d-grid align-items-end">
            <div className={styles.aboutMedia}>
              <Image src={mediaMockup} layout="fill" objectFit="contain" alt="Mídia informativa"/>
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
                  Se você nos encontrou, seu cliente vai te encontrar também! A UP Resultados possui especialistas em gestão de tráfego com mais de 7 anos de experiência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
