import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CustomersCard from "./CustomersCard";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-cozy-library-server.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="text-center text-3xl font-semibold">
      <h2>Our Happy Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 px-4 w-11/12 mx-auto">
        {customers.map((customer) => (
          <CustomersCard key={customer._id} customer={customer}></CustomersCard>
        ))}
      </div>
    </div>
  );
};

export default Customers;
