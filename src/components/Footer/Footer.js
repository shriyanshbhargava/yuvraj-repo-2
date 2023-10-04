import {
    Copyright,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PhoneCall,
  WhatsappLogo,
} from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start text-white mt-3 bottom-0" style={{backgroundColor: "#E45443"}}>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/yuvrajfireworksindustries/?ti=as"
              class="me-4 text-reset"
            >
              <FacebookLogo size={25} />
            </a>
            <a
              href="https://www.instagram.com/yuvrajfireworks/?igshid=13wku6fa4jeya"
              class="me-4 text-reset"
            >
              <InstagramLogo size={25} />
            </a>
            <a
              href="https://www.google.com/maps/place/Yuvraj+Pyro+Mart/@9.9051526,78.1006732,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00cf9c95977781:0xe36e4d9c018039e3!8m2!3d9.9051526!4d78.1028619?hl=en-IN"
              class="me-4 text-reset"
            >
              <MapPin size={25} />
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <img
                    src="https://yuvrajpyromart.com/images/yuvraj.png"
                    alt="https://yuvrajpyromart.com/images/yuvraj.png"
                    width={150}
                  />
                </h6>
                <p>
                  Yuvraj Fireworks is a leading direct fireworks outlet in
                  Madurai, offering fire crackers with discount.
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Products
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MapPin /> : Near Jaihindpuram market, Satya Sai Nagar, TVS
                  Nagar, Madurai - 11
                </p>
                <p>
                  <WhatsappLogo /> : +91 95009 71427
                </p>
                <p>
                  <PhoneCall /> : +91 452 2672866
                </p>
                <p>
                  <PhoneCall /> : +91 452 2672899
                </p>
                <p>
                  <Envelope /> : yuvarajfireworksindustries@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
        >
          <div className="container locationCards">
            <div class="card locationCard">
              <h2 class="p-5">TVS Nagar</h2>
              <div class="card-body">
                <h5 class="card-title">Yuvraj Pyro Mart</h5>
                <p class="card-text ">
                  <MapPin /> Near Jaihindpuram market, Satya Sai Nagar, TVS
                  Nagar, Madurai-11
                  <br />
                  <br />
                  <PhoneCall /> +91 70101 78911
                  <br />
                  <PhoneCall />
                  +91 95009 71427
                </p>
              </div>
            </div>
            <div class="card locationCard">
              <h2 class="p-5">Airport road</h2>
              <div class="card-body">
                <h5 class="card-title">Yuvraj Pyro Mart</h5>
                <p class="card-text ">
                  <MapPin /> Avaniapuram Bypass road, Airport road, Madurai-12
                  <br />
                  <br />
                  <PhoneCall /> +91 78452 30171
                  <br />
                  <PhoneCall /> +91 95009 71427
                </p>
              </div>
            </div>
          </div>
          <div className="container locationCards">
            <div class="card locationCard">
              <h2 class="p-5">Thanichiyam Village</h2>
              <div class="card-body">
                <h5 class="card-title">Yuvraj Pyro Mart</h5>
                <p class="card-text ">
                  <MapPin /> Solavandan Road, 350/3, Nagari, Thanichiyam
                  Village, Madurai, Tamilnadu - 625221
                  <br />
                  <br />
                  <PhoneCall /> +91 95009 71427
                </p>
              </div>
            </div>
            <div class="card locationCard">
              <h2 class="p-5"> Virudhunagar</h2>
              <div class="card-body">
                <h5 class="card-title">Yuvraj Pyro Mart</h5>
                <p class="card-text ">
                  <MapPin /> Vakkanankundu Village, Kariyapatti Taluk,
                  Virudhunagar - 626106
                  <br />
                  <br />
                  <PhoneCall /> +91 95002 93920 <br />
                  <PhoneCall />
                  +91 95009 71427
                </p>
              </div>
            </div>
            <div class="card locationCard">
              <h2 class="p-5">Subramaniapuram</h2>
              <div class="card-body">
                <h5 class="card-title">Yuvraj Pyro Mart</h5>
                <p class="card-text ">
                  <MapPin /> N14, Subramaniapuram 2nd main road, Madurai-11
                  <br />
                  <br />
                  <PhoneCall /> +91 95002 93920 <br />
                  <PhoneCall />
                  +91 95009 71427
                </p>
              </div>
            </div>
          </div>
          <div
          class="text-center pt-5 w-100 "
        >Copyright <Copyright/> 2023, Yuvraj Fireworks  All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
