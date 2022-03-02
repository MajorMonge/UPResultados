import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Cases from "../components/sections/Cases";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";

export default function Index() {
  return (
    <>
      <Header />
      <About />
      <Cases />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
