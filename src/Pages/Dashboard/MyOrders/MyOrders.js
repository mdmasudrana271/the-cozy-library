import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const MyOrders = () => {

  const {user} = useContext(AuthContext)

  const {data: products = [], isLoading} = useQuery({
    queryKey: ['/my-orders'],
    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/my-orders?email=${user.email}`,{
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
        },
      })
      const data = res.json()
      return data
    }
  })

  if(isLoading){
    return <Spinner></Spinner>
  }


  return (
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
                {products.map((product) => (
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
  );
};

export default MyOrders;
