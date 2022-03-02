import React from "react";

import styles from "./Testimonial.module.scss";

function Testimonial(props) {
  return (
    <div {...props} className={styles.testimonialComponent}>
      <div className="row g-0 align-items-lg-center">
        <div
          className={`col-12 col-lg-2 ${styles.testimonialPicture}`}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
        <div
          className={`col-12 col-lg-10 offset-lg-1 ${styles.testimonialContent}`}
        >
          <p className="mb-0">{props.testimonial}</p> <hr />{" "}
          <h5 className="mb-0 fs-6">{props.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
