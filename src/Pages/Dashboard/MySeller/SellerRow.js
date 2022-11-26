import React from "react";

const SellerRow = ({user}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.image} alt="Product img" />
            </div>
          </div>
        </div>
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user?.verifyed}</td>
      <th>
        <button className="btn btn-warning btn-xs">Delete</button>
      </th>
      <th>
        <button className="btn btn-info btn-xs">Make Verified</button>
      </th>
    </tr>
  );
};

export default SellerRow;
