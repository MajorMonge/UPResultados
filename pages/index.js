import Head from "next/head";

import Header from "../components/sections/Header";
import Services from "../components/sections/Services";
import Cases from "../components/sections/Cases";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";

export default function Index() {
  return (
    <>
      <Head>
        <title>UPResultados - Marketing Digital e Médico</title>
        <meta
          property="description"
          content="A UP Resultados é formada por gestores de tráfego especializados em google ads, facebook ads e marketing de resultado. Se você nos encontrou, seu paciente vai te encontrar também! A UP Resultados é formada por Especialistas em Gestão de Tráfego com mais de 7 anos de experiência de Google Ads."
          key="title"
        />
        <meta
          property="og:title"
          content="UPResultados - Marketing Digital e Médico"
          key="title"
        />
        <meta
          property="og:description"
          content="A UP Resultados é formada por gestores de tráfego especializados em google ads, facebook ads e marketing de resultado. Se você nos encontrou, seu paciente vai te encontrar também! A UP Resultados é formada por Especialistas em Gestão de Tráfego com mais de 7 anos de experiência de Google Ads."
          key="title"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/favicon-194x194.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />
      <Services />
      <Cases />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
