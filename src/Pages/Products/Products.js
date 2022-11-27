import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductCard from "./ProductCard";

const Products = () => {
  const data = useLoaderData();
  const [booking, setBooking] = useState(null);
  return (
    <section>
      {
        data.length < 0 ?
        <p className="text-center text-2xl font-bold h-96 mt-20">No Product in this category</p> : 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} setBooking={setBooking}></ProductCard>
        ))}
      </div>
      }


      {booking && (
        <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
      )}
    </section>
  );
};

export default Products;
