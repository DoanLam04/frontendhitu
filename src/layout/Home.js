import React from "react";
import ProductHome from "../pages/ProductHome";
import Banner from "./Banner,";
import Introduce from "./Introduce";
import News from "../pages/News";

function Home() {
  return (
    <div>
      <div className="pt-32">
        <Banner />
      </div>

      <div>
        <Introduce />
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}

export default Home;
