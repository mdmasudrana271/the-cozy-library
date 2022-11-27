import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmModal/ConfirmationModal";

const ProductsRow = ({product}) => {
    // console.log(product)
    const {image, name, price} = product;
    const [deleteProducts, setDeleteProducts] = useState(null)
    const closeModal = ()=>{
      setDeleteProducts(null)
  }

    const handelAdvertise = (product)=>{
      fetch('http://localhost:5000/advertise',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('bookAccessToken')}`
          },
          body: JSON.stringify(product)
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
          // if(data.acknowledged){
          //   toast.success('Add Product Successfully')
          // }
          console.log(data)
        })
    }

  return (
   <section>
     <div>
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={image}
                    alt="Product img"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            {price}
          </td>
          <td>Purple</td>
          <td>
            <button onClick={()=> handleDeleteProduct(product)} className="btn btn-warning btn-xs">Delete</button>
          </td>
          <td>
            {
              product.status === 'available' ? <button onClick={()=> handelAdvertise(product)} className="btn btn-info btn-xs">Ads</button> : <p>Sold</p>
            }
          </td>
        </tr>
     </div>
        {
          deleteProducts && <ConfirmationModal
          title={`are you sure you want to delete`}
          message={`if you delete ${product.name}. it can't be undone`}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData = {deleteProducts}
          successButton= 'Delete'
          ></ConfirmationModal>
        }
      
   </section>
  );
};

export default ProductsRow;
