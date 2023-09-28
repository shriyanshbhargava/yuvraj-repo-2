import React from "react";
import "./home.css";
import {
  Heart,
  MagicWand,
  MapPin,
  PhoneCall,
  PuzzlePiece,
  TagSimple,
} from "phosphor-react";

const Home = () => {
  return (
    <div>
      <img
        className="shopBanner"
        src="https://yuvrajpyromart.com/images/about.jpg"
        alt="../../assets/banners/mainPageBanner.jpg"
      />

      <div class="row">
        <div class="wrapper pt-4 pb-4 ">
          <div class="icon">
            <img
              width={700}
              src="https://yuvrajpyromart.com/images/yuvrajshowroom.jpg"
              alt="../../assets/banners/mainPageBanner.jpg"
            />
          </div>
          <div class="content">
            <h4 className="logoName">We Yuvraj </h4>
            <p>
              We leading for more than 25 years now celebrating Silver Jubilee.
              <br />
              <br />
              We Sincerely working harder for development of Industry and Trade.
              <br />
              <br />
              We being prime performer in market, strive for Excellence of
              products.
              <br />
              <br />
              Treasure our consumers value and satisfaction. We Salute our
              Tradition and Festivals for making humanity and celebrate.
            </p>
          </div>
        </div>
        <div className="showRooms pt-4 pb-4">
          <h1 className="logoName text-center p-3">Our Showrooms</h1>

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
        </div>
        <div class="card-deck">
          <div class="card featuresDiv">
            <div class="card-body features text-right">
              <PuzzlePiece size={50} />
              <h5 class="card-title mt-3">Quality</h5>
              <p class="card-text mt-3">
                Quality & innovation are the key behind our success
              </p>
            </div>
          </div>
          <div class="card featuresDiv">
            <div class="card-body text-right features alt">
              <MagicWand size={50} />
              <h5 class="card-title mt-3">Safe to Use</h5>
              <p class="card-text mt-3">
                Crackers we offer are safe and made from fine quality materials
              </p>
            </div>
          </div>
          <div class="card featuresDiv">
            <div class="card-body features text-right">
              <TagSimple size={50} />
              <h5 class="card-title mt-3">Genuine Price</h5>
              <p class="card-text mt-3">
                Quality products at economic price is the main motto for us
              </p>
            </div>
          </div>
          <div class="card featuresDiv">
            <div class="card-body text-right features alt">
              <Heart size={50} />
              <h5 class="card-title mt-3">Satisfaction</h5>
              <p class="card-text mt-3">
                Our quality and timely delivery has attracted customers easily
              </p>
            </div>
          </div>
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
      <div className="tradeMarks">
        <h1 className="logoName text-center p-3 mt-5">
          OUR REGISTERED TRADEMARK
        </h1>
        <div class="d-flex justify-content-center align-items-center w-100 mb-5">
          <img
            src="https://yuvrajpyromart.com/images/trademark1.jpg"
            class="img-fluid mx-auto d-block"
            alt="Yuvraj Fireworks"
            title="Yuvraj Fireworks"
          />
          <img
            src="https://yuvrajpyromart.com/images/trademark2.jpg"
            class="img-fluid mx-auto d-block"
            alt="Yuvraj Fireworks"
            title="Yuvraj Fireworks"
          />
          <img
            src="https://yuvrajpyromart.com/images/trademark3.jpg"
            class="img-fluid mx-auto d-block"
            alt="Yuvraj Fireworks"
            title="Yuvraj Fireworks"
          />
          <img
            src="https://yuvrajpyromart.com/images/trademark4.jpg"
            class="img-fluid mx-auto d-block"
            alt="Yuvraj Fireworks"
            title="Yuvraj Fireworks"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
