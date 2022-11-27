import React from "react";

const OrdersRow = ({product}) => {
  return (
    <tr>
      <td>
      {product.product}
      </td>
      <td>{product.price}</td>
      <td>{product.location}</td>
      <th>
        <button className="btn btn-warning btn-xs">Pay</button>
      </th>
    </tr>
  );
};

export default OrdersRow;
