import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import BookingModal from "../Products/BookingModal";
import AdvertisementCard from "./AdvertisementCard";

const Advertisement = () => {
  const [booking, setBooking] = useState(null);
  const { data: products, isLoading } = useQuery({
    queryKey: ["ads-products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/ads-products", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log(products)

  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase ">
          
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
          Choose your best Book
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            products.map(product=> <AdvertisementCard key={product._id} product={product} setBooking={setBooking}></AdvertisementCard>)
          }
          
        </div>
      </div>
      {booking && (
        <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
      )}
    </section>
  );
};

export default Advertisement;