import React from "react";

import Button from "../Button";

import styles from "./ContactForm.module.scss";

function ContactForm(props) {
  function formSubmitHandler(e) {
    e.preventDefault();
    e.target.reportValidity();
    console.log(e.target.reportValidity());
  }

  return (
    <div {...props} className={`${styles.containercard} ${props.className}`}>
      <h3>
        <b>ALÔ,</b>
        <br />
        EU QUERO UM <b>UP</b>.
      </h3>
      <p>Envie um pedido de UP e eceba uma análise completa da sua área.</p>
      <form className="row g-3 mt-1" onSubmit={(e) => formSubmitHandler(e)}>
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
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <Button>Enviar</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
