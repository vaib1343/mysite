import React from "react";
import "./Home.css";
import webs from "./image/headerimage.jpg";
import Common from "./component/Common";

const Home = () => {
  return (
    <>
      <Common
        text="Hi myself"
        buttn="About me"
        imag={webs}
        HomeText={true}
        link={"/mysite/about"}
      />
    </>
  );
};
export default Home;
