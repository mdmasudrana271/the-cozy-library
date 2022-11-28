import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmModal/ConfirmationModal";


const MyProducts = () => {
  const { user } = useContext(AuthContext);
  // const [products, setProducts] = useState([])


  const [deleteProducts, setDeleteProducts] = useState(null)
    const closeModal = ()=>{
      setDeleteProducts(null)
  }


  const {data: products = [], isLoading, refetch} = useQuery({
    queryKey: ["doctors"],
  queryFn: async () => {
    const res = await fetch(`http://localhost:5000/my-products?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
      },
    });
    const data = res.json();
    return data;
  },
  })


    const handelAdvertise = (product)=>{
      fetch(`http://localhost:5000/advertise/${product._id}`,{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
          }
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.acknowledged){
            toast.success('Add Product Successfully')
          }
        })

      // console.log(product)
    }

    const handleDeleteProduct = (product)=>{
      fetch(`http://localhost:5000/my-products/${product._id}`,{
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
          },
          body: JSON.stringify(product)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.deletedCount > 0){
            toast.success('Product deleted successfully')
            refetch()
          }
        })
    }


   
 
    if(isLoading){
      return <Spinner></Spinner>
    }


  return (

    <section>


       {
          products?.length === 0 ? <p className="text-3xl mt-10 font-bold">You have no products</p> :
        

     <>
     
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
                products?.map(product=> 
                  
                  <tr key={product._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.image}
                              alt="Product img"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.name}</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {product.price}
                    </td>
                    <td>Purple</td>
                    <td>
                    <label
                  onClick={()=>setDeleteProducts(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-warning"
                  >
                    Delete
                  </label>
                    </td>
                    <td>
                      {
                        product.status === 'Sold' ? 'Product Sold' :
                        <>
                        {product.advertise === 'true' ? 'already in advertise' : <button onClick={()=> handelAdvertise(product)} className="btn btn-info btn-xs">Ads</button>}
                        </>
                      }
                    </td>
                  </tr>
                  
                  
                  )
              }
            </tbody>
          </table>
        </div>

      

        {
          deleteProducts && <ConfirmationModal
          title={`are you sure you want to delete`}
          message={`if you delete ${deleteProducts.name}. it can't be undone`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData = {deleteProducts}
          successButton= 'Delete'
          ></ConfirmationModal>
        }
      </div>
     
     </>

      }
    </section>
  );
};

export default MyProducts;
