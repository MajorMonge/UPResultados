import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import Button from "../../objects/Button";
import BlogPostThumbnail from "../../objects/BlogPostThumbnail";

import styles from "./BlogPreview.module.scss";

import blogPostImage from "../../../shared/media/images/blogPost.webp";
import backgroundBlog from "../../../shared/media/images/backgroundBlog.webp";

function BlogPreview() {
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
    <section id="blog" className={styles.blogPreviewComponent}>
      <Image
        src={backgroundBlog}
        className={styles.backgroundImage}
        layout="fill"
        priority={true}
        objectFit="cover"
        objectPosition="center"
        quality="100"
        alt="Fundo da seção"
      />
      <div className="container mt-5">
        <br />
        <h2 className="text-center mt-5 mb-5">
          <b>NOVIDADES</b> <br /> DA UP
        </h2>
        <br />
      </div>
      <div className="container">
        <div className="d-none d-lg-flex row mt-5">
          <div className="col-12 col-lg-3 mb-3">
            <BlogPostThumbnail
              image={blogPostImage.src}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
          <div className="col-12 col-lg-3 mb-3">
            <BlogPostThumbnail
              image={blogPostImage.src}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
          <div className="col-12 col-lg-3 mb-5">
            <BlogPostThumbnail
              image={blogPostImage.src}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
          <div className="col-12 col-lg-3 mt-5 mt-lg-0 mb-3 d-flex align-items-center justify-content-center">
            <Button>
              <h5 className="mb-0 px-4 py-1">Ler mais</h5>
            </Button>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none ">
        <Slider {...sliderSettings}>
          <div className="p-2">
            <BlogPostThumbnail
              image={blogPostImage}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
          <div className="p-2">
            <BlogPostThumbnail
              image={blogPostImage.src}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
          <div className="p-2">
            <BlogPostThumbnail
              image={blogPostImage.src}
              href=""
              title="Título"
              date="4 fev. 2022"
            />
          </div>
        </Slider>
        <br />
        <div className="col-12 mt-5 mt-lg-0 mb-3 d-flex align-items-center justify-content-center">
          <Button>
            <h5 className="mb-0 px-4 py-1">Ler mais</h5>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
