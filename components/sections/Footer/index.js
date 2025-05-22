import React from "react";
import Image from "next/image";

import Link from "next/link";

import styles from "./Footer.module.scss";

import backgroundFooter from "../../../shared/media/images/backgroundFooter.webp";
import LogoNavbar from "../../../shared/media/images/logo_negativo.webp";

function Footer() {
  return (
    <footer className={styles.footerComponent}>
      <Image
        src={backgroundFooter}
        className={styles.backgroundImage}
        alt={"Imagem de fundo"}
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        priority={true}
        quality="100"
      />
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 text-center mb-5">
            <Link href="/">
              <div className={"navbar-brand " + styles.navImage}>
                <Image
                  src={LogoNavbar}
                  alt="Logotipo UPResultados"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </Link>
            <div>
              <p className="text-white">
                Av. Antônio Rodrigues Teixeira Júnior, 122 - Sala 6 - Jardim
                Carvalho, Ponta Grossa - PR, 84015-490
                <br />
                <br />
                <span className="mt-3">CNPJ: 38.302.851/0001-61</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center mb-5">
            <ul className={styles.contactlist}>
              <li>
                <i className="uil uil-whatsapp"></i> (42) 98429-0571
              </li>
              <li>
                <i className="uil uil-whatsapp"></i> (42) 98405-0359
              </li>
              <li>
                <i className="uil uil-envelope"></i> contato@upresultados.com.br
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 d-grid justify-content-center mb-5">
            <h3 className="text-white">
              <b>Navegação</b>
            </h3>
            <br />
            <div className={` ${styles.navlist}`}>
              <Link href="/">Home</Link>

              <Link href="#sobre">Sobre</Link>

              <Link href="#marketing-medico">Marketing Médico</Link>

              <Link href="#blog">Blog</Link>
            </div>
          </div>
        </div>
        <div className="w-100 text-center text-white">
          UPResultados © Copyright 2020-{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
