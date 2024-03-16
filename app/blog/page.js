import Image from "next/image";
import "../../public/page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="elementor-widget-container">
        <h2>Our Blog</h2>
        <Image
          src="/title/mask.webp"
          width={150}
          height={40}
          alt="blog section"
        />
      </div>
      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-1.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Theraphy helps self-awareness and growth by exploring emotions</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>

      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-2.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Therapy heals emotional trauma and difficulties</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>

      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-3.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Theraphy for personal fulfillment and happiness</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>

      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-4.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Why theraphy is important in dealing with day-to-day stress</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>

      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-5.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Taking care of mental health: how theraphy can help</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>

      <div className="elementor-post-blog">
        <Image
          src="/blog/blog-post-6.jpg"
          width={900}
          height={700}
          alt="blog post"
        />
      </div>
      <div className="elementor-post-text">
        <h2>Controlling anxiety: how therapy can help reduce symptoms</h2>
        <span>August 30, 2023 /// No Comments</span>
        <p>
          Enim ut tellus elementum sagittis vitae et. Vulputate dignissim
          suspendisse in est ante in. Elementum sagittis vitae et leo. Malesuada
          proin libero nunc consequat interdum
        </p>
        <a href="#">Read More</a>
      </div>
      <br />
      <Footer />
    </div>
  );
}
