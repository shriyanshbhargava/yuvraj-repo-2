import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <img
        className="shopBanner"
        src="https://yuvrajpyromart.com/images/about.jpg"
        alt="../../assets/banners/mainPageBanner.jpg"
      />
      <div class="wrapper pt-5 pb-5">
        <div class="icon pl-3">
          <img
            className="logoMain"
            width={500}
            src="https://yuvrajpyromart.com/images/yuvrajlogo.png"
            alt="../../assets/banners/mainPageBanner.jpg"
          />
        </div>
        <div class="content">
          <h4 className="logoName">
            " MANUFACTURING QUALITY CRACKERS WITH CUSTOMER SATISFACTION "{" "}
          </h4>
          <p className="w-75 text-center">
            Yuvraj Pyro Mart is the leading supplier of crackers & fancy
            crackers items. Firecrackers have always been an integral part of
            indian culture and tradition. Be it a festival, a wedding, reunion
            or any other special occasion, it is in our hearts to celebrate it
            in the glory of lights. Our aim is to provide the excellent services
            and true value for money.
          </p>
        </div>
      </div>

      <header>
        <div
          class=" text-center mt-5 bg-image"
          style={{
            backgroundImage:
              "url('https://yuvrajpyromart.com/images/rkfullsize.jpg')",
            height: "400px",
          }}
        >
          <div
            class="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.653)",
              paddingTop: "120px",
              paddingBottom: "100px",
            }}
          >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">
                  HAVE ANY QUESTIONS RELATED OUR PRODUCTS?
                  <br />
                  FEEL FREE TO ENQUIRE US!
                </h1>
                <br />
                <a class="btn btn-outline-light btn-lg" href="#!" role="button">
                  Contact Us !
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="card-deck">
        <div class="card featuresDiv ">
          <div class="card-body text-right features alt ">
            <h5 class="card-title mt-3">Motto</h5>
            <p class="card-text mt-3">
              Our motto is SAFETY FIRST. Yuvraj Pyro Mart Industry adopted
              several stringent quality testing measures as well as norms
              defined by the fireworks industry.
            </p>
          </div>
        </div>
        <div class="card featuresDiv">
          <div class="card-body features text-right">
            <h5 class="card-title mt-3">Vision</h5>
            <p class="card-text mt-3">
              The company's presence is also established amongst retailers which
              makes our product accessible to all parts of India. Over time, our
              products have carved a niche for its quality and this has been
              made possible by ensuring quality control measures right in the
              organizational processes.
            </p>
          </div>
        </div>
        <div class="card featuresDiv">
          <div class="card-body text-right features alt">
            <h5 class="card-title mt-3">Mission</h5>
            <p class="card-text mt-3">
              We respect consumer's benefit, safety, good quality, beautiful
              packing,Effective service, and reasonable price. Our fireworks
              products market oriented In mind are designed and manufactured to
              meet the quality standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
