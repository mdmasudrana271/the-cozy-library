import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://the-cozy-library-server.vercel.app/my-orders?email=${user.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user.email]);

  return (
    <div>
      {products.length === 0 ? (
        <p className="text-3xl mx-20 mt-5">You have no orders</p>
      ) : (
        <section>
          <section>
            <h2 className="text-3xl font-bold">My Orders</h2>
            <div className="my-5">
              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Meeting Location</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product) => (
                      <OrdersRow
                        key={product._id}
                        product={product}
                      ></OrdersRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default MyOrders;

//
