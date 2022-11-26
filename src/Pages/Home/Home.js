import React from "react";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <section>
      <div>
          <Banner></Banner>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5">Best Second Hand Book For You</h2>
        <Advertisement></Advertisement>
      </div>
      <div>
        <Category></Category>
      </div>
    </section>
  );
};

export default Home;
