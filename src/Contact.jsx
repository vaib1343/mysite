import React from "react";
import webs from "./image/contactimage.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="main_icon">
                    <div className="icon">
                      <a href="https://www.facebook.com/imvaib/">
                        <i class="fa fa-facebook-square" aria-hidden="true" target=" blank"></i>
                        <label> /vaibhavvarshney</label>
                      </a>
                    </div>
                    <div className="icon">
                      <a href="https://www.instagram.com/noob.hav/" target=" blank">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <label> /Noob.hav</label>
                      </a>
                    </div>
                    <div className="icon">
                      <a href="https://github.com/vaib1343" target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <label> /vaib1343</label>
                      </a>
                    </div>
                    <div className="icon">
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlGTfJwwVkMjlMFfdJGgVZSqfklTZnbSNMSccPQZjRGhWVFcVHhtBQsWQccqvxtCHzfhJB"
                        target="_blank"
                      >
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <label> /vaib1343@gmail.com</label>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={webs}
                    className="img-fluid animated"
                    alt="home ing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
