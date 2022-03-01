import React from "react";

import Link from "next/link";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerComponent}>
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 text-center mb-5">
            <a className="navbar-brand fs-5" href="#">
              <h3 className="text-white">LOGO</h3>
            </a>
            <div>
              <p className="text-white">
                Av. Antônio Rodrigues Teixeira Júnior, 122 - Sala 6 - Jardim
                Carvalho, Ponta Grossa - PR, 84015-490
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

              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </div>
        <div className="w-100 text-center text-white">UPResultados © Copyright 2018-{new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default Footer;
