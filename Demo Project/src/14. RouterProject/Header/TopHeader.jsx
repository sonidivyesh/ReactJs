import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function TopHeader() {
  const [currentOfferIndex, SetCurrentOfferIndex] = useState(0);
  const [ShowTopHeader, setShowTopHeader] = useState(true);

  const offers = [
    "Get 20% off on your first order!",
    "Get free delivery on order above ₹499/-",
    "Hurry up! Deal is about to end!",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCloseTopHeader = () => {
    setShowTopHeader(false);
  };

  return (
    <>
      <div className={`top-header bg-success ${ShowTopHeader ? "" : "remove"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="social-icons">
                <NavLink to={"https://www.instagram.com/"} target="_blank">
                  <Instagram />
                </NavLink>
                <NavLink to={"https://www.facebook.com/"} target="_blank">
                  <Facebook />
                </NavLink>
                <NavLink to={"https://www.youtube.com/"} target="_blank">
                  <Youtube />
                </NavLink>
                <NavLink to={"https://twitter.com/"} target="_blank">
                  <Twitter />
                </NavLink>
              </div>
            </div>
            <div className="col-md-8">
              <div className="offer-lines">
                {offers?.map?.((offer, index) => {
                  return (
                    <p
                      key={index}
                      className={index === currentOfferIndex ? "active" : ""}
                    >
                      {offer}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2 close-btn">
              <X type="button" onClick={handleCloseTopHeader} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
