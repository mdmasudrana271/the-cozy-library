import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { register,  formState: { errors },  handleSubmit,  reset,} = useForm();

  const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY;
  const [passwordType, setPasswordType] = useState("password");
  const googleProvider = new GoogleAuthProvider();
  const { googleLogin, createUser, updateUserProfile } =
    useContext(AuthContext);

  // toggle password type on input field

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };

  // signup with email and password
  if(token){
    navigate('/');
}

  const handleSignup = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const createdUser = {
            name: data.name,
            email: data.email,
            role: data.type,
            image: imgData.data.url,
          };
          setSignUPError('');
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              console.log(user)
              toast.success("Create User Successfull");
              const userInfo = {
                displayName: createdUser.name,
                photoURL: createdUser.image,
              };
              setCreatedUserEmail(createUser.email);
              updateUserProfile(userInfo)
              .then(()=>{
                saveUser(createdUser);
              })
              .catch(error=> console.log(error))
              reset();
            })
            .catch((error) => {
              console.log(error.message);
              setSignUPError(error.message)
            });
        }
      });
  };

  // login with google

  const handleGoogleLogin = () => {
    googleLogin(googleProvider).then((result) => {
      const user = result.user;
      // console.log(user);
      const createdUser = {
        name: user.displayName,
        email: user.email,
        role: "Buyer",
        image: user.photoURL,
      };
      setCreatedUserEmail(createUser.email);
      saveUser(createdUser);
    });
  };

  // post user information on database

  const saveUser = (createdUser) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  };

  return (
    <div className="flex justify-center items-center h-[700px] md:w-96 sm:w-9/12 mx-auto">
      <div>
        <h1 className="text-4xl text-center font-bold">Register</h1>
        <form className="mt-6 w-96" onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-1/2 md:w-full"
            />
            {errors.name && (
              <p role="alert" className="text-error">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p role="alert" className="text-error">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Account Type</span>
            </label>
            <select
              {...register("type", { required: "Account type is required" })}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Please Select Account Type
              </option>
              <option>Buyer</option>
              <option>Seller</option>
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
            {errors.img && (
              <p role="alert" className="text-error">
                {errors.img?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              S
              type={passwordType}
              placeholder="******"
              className="input input-bordered w-full"
            />
            {passwordType === "password" ? (
              <FaEye
                onClick={handlePasswordType}
                className="relative bottom-7 left-[360px] cursor-pointer"
              ></FaEye>
            ) : (
              <FaEyeSlash
                onClick={handlePasswordType}
                className="relative bottom-7 left-[360px] cursor-pointer"
              ></FaEyeSlash>
            )}
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-info w-full mt-5 text-xl font-bold"
            value="Signup"
            type="submit"
          />
          <p className="mt-3 text-center">
            Already have an account ?{" "}
            <Link className="text-blue-700" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-info w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
