import Image from "next/image";
import "../public/page.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="screen-preview">
      <Header />
      <div className="banner-section"></div>
      <div className="elementor-container elementor-background">
        <div>
          <Image
            src="/health.jpg"
            width={700}
            height={500}
            alt="Picture of health"
          />
        </div>
        <div>
          <h5 className="dashed">About our therapies</h5>
          <h3>Take care of your mind. Explore our psychology section!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr className="elementor-seperator" />
        </div>
      </div>
      <div className="elementor-description">
        <hr className="elementor-title" />
        <br />
        <span>Transform your mind</span>
        <p>
          Find balance & well-being with our <br /> personalized therapies
        </p>
      </div>
      <div className="elementor-inner-section">
        <div className="elementor-element">
          <h3>Individual Theraphy</h3>
          <p>Ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="elementor-element">
          <h3>Family Theraphy</h3>
          <p>Ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="elementor-element">
          <h3>Couples Theraphy</h3>
          <p>Ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="elementor-element">
          <h3>Coaching Services</h3>
          <p>Ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>

      <div className="elementor-container">
        <div className="elementor-widget-wrap">
          <Image
            src="/office.jpg"
            width={700}
            height={500}
            alt="Picture of office"
          />
          <p>
            Aliquet nec ullamcorper sit amet risus nullam. Purus in mollis nunc
            sed id semper risus in. Purus sit amet volutpat consequat mauris
            nunc congue nisi. Pharetra et ultrices neque ornare aenean euismod.
            Enim diam vulputate ut pharetra sit amet aliquam id diam. Ut eu sem
            integer vitae justo. Aliquet nec ullamcorper sit amet risus nullam.
          </p>
        </div>
        <div>
          <h5 className="dashed">Our Features</h5>
          <h3>Find balance & well being today!</h3>
          <Image
            src="/features.jpg"
            width={600}
            height={400}
            alt="Picture of features"
          />
        </div>
      </div>

      <div className="elementor-populated">
        <div>
          <h5 className="dashed">Our gallery</h5>
          <h3>Transform with theraphy, galleries showcasing healing images</h3>
        </div>
        <div className="elementor-button-text">
          <p>
            Aliquet nec ullamcorper sit amet risus nullam. Purus in mollis{" "}
            <br />
            nunc sed id semper risus in. Purus sit amet volutpat consequat
            mauris nunc congue nisi. Pharetra et ultrices neque ornare aenean
            euismod.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className="gallery-image">
        <Image
          src="/gallery/gallery-1.jpg"
          width={250}
          height={200}
          alt="picture of gallery"
        />
        <Image
          src="/gallery/gallery-2.jpg"
          width={300}
          height={200}
          alt="picture of gallery"
        />
        <Image
          src="/gallery/gallery-3.jpg"
          width={300}
          height={200}
          alt="picture of gallery"
        />
        <Image
          src="/gallery/gallery-4.jpg"
          width={300}
          height={200}
          alt="picture of gallery"
        />
        <Image
          src="/gallery/gallery-5.jpg"
          width={300}
          height={200}
          alt="picture of gallery"
        />
      </div>
      <div className="elementor-iconbox-description">
        <hr className="elementor-title" />
        <br />
        <span>Our blog</span>
        <p>
          Find balance & well-being with our <br /> personalized therapies
        </p>
      </div>
      <div className="blog-image">
        <div>
          <Image
            src="/blog/blog-1.jpg"
            width={400}
            height={300}
            alt="blog image"
          />
          <div className="blog-image-content">
            <a className="blog-image-heading">
              Therapy helps self-awareness and <br /> growth by exploring
              emotions
            </a>
            <p className="blog-image-para">August 30, 2023 /// No comments</p>
            <p className="blog-image-paragraph">
              Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
              suspendisse in est ante in. Elementum sagittis vitae et leo.
              Malesuada proin libero nunc consequat interdum
            </p>
            <a className="blog-image-read" href="#">
              Read More
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/blog/blog-2.jpg"
            width={400}
            height={300}
            alt="blog image"
          />
          <div className="blog-image-content">
            <a className="blog-image-heading">
              Controlling anxiety: how therapy can help reduce symptoms
            </a>
            <p className="blog-image-para">August 30, 2023 /// No comments</p>
            <p className="blog-image-paragraph">
              Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
              suspendisse in est ante in. Elementum sagittis vitae et leo.
              Malesuada proin libero nunc consequat interdum
            </p>
            <a className="blog-image-read" href="#">
              Read More
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/blog/blog-3.jpg"
            width={400}
            height={300}
            alt="blog image"
          />
          <div className="blog-image-content">
            <a className="blog-image-heading">
              Therapy helps self-awareness and <br /> growth by exploring
              emotions
            </a>
            <p className="blog-image-para">August 30, 2023 /// No comments</p>
            <p className="blog-image-paragraph">
              Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
              suspendisse in est ante in. Elementum sagittis vitae et leo.
              Malesuada proin libero nunc consequat interdum
            </p>
            <a className="blog-image-read" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
