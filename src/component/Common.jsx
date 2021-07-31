import React from "react";
import "./Common.css";
import webs from "../image/headerimage.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.text}
                    <br />
                    {props.HomeText && (
                      <strong className="brand_name"> Vaibhav.. </strong>
                    )}
                    {props.AboutText && (
                      <strong className="brand_name"> ABOUT ME </strong>
                    )}
                  </h1>
                  {props.HomeText && (
                    <h2 className="my-3">a Software Developer</h2>
                  )}
                  {props.AboutText && (
                    <h2 className="my-3">
                      Highly motivated and self taught junior software developer
                      , I have been working on some latest technology like React
                      JS , Node JS, Redux. Being curious and enthusiastic I like
                      to resolve the problems by implementing my tech knowledge.
                    </h2>
                  )}
                  <div className="mt-3">
                    <a href={props.link} className="btn-get-started">
                      {props.buttn}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imag}
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
export default Common;
