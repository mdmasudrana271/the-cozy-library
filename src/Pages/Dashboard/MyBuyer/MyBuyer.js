import React, { useEffect, useState } from "react";
import BuyerRow from "./BuyerRow";

const MyBuyer = () => {

    const [buyers, setBuyers] = useState([])

    useEffect(()=>{
      fetch('http://localhost:5000/buyers',{
        headers: {
           authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
           },
      })
      .then(res=> res.json())
      .then(data=>{
        setBuyers(data)
      })
    },[])


  return (
    <section>
      <h2 className="text-3xl font-bold">My Buyers</h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Avater</th>
                <th>Name</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.length < 0 ? (
                "There is no seller"
              ) : (
                <>
                  {buyers?.map((user) => (
                    <BuyerRow key={user._id} user={user}></BuyerRow>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBuyer;
