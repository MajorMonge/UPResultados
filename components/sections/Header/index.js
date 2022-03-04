import React, { useState } from "react";
import Image from "next/image";

import styles from "./Header.module.scss";

import Button from "../../objects/Button";

import backgroundHeader from "../../../shared/media/images/backgroundHeader.webp";

function Header() {
  const [nome, setNome] = useState("");
  const [ramo, setRamo] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();
    e.target.reportValidity();

    window.open(
      "mailto:contato@upresultados.com.br?subject=" +
        encodeURI("Olá, eu quero um UP!") +
        "&body=" +
        encodeURI(
          `Meus dados: ${nome}; ${ramo}; ${cidade}; ${email}; ${telefone}.`
        ),
      "_blank"
    );
  }

  return (
    <>
      <header className={styles.header}>
        <Image
          src={backgroundHeader}
          className={styles.backgroundImage}
          alt={"Imagem de fundo"}
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          priority={true}
          quality="100"
        />
        <div className="container h-100 d-grid">
          <div className="row align-items-center mt-2 mt-lg-0">
            <div className="col-12 col-lg-6 col-xl-5">
              <h2 className="text-white">
                <b>MARKETING DIGITAL</b> e <b>MARKETING MÉDICO</b>
                <br /> que dá um <b>UP</b> na sua empresa!
              </h2>
              <br />
              <h4 className="text-white fw-normal">
                A UP Resultados é formada por especialistas em marketing e
                tráfego. Criamos estratégias assertivas para impulsionar seus
                resultados.
              </h4>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 col-xl-5 offset-xl-2 d-none d-lg-block">
              <div className={`${styles.containercard}`}>
                <h3>
                  <b>ALÔ,</b>
                  <br />
                  EU QUERO UM <b>UP</b>!
                </h3>
                <p>
                  Preencha os dados abaixo e receba uma análise completa da sua
                  área.
                </p>
                <form
                  className="row g-3 mt-1"
                  onSubmit={(e) => formSubmitHandler(e)}
                >
                  <div className="col-12">
                    <div className={`input-group mb-1 ${styles.forminput}`}>
                      <span className="input-group-text" id="basic-addon1">
                        <i className="uil uil-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        name="contactName"
                        id="contactName"
                        aria-describedby="basic-addon1"
                        required={true}
                        onChange={(e) => {
                          setNome(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`input-group mb-1 ${styles.forminput}`}>
                      <span className="input-group-text" id="basic-addon1">
                        <i className="uil uil-briefcase-alt"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ramo"
                        aria-label="Ramo"
                        name="contactBusiness"
                        id="contactBusiness"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          setRamo(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={`input-group mb-1 ${styles.forminput}`}>
                      <span className="input-group-text" id="basic-addon1">
                        <i className="uil uil-map-marker"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cidade"
                        aria-label="Cidade"
                        name="contactCity"
                        id="contactCity"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          setCidade(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`input-group mb-1 ${styles.forminput}`}>
                      <span className="input-group-text" id="basic-addon1">
                        <i className="uil uil-at"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        aria-label="E-mail"
                        name="contactEmail"
                        id="contactEmail"
                        aria-describedby="basic-addon1"
                        required={true}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={`input-group mb-1 ${styles.forminput}`}>
                      <span className="input-group-text" id="basic-addon1">
                        <i className="uil uil-phone"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Telefone"
                        aria-label="Telefone"
                        name="contactPhone"
                        id="contactPhone"
                        aria-describedby="basic-addon1"
                        pattern="[0-9]{10,}"
                        required={true}
                        onChange={(e) => {
                          setTelefone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <Button>Enviar</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-100 text-center mb-5 mb-lg-3">
            <a href="#sobre">
              <i
                className={
                  "uil uil-mouse-alt text-white d-none d-lg-inline " +
                  styles.mouseicon
                }
              ></i>
              <i
                className={
                  "uil uil-angle-double-down text-white d-inline d-lg-none " +
                  styles.mouseicon
                }
              ></i>
            </a>
          </div>
        </div>
      </header>

      <div
        className={`container d-block d-lg-none ${styles.mobilecontainercard}`}
      >
        <div className="col-12">
          <div className={`${styles.containercard}`}>
            <h3>
              <b>ALÔ,</b>
              <br />
              EU QUERO UM <b>UP</b>!
            </h3>
            <p>
              Preencha os dados abaixo e receba uma análise completa da sua
              área.
            </p>
            <form
              className="row g-3 mt-1"
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <div className="col-12">
                <div className={`input-group mb-1 ${styles.forminput}`}>
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    aria-label="Nome"
                    name="contactName"
                    id="contactName"
                    aria-describedby="basic-addon1"
                    required={true}
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className={`input-group mb-1 ${styles.forminput}`}>
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-briefcase-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ramo"
                    aria-label="Ramo"
                    name="contactBusiness"
                    id="contactBusiness"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      setRamo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className={`input-group mb-1 ${styles.forminput}`}>
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-map-marker"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cidade"
                    aria-label="Cidade"
                    name="contactCity"
                    id="contactCity"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      setCidade(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={`input-group mb-1 ${styles.forminput}`}>
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-at"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    aria-label="E-mail"
                    name="contactEmail"
                    id="contactEmail"
                    aria-describedby="basic-addon1"
                    required={true}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={`input-group mb-1 ${styles.forminput}`}>
                  <span className="input-group-text" id="basic-addon1">
                    <i className="uil uil-phone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Telefone"
                    aria-label="Telefone"
                    name="contactPhone"
                    id="contactPhone"
                    aria-describedby="basic-addon1"
                    pattern="[0-9]{10,}"
                    required={true}
                    onChange={(e) => {
                      setTelefone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  onSubmit={(e) => formSubmitHandler(e)}
                  onClick={(e) => formSubmitHandler(e)}
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
