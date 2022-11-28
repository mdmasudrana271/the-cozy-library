import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { register,  formState: { errors },  handleSubmit,  } = useForm();
  const {time, user, isLoading} = useContext(AuthContext)

  const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY
  const navigate = useNavigate()

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      if(imgData.success){
        const product = {
          name: data.product,
          oldPrice: data.oldPrice,
          condition: data.condition,
          image: imgData.data.url,
          number: data.number,
          price:data.price,
          location: data.location,
          description: data.description,
          year: data.year,
          sellerName: user.displayName,
          time: time,
          category:data.category,
          email: user.email,
          advertise: false,
          status: 'available'
        }

        fetch('https://the-cozy-library-server.vercel.app/products',{
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
            navigate('/dashboard/my-products')
          }
        })

      }

    })

  };


  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div className="w-96 p-7">
      <h1 className="text-3xl font-bold">Add A Product</h1>
      <form className="mt-6 w-96" onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("product", { required: "Product name is required" })}
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full"
          />
          {errors.product && (
            <p role="alert" className="text-error">
              {errors.product?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Old Price</span>
          </label>
          <input
            {...register("oldPrice", { required: "Old price is required" })}
            type="text"
            placeholder='$'
            className="input input-bordered w-full"
          />
          {errors.oldPrice && (
            <p role="alert" className="text-error">
              {errors.oldPrice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <select 
          {...register("condition", { required: "Condition is required" })}
           className="select select-bordered w-full"
           >
            <option disabled selected>Please Select Condition</option>
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
            
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select 
          {...register("category", { required: "Category is required" })}
           className="select select-bordered w-full"
           >
            <option disabled selected>Select Category</option>
            <option>Science & Technology</option>
            <option>Fiction & Literature</option>
            <option>Lifestyle</option>
            
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", { required: "image is required" })}
            type="file"
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p role="alert" className="text-error">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            {...register("number", { required: "Number is required" })}
            type="text"
            className="input input-bordered w-full"
            defaultValue='+88'
          />
          {errors.number && (
            <p role="alert" className="text-error">
              {errors.number?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", { required: "Price is required" })}
            type="text"
           placeholder='$'
            className="input input-bordered w-full"
          />
          {errors.price && (
            <p role="alert" className="text-error">
              {errors.price?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location", { required: "Location is required" })}
            type="text"
            placeholder="Location"
            className="input input-bordered w-full"
          />
          {errors.location && (
            <p role="alert" className="text-error">
              {errors.location?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", { required: "description is required" })}
            type="text"
            className="input input-bordered w-full textarea"
          />
          {errors.description && (
            <p role="alert" className="text-error">
              {errors.description?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Year Of Use</span>
          </label>
          <input
            {...register("year", { required: "Year of purchase is required" })}
            type="text"
            placeholder="Year Of Use"
            className="input input-bordered w-full"
          />
          {errors.year && (
            <p role="alert" className="text-error">
              {errors.year?.message}
            </p>
          )}
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
