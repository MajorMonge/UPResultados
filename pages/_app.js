import { useEffect } from "react";
import { Montserrat, Work_Sans } from "next/font/google";

import Layout from "../themes/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Unicons.css";
import "../styles/Style.css";
import Popper from "@popperjs/core";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <div
      className={`${workSans.variable} ${montserrat.variable}`}
      style={{
        minHeight: "100%",
        fontFamily: "var(--font-work-sans), system-ui, sans-serif",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
