import Header from "../components/sections/Header";
import Services from "../components/sections/Services";
import Cases from "../components/sections/Cases";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";

export default function Index() {
  return (
    <>
      <Header />
      <Services />
      <Cases />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
