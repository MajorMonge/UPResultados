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
        <meta property="description" content="A UP Resultados é formada por gestores de tráfego especializados em google ads, facebook ads e marketing de resultado. Se você nos encontrou, seu paciente vai te encontrar também! A UP Resultados é formada por Especialistas em Gestão de Tráfego com mais de 7 anos de experiência de Google Ads." key="title" />
        <meta property="og:title" content="UPResultados - Marketing Digital e Médico" key="title" />
        <meta property="og:description" content="A UP Resultados é formada por gestores de tráfego especializados em google ads, facebook ads e marketing de resultado. Se você nos encontrou, seu paciente vai te encontrar também! A UP Resultados é formada por Especialistas em Gestão de Tráfego com mais de 7 anos de experiência de Google Ads." key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Services />
      <Cases />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
