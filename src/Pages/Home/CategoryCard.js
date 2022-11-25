import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CategoryCard = ({category}) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={category.image} className='w-96 h-72' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
