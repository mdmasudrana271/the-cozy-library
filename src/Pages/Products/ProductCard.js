import React from "react";

const ProductCard = ({product}) => {
    const {name, image, condition, oldPrice, price, location, sellerName, time, year} = product
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} className='h-80 rounded' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {name}
        </h2>
          <div className="badge badge-info">Seller Name: {sellerName}</div>
        <div className="md:flex justify-center items-center">
            <p className="text-lg">Original Price: <span className="line-through">{oldPrice}</span></p>
            <p className="text-lg font-bold">Resale Price: <span>{price}</span></p>
        </div>
        <p>Location: {location}</p>
        <div className="md:flex justify-between items-center">
        <p>Use: {year} years</p>
        <p>Condition: {condition}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline cursor-pointer">Add WishList</div>
          <div className="badge badge-outline cursor-pointer">Book Now</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
