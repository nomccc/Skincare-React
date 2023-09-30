import React from 'react'
import "../../assets/LandingPage/LandingPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
<>
  <div className="hero">
    <div className="heroLeft">
      <article>
        <h1 id="heroTitle">Better Solutions For Your Business</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
      </article>
      <div className="heroButton">
        <button id="getStarted" name="getStarted">
          <a href="CreateProduct.html">Get Started</a>
        </button>
        <a href="#">Watch Video</a>
        <Link to={"/"}>Go create a product!</Link>
      </div>
    </div>
    <div className="heroRight">
      <img
        src="https://bdse.co.za/wp-content/uploads/2020/04/isometric-IT.png"
        alt="b&d engineer image"
        className="bd"
      />
    </div>
  </div>
  <div className="joinPart">
    <article>
      <h1>Join Our Newsletter</h1>
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
    </article>
    <form action="">
      <input type="text" name="join" id="join" />
      <button type="submit" name="joinNewsletter" id="joinNewsletter">
        Subscribe
      </button>
    </form>
    <br />
    {/* <a href="CreateProduct.html">Create Product</a> */}
  </div>
  <div className="row m-0">
    <div className="col text-center p-4 justify-content-center justify-content-center d-flex flex-column">
      <h1 className="align-middle" style={{ color: "#37517E" }}>
        Get to Know Us
      </h1>
      <p className="text-muted">Meet the greatest people behind ARSHA!</p>
    </div>
    <div className="col p-4 d-flex justify-content-center align-items-center text-center">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide me-auto text-center align-content-center justify-content-center"
        data-bs-ride="carousel"
        style={{ width: "70%" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active text-center d-flex justify-content-center"
            data-bs-interval={10000}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-bflex w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Jane Doe</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Emily Heart</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">Joe Doe</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <br />
  <br />
  <footer>
    <div className="information">
      <div className="informationAddress">
        <h2 style={{ color: "#37517E" }}>ARSHA</h2>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>United States</p>
        <br />
        <p>
          <strong>Phone:</strong> +1 5589 55488 55
        </p>
        <p>
          {" "}
          <strong>Email:</strong> info@gmail.com
        </p>
      </div>
      <div className="informationLinks">
        <h2>Useful Links</h2>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Term of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="informationService">
        <h2>Our Services</h2>
        <p>Web Design</p>
        <p>Web Development</p>
        <p>Product Management</p>
        <p>Marketing</p>
        <p>Graphic Design</p>
      </div>
      <div className="informationSNS">
        <h2>Our Social Networks</h2>
        <p>
          Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
          valies
        </p>
        <div className="circleSNS">
          <p className="circle" />
          <p className="circle" />
          <p className="circle" />
          <p className="circle" />
          <p className="circle" />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>
        © Copyright <strong>Arsha</strong>. All Right Reserved
      </p>
    </div>
  </footer>

</>

    </>
  )
}

export default LandingPage