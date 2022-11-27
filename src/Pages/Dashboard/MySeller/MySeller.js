import React, { useEffect, useState } from "react";
import SellerRow from "./SellerRow";

const MySeller = () => {

  const [seller, setSeller] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/seller',{
      headers: {
         authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
         },
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      setSeller(data)
    })
  },[])

  return (
    <section>
      <h2 className="text-3xl font-bold">My Seller</h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Avater</th>
                <th>Name</th>
                <th>email</th>
                <th>Status</th>
                <th>Action</th>
                <th>Advertised</th>
              </tr>
            </thead>
            <tbody>
            {
              seller?.map(user=> <SellerRow key={user._id} user={user}></SellerRow>)
            }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MySeller;
