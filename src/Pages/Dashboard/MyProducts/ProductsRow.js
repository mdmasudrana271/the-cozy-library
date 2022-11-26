import React from "react";
import toast from "react-hot-toast";

const ProductsRow = ({product}) => {
    // console.log(product)
    const {image, name, price} = product;

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

  return (
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
        <button className="btn btn-warning btn-xs">Delete</button>
      </td>
      <td>
        <button onClick={()=> handelAdvertise(product)} className="btn btn-info btn-xs">Ads</button>
      </td>
    </tr>
  );
};

export default ProductsRow;
