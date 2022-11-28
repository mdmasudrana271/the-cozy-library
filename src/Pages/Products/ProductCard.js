import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaClock } from 'react-icons/fa';

const ProductCard = ({product, setBooking}) => {
    const {name, image, condition, oldPrice, price, location, sellerName, time, year, status} = product;

    const [userStatus, setUserStatus] = useState({})
    useEffect(()=>{
      
       axios.get(`http://localhost:5000/user-status?name=${sellerName}`,{
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
          },
        })
        .then(res=> setUserStatus(res.data))
        .catch(error=> console.log(error))

    },[sellerName])



    const handleReportProduct = (product) =>{

       fetch('http://localhost:5000/report-product',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
        },
        body: JSON.stringify(product)
       })
       .then(res => res.json())
       .then(data => {
        if(data.acknowledged){
          toast.success('Product Reported Successfully!')
        }
       })

    }




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
              { userStatus.verified === 'true' ?
                <div className="text-xs text-center indicator badge badge-info">✔</div>
                 : ''
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
        <p className="text-warning font-bold">{status === 'Sold' && 'Sold'}</p>
        </div>
        <div className="card-actions justify-end">
          {

            status === 'Sold' ? ''  : 
            <>
            
            <div onClick={()=>handleReportProduct(product)} className="badge badge-outline cursor-pointer">Report Product</div>
            <label  htmlFor="booking-modal" onClick={()=> setBooking(product)} className="badge badge-outline cursor-pointer">Book Now</label>
            </>


          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
