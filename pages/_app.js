import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Popper from '@popperjs/core';

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
