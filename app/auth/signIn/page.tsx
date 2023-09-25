"use client";
import React, { useMemo, useState } from 'react'
import { SubmitHandler, useForm ,Controller} from 'react-hook-form'
import {BiImageAdd} from 'react-icons/bi'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';

type SigninForm = {
    email: string;
    password: string;
  };


function Signup() {
  const { register, handleSubmit,watch ,formState:{errors},control} = useForm<SigninForm>()
  const [isLoad , setIsLoad] = useState(false);
  const router = useRouter()


  const onSubmit: SubmitHandler<SigninForm> = async (data) => {
    setIsLoad(true);
    const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });
    if (result?.error) {
      setIsLoad(false);
      toast.error(result.error,{position:"top-center"});
    } else {
      router.push("/");
    }    
}


  return (
      <div className='container py-12 px-4'>
        <h3 className='text-center mb-12 text-[28px] font-[500]'>
            Login Into Your Account
          </h3>
          <form action="POST" onSubmit={handleSubmit(onSubmit)} className=' max-w-[600px] mx-auto'>
          <div className='flex flex-col mb-8'>
            <label className='text-[16px] block mb-3'>Email</label>
            <input {...register("email",{required:true})}
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-Primary focus:border-Primary block w-full px-2 py-1'/>
          {errors.email?.type==="required" && <p className='mt-2 text-[14px] text-red-600'>This Filed Is Required</p>}
          </div>
          <div className='flex flex-col mb-8'>
            <label className='text-[16px] block mb-3'>Password</label>
            <input {...register("password",{required:true,minLength:3, maxLength:12})}
            type="password"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-Primary focus:border-Primary block w-full px-2 py-1'/>
            {(errors.password?.type==="required" || errors.password?.type==="minLength"||errors.password?.type==="maxLength") && <p className='mt-2 text-[14px] text-red-600'>
              Password should be between 3 and 12 characters
              </p>
            }
          </div>
          <div className='mb-8'>
          </div>
          {
            isLoad?
            <button className='bg-main py-2 px-5 text-[white] rounded opacity-80'>....</button>
            :
            <button type="submit" className='bg-main py-2 px-5 text-[white] rounded hover:opacity-80 duration-300'>Signin</button>
          }
          </form>
      </div>
  )
}

export default Signup