import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import ProductsRow from "./ProductsRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/my-products?email=${user.email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
      }
      })
      .then(res => res.json())
      .then(data=> {
        console.log(data)
        setProducts(data)
      })
  },[user.email])


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
                products?.map(product=> <ProductsRow key={product._id} product={product}></ProductsRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
