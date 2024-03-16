import "../../public/page.css";

export default function Header() {
  return (
    <div className="topnav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a>Pages</a>
      <a href="blog">Blog</a>
      <div className="dropdown">
        <a className="dropbtn">Therapies</a>
        <div class="dropdown-content">
          <a href="/individualtheraphy">Individual Theraphy</a>
          <a href="#">Family Theraphy</a>
          <a href="#">Couples Theraphy</a>
          <a href="#">Coaching Services</a>
          <a href="#">Eating Disorder</a>
        </div>
      </div>
      <a href="/contact">Contact Us</a>
    </div>
  );
}
