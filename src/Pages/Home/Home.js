import React from "react";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <section>
      <div>
          <Banner></Banner>
      </div>
      <div>
        <Category></Category>
      </div>
    </section>
  );
};

export default Home;
