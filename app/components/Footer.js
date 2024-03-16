import "../../public/page.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="elementor-top-section">
        <div className="elementor-top-content">
          <h2>
            Take care of your mental health & find balance <br /> with help of
            psychology!
          </h2>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="elementor-button-wrapper">
          <a href="/contact">
            <button className="elementor-top-button">Contact Us</button>
          </a>
        </div>
      </div>
      <div class="footer">
        <div class="content">
          <div class="services">
            <h4>Therapies</h4>
            <p>
              <a href="/individualtheraphy">Individual Theraphy</a>
            </p>
            <p>
              <a href="#">Family Theraphy</a>
            </p>
            <p>
              <a href="#">Couples Theraphy</a>
            </p>
            <p>
              <a href="#">Coaching Services</a>
            </p>
            <p>
              <a href="#">Eating Disorder</a>
            </p>
          </div>
          <div class="social-media">
            <h4>Company</h4>
            <p>
              <a href="#">Linkedin</a>
            </p>
            <p>
              <a href="#">Twitter</a>
            </p>
            <p>
              <a href="#">Facebook</a>
            </p>
            <p>
              <a href="#">Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/about">About</a>
            </p>
            <p>
              <a href="/blog">Blog</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Cupiditate, qui!
            </p>
            <h4 class="mobile">Mobile</h4>
            <p>
              <a href="#">+91-9836576571</a>
            </p>
            <h4 class="mail">Email</h4>
            <p>
              <a href="#">physiotheraphy@gmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />© 2022 physiotheraphy.
        </footer>
      </div>
    </div>
  );
}
