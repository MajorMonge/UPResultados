import React from "react";
import Slider from "react-slick";

import ContactForm from "../../objects/ContactForm";
import Testimonial from "../../objects/Testimonial";

import testimonialPic from "../../../shared/media/images/drmockupPic.jpg";

import styles from "./Testimonials.module.scss";

function Testimonials() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "25px",
    dots: true,
    cssEase: "linear",
  };

  return (
    <section id="depoimentos" className={`${styles.testimonialsComponent}`}>
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div
                id="carouselExampleIndicators"
                className="carousel slide mb-5 mb-lg-0"
                data-bs-ride="carousel"
              >
                <div className="row">
                  <div className="col-12 col-lg-11 p-0">
                    <div className="carousel-inner mt-5 mb-0">
                      <div className="carousel-item active">
                        <Testimonial
                          image={testimonialPic.src}
                          name="DR. MATEUS TOMAZ"
                          testimonial="“ Em um mundo digital, estar fora das redes é não existir de fato. Que site! Nunca tive problemas para descrever algo, mas o que vocês fizeram pelo escritório, me deixou sem palavras. Muito obrigado."
                        />
                      </div>
                      <div className="carousel-item ">
                        <Testimonial
                          image={testimonialPic.src}
                          name="DR. MATEUS TOMAZ"
                          testimonial="“ Em um mundo digital, estar fora das redes é não existir de fato. Que site! Nunca tive problemas para descrever algo, mas o que vocês fizeram pelo escritório, me deixou sem palavras. Muito obrigado."
                        />
                      </div>
                      <div className="carousel-item ">
                        <Testimonial
                          image={testimonialPic.src}
                          name="DR. MATEUS TOMAZ"
                          testimonial="“ Em um mundo digital, estar fora das redes é não existir de fato. Que site! Nunca tive problemas para descrever algo, mas o que vocês fizeram pelo escritório, me deixou sem palavras. Muito obrigado."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-1">
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="carousel-indicators mt-3 mb-2">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex d-xl-block justify-content-center">
              <ContactForm className={styles.testimonialsForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
