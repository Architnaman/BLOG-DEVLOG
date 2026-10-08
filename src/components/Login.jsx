import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login as authLogin} from '../store/authSlice'
import {Logo , Input} from './index' 
import { authSlice } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import Button from './Button'
import { useDispatch } from 'react-redux'
function Login() {
    const navlink = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error , setError] = useState("")
const login = async(data) =>{
        setError("")
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navlink("/")
            }
        }catch(error){
            setError(error.message)
        }
    }
  return (
        <div className='flex items-center justify-center w-full py-8 px-4 sm:py-12'>
            <div className='w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none'>

                {/* Logo */}
                <div className='mb-6 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo/>
                    </span>
                </div>

                {/* Heading */}
                <h2 className='text-center text-xl sm:text-2xl font-bold text-slate-800 leading-tight dark:text-slate-100'>
                    Sign in to your account
                </h2>
                <p className='mt-2 text-center text-sm text-slate-500 dark:text-slate-400'>
                    Don&apos;t have an account?{' '}
                    <Link
                        to='/signup'
                        className='font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-colors dark:text-indigo-400 dark:hover:text-indigo-300'
                    >
                        Sign Up
                    </Link>
                </p>

                {/* Error message */}
                {error && (
                    <p className='mt-6 text-center text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-lg py-2 px-3 dark:bg-red-950/50 dark:border-red-900/50 dark:text-red-400'>
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(login)} className='mt-8 space-y-5'>
                    <Input label = "Email : " type = "email" placholder = "Enter your email" {...register("email",
                        {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        }
                    )}/>
                    <Input label = "Password : " type = "password" placholder="Enter your password" {...register("password" , {
                        required : true,
                    })}/>
                    <Button type = "submit" className="w-full">LOGIN</Button>
                </form>

            </div>
        </div>
    )
}
export default Login
