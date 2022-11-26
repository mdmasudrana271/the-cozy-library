import React from "react";

const ProductsRow = ({product}) => {
    console.log(product)
    const {image, name, price} = product;
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
      <th>
        <button className="btn btn-warning btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default ProductsRow;
