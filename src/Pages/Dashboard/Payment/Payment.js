import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const data = useLoaderData();
  console.log(stripePromise , 'hello');

  return (
    <section>
      <h2 className="text-3xl font-bold">Payment</h2>
      <p className="mt-10 text-2xl">Please payment <strong>{data.price}</strong> for <strong>{data.product}</strong></p>
      <div className="w-96 my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={data}/>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
