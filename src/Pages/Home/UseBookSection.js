import React from "react";
import book from "../../assets/image/book3.jpg";

const UseBookSection = () => {
  return (
    <section>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={book} className="w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Used book are sold here</h1>
            <p className="py-6">
              THE COZY LIBRARY is now one of the leading e-commerce organizations in
              Bangladesh. It is indeed the biggest online bookshop or bookstore
              in Bangladesh that helps you save time and money. You can buy
              books online with a few clicks or a convenient phone call. With
              breathtaking discounts and offers you can buy anything from Bangla
              Upannash or English story books to academic, research or
              competitive exam books. Superfast cash on delivery service brings
              the products at your doorstep. Our customer support, return and
              replacement policies will surely add extra confidence in your
              online shopping experience. Happy Shopping with THE COZY LIBRARY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseBookSection;
