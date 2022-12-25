import React from "react";
import Contact from "../Contact/Contact";
import Advertisement from "./Advertisement";
import Authors from "./Authors";
import Banner from "./Banner";
import Category from "./Category";
import Customers from "./Customers";
import Delivery from "./Delivery";
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
      <div>
        <Customers></Customers>
      </div>
      <div className="my-8 text-center text-3xl font-semibold">
        <h2 className="mb-5">Delivery Service</h2>
        <Delivery></Delivery>
      </div>
      <div className="my-8 text-start text-3xl font-semibold w-11/12 mx-auto">
        <h2 className="mb-5">Weekly Popular Authors</h2>
        <Authors></Authors>
      </div>
      <div className="mt-10">
        <UseBookSection></UseBookSection>
      </div>
      <div className="my-10">
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;
