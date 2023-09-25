import React from "react";
import book from "../../Book.json";
import Lottie from "lottie-react";

const UseBookSection = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <figure className="h-80 md:w-80">
          <Lottie
            animationData={book}
            loop={true}
          />
          </figure>
          <div className="lg:w-1/2">
            <h1 className="text-xl  md:text-5xl font-bold">Used book are sold here</h1>
            <p className="py-6 text-sm sm:text-xl">
              THE COZY LIBRARY is now one of the leading e-commerce
              organizations in Bangladesh. It is indeed the biggest online
              bookshop or bookstore in Bangladesh that helps you save time and
              money. You can buy books online with a few clicks or a convenient
              phone call. With breathtaking discounts and offers you can buy
              anything from Bangla Upannash or English story books to academic,
              research or competitive exam books. Superfast cash on delivery
              service brings the products at your doorstep. Our customer
              support, return and replacement policies will surely add extra
              confidence in your online shopping experience. Happy Shopping with
              THE COZY LIBRARY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseBookSection;
