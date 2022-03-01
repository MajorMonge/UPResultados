import React from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

function Button(props) {
  if (props.href != undefined) {
    return (
      <Link {...props} className={styles.mainButton}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button {...props} className={styles.mainButton}>
        {props.children}
      </button>
    );
  }
}

export default Button;
