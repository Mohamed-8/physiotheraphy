import Image from "next/image";
import "../../public/page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="elementor-widget-container">
        <h2>Contact Us</h2>
        <Image
          src="/title/mask.webp"
          width={150}
          height={40}
          alt="contact section"
        />
      </div>
      <Footer />
    </div>
  );
}
