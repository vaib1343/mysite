import React from "react";
import Common from "./component/Common";
import webs from "./image/aboutimage.jpg";

const About = () => {
  return (
    <>
      <Common
        AboutText={true}
        buttn="Contact Now"
        imag={webs}
        link="/mysite/contact"
      />
    </>
  );
};
export default About;
