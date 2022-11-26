import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import ProductsRow from "./ProductsRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: products, isLoading } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/my-products?email=${user.email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
      }
      });
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <section>
      <h2 className="text-3xl font-bold">My Products</h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Advertised</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product=> <ProductsRow key={product._id} product={product}></ProductsRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
