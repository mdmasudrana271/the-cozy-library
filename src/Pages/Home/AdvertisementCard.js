import React from "react";

const AdvertisementCard = ({ product, setBooking }) => {
  return (
    <div data-aos="flip-left" className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full md:h-64 h-full" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-xl text-orange-500">price: {product.price}</p>
        <p className="text-lg">
          price: <span className="line-through">{product.oldPrice}</span>
        </p>
        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            onClick={() => setBooking(product)}
            className="badge badge-outline cursor-pointer"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
