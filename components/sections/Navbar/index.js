import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./Navbar.module.scss";

import LogoNavbar from "../../../shared/media/images/logo_negativo.webp";

function Navbar() {
  const router = useRouter();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navbarComponent}`}
    >
      <div className="container-md">
        <Link href="/">
          <div className={"navbar-brand " + styles.navImage}>
            <Image
              src={LogoNavbar}
              alt="Logotipo UPResultados"
              objectFit="contain"
              height="80px"
              layout="fill"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="uil uil-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${
                router.pathname == "/" ||
                router.pathname == "/inicio" ||
                router.pathname == "/home"
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/" title="HOME">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#sobre" title="SOBRE">
                SOBRE
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#marketingmedico" title="MARKETING MÉDICO">
                MARKETING MÉDICO
              </Link>
            </li>
            <li
              className={`nav-item ${
                router.pathname == "/blog" ? "active" : ""
              }`}
            >
              <Link href="#blog" title="BLOG">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
