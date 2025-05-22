import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
