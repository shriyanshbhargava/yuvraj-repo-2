import React from "react";
import "./contact.css";
import { Envelope, MapPin, PhoneCall } from "phosphor-react";

export const Contact = () => {
  return (
    <div>
      <img
        className="shopBanner"
        src="https://yuvrajpyromart.com/images/contact.jpg"
        alt="../../assets/banners/mainPageBanner.jpg"
      />
      <div class="card-deck">
        <div class="card featuresDiv ">
          <div class="card-body text-right features alt ">
            <MapPin size={50} />
            <h5 class="card-title mt-3">Address</h5>
            <p class="card-text mt-3">
              Near Jaihindpuram market, Satya Sai Nagar, TVS Nagar, Madurai - 11
            </p>
          </div>
        </div>
        <div class="card featuresDiv">
          <div class="card-body features text-right">
            <PhoneCall size={50} />
            <h5 class="card-title mt-3">Phone</h5>
            <p class="card-text mt-3">+91 95009 71427</p>
          </div>
        </div>
        <div class="card featuresDiv">
          <div class="card-body text-right features alt">
            <Envelope size={50} />
            <h5 class="card-title mt-3">Email</h5>
            <p class="card-text mt-3">fireworksretailsales@gmail.com</p>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          color: "red",
          width: "100%",
          height: "500px",
          marginTop: "40px",
        }}
      >
        <div
          id="embed-map-canvas"
          
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: "0" }}
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Yuvraj+Fireworks+Shop+|+Yuvraj+Pyro+Mart+|Fireworks+Crackers+Shop+Near+you|+Factory+Outlet+Shop,+Jaihindpuram+Market+Road,+Satya+Sai+Nagar,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
