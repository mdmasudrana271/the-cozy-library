import React from "react";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Category from "./Category";
import UseBookSection from "./UseBookSection";

const Home = () => {
  return (
    <section>
      <div>
          <Banner></Banner>
      </div>
      <div className="my-10">
        <Advertisement></Advertisement>
      </div>
      <div>
        <Category></Category>
      </div>
      <div className="mt-10">
        <UseBookSection></UseBookSection>
      </div>
    </section>
  );
};

export default Home;
