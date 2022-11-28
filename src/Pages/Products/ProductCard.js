import React from "react";
import { FaClock } from 'react-icons/fa';

const ProductCard = ({product, setBooking}) => {
    const {name, image, condition, oldPrice, price, location, sellerName, time, year, status} = product;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} className='h-80 rounded' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {name}
        </h2>
          <div className="md:flex justify-between items-center font-bold">
            <div className="flex justify-center items-center gap-1">
              <p>Seller : {sellerName}</p>
              { sellerName.verified === true ?
                <div className="badge badge-lg badge-info">✔</div> : ''
              }
            </div>
            <div className="flex justify-center items-center gap-1">
              <p><FaClock></FaClock></p>
              <p>{time.hour}:{time.minutes} {time?.hour > 12 ? 'PM' :'AM' }</p>
            </div>
          </div>
        <div className="md:flex justify-center items-center">
            <p className="text-lg">Original Price: <span className="line-through">{oldPrice}</span></p>
            <p className="text-lg font-bold text-amber-500">Resale Price: <span>{price}</span></p>
        </div>
        <p>Location: {location}</p>
        <div className="md:flex justify-between items-center">
        <p>Use: {year} years</p>
        <p>Condition: {condition}</p>
        <p className="text-info font-bold">{status}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline cursor-pointer">Add WishList</div>
          <label htmlFor="booking-modal" onClick={()=> setBooking(product)} className="badge badge-outline cursor-pointer">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
