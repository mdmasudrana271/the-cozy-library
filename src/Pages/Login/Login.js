import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { register, formState: {errors}, handleSubmit, reset } = useForm();
  const {signInWithEmailPassword, googleLogin, resetPassword} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState('')
  const [userLoginEmail, setUserLoginEmail] = useState('')
  const [token] = useToken(userLoginEmail)

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, {replace: true})
  }

  // toggle password type text to password and toggle eye button 
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };


  const handleLogin = data => {
    signInWithEmailPassword(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
      toast.success('Login successfull')
      setUserLoginEmail(data.email)
      // navigate(from, {replace: true})
      // reset()
    })
    .catch(error=> {
      console.log(error.message)
    })
    console.log(data)
  }

  const handleGoogleLogin = ()=>{
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      // console.log(user)
      const createdUser = {
        name: user.displayName,
        email: user.email,
        role: 'Buyer',
        image: user.photoURL,
      };
      setUserLoginEmail(createdUser.email)
     saveUser(createdUser)
    })
  }

  const handleResetPassword = (email) =>{
    console.log(email)
    resetPassword(email)
    toast.success('Password reset email was send please check your email')
  }



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
        if (data.acknowledged) {
          
        }
      });
  }; 

  return (
    <div className="flex justify-center items-center h-[700px] md:w-96 sm:w-9/12 mx-auto">
      <div>
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <form
          className="mt-6 w-96"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              onChange={(e)=> setEmail(e.target.value)}
            />
            {errors.email && (
              <p role="alert" className="text-error">
                {errors.email?.message}
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
                }
              })}
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
            <label className="label">
              <span onClick={()=> handleResetPassword(email)} className="label-text text-blue-700 cursor-pointer">Forgot Password ?</span>
            </label>
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <input className="btn btn-info w-full mt-5 text-xl font-bold" value='Login' type="submit" />
          <p className="mt-3 text-center">
            New to the cozy library ?{" "}
            <Link className="text-blue-700" to="/signup">
              Signup
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-info w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
