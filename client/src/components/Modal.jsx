import React from 'react'
import {Link}from 'react-router-dom'
import { IoLogoGoogleplus } from "react-icons/io";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { LiaGithub } from "react-icons/lia";
import { useForm } from "react-hook-form"

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm() 
  
  const onSubmit = (data) => console.log(data)

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <div className="modal-action flex flex-col justify-center mt-0">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>

      {/* email */}
        <h3 className='font-bold text-lg'>please Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <  input defaultValue="test" type="email" placeholder="email" className="input input-bordered" required {...register("email")} />
        </div>

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  required {...register("password")} />
          <label className="label mt-2">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* login button */}
        <div className="form-control mt-6">
        <input
                type="submit"
                value="Login"
                className="btn bg-green text-white"
              />
        </div>
        <p className="text-center my-2">
              Donot have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>{" "}
            </p>

             <button 
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
      </form>

        {/* social sign in */}
      <div className='text-center space-x-3 mb-3'>
        <button className='btn btn-circle hover:bg-green hover:text-white'>
        <IoLogoGoogleplus />

        </button>
        <button className='btn btn-circle hover:bg-green hover:text-white'>
        <BiLogoFacebookCircle />

        </button>
        <button className='btn btn-circle hover:bg-green hover:text-white'>
        <LiaGithub />

        </button>
      </div>
    </div>
  </div>
</dialog>
  )
}

export default Modal