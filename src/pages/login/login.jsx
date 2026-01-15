import {  useState } from "react";
import "./login.css";

import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  
 const navigate = useNavigate() 

  function handleOnSubmit(e){
  e.preventDefault();
  console.log(email,password)

  axios.post("http://localhost:3000/api/users/login",
    {
        email:email,
        password : password
    }
).then ((res) =>{
    console.log(res)
    toast.success ("login success")
    const user = res.data.user
    localStorage.setItem("token",res.data.token)

    if (user.role ==="admin"){
        navigate("/admin/")
    }else{
        navigate("/")
    }


}).catch((err)=>{
    console.log(err)
    toast.error(err.response.data.error)
})


  }

   


  return (
    <div className="bg-picture w-full h-screen flex items-center justify-center px-4">


<form onSubmit={handleOnSubmit}>
      {/* Glass Card */}
      <div
        className="w-full max-w-[420px] min-h-[520px]
                   backdrop-blur-2xl bg-white/10
                   border border-white/20
                   rounded-3xl shadow-2xl
                   flex flex-col items-center px-8 py-10"
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[120px] h-[120px] object-contain mb-4"
        />

        {/* Title */}
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Welcome Back
        </h1>
        <p className="text-white/70 text-sm mt-1 mb-8">
          Login to your account
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-[45px] rounded-xl
                     bg-white/20 text-white placeholder-white/60
                     px-4 outline-none
                     focus:ring-2 focus:ring-red-500
                     transition"

                     value ={email}
                     onChange={(e)=>{
                                                //meken thmai email field eke details save update wenwa nm note wenne
                       setEmail(e.target.value)
                     }

                     }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full h-[45px] rounded-xl mt-4
                     bg-white/20 text-white placeholder-white/60
                     px-4 outline-none
                     focus:ring-2 focus:ring-red-500
                     transition"

                     value ={password}
                     onChange={(e)=>{

                        setPassword (e.target.value)

                     }
                    }
        />

        {/* Login Button */}
        <button
          className="w-full h-[45px] mt-8
                     bg-gradient-to-r from-red-500 to-pink-500
                     rounded-xl text-white font-semibold tracking-wide
                     hover:scale-[1.03] hover:shadow-lg
                     active:scale-95
                     transition-all duration-300"
        >
          Login
        </button>

        {/* Extra text */}
        <p className="text-white/70 text-sm mt-6 hover:text-white cursor-pointer">
          Forgot password?
        </p>
      </div>
      </form>
    </div>
  );
}
