import Image from "next/image";
import "../../public/page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="elementor-widget-container">
        <h2>About Me</h2>
        <Image
          src="/title/mask.webp"
          width={150}
          height={40}
          alt="about section"
        />
      </div>
      <div className="elementor-container">
        <Image
          src="/about/about.jpg"
          width={700}
          height={500}
          alt="about section"
        />
        <div>
          <h5 className="dashed">About our therapies</h5>
          <h3>
            Explore our psychology <br /> section!
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr className="elementor-seperator" />
          <div className="elementor-iconbox-content">
            <span>Balance & self-care</span>
            <span>Trasformation</span>
          </div>
          <p>
            Cursus metus aliquam eleifend mi. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper. Varius vel pharetra vel
            turpis nunc eget lorem dolor sed. Libero justo laoreet sit amet. Dui
            id ornare arcu odio ut sem nulla pharetra.
          </p>
          <hr className="elementor-seperator" />
        </div>
      </div>

      <div className="elementor-about-description">
        <hr className="elementor-about-title" />
        <br />
        <span>Our process</span>
        <p>
          We improve your health with our <br /> full-range therapies
        </p>
      </div>

      <div className="elementor-default">
        <div className="elementor-default-size">
          <h4>
            01. Initial <br /> Assessment
          </h4>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="elementor-default-size">
          <h4>
            02. Setting <br /> goals
          </h4>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="elementor-default-size">
          <h4>
            03. Implementation <br /> of theraphy
          </h4>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="elementor-default-size">
          <h4>
            04. Continuous <br /> evaluation
          </h4>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
