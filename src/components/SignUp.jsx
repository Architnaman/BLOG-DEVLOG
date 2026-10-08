import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Logo from './Logo/Logo'
import Input from './Input'
import Button from './Button'
import { login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
function SignUp() {
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const {register,handleSubmit, formState: { errors }} = useForm()
    const dispatch = useDispatch()
    const signup = async(data) =>{
        setError("")
        try{
            const user = await authService.createAccount(data)
            if(user){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/login")
            }
        }catch(error){
            setError(error.message)
            console.log("SignUp.jsx error : ",error)
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
                    Sign up to your account
                </h2>
                <p className='mt-2 text-center text-sm text-slate-500 dark:text-slate-400'>
                    have an account?{' '}
                    <Link
                        to='/login'
                        className='font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-colors dark:text-indigo-400 dark:hover:text-indigo-300'
                    >
                        login
                    </Link>
                </p>

                {/* Error message */}
                {error && (
                    <p className='mt-6 text-center text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-lg py-2 px-3 dark:bg-red-950/50 dark:border-red-900/50 dark:text-red-400'>
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(signup , (errors) => console.log("validation errors:", errors))} className='mt-8 space-y-5'>
                    <Input label = "Name : " type = "text" placeholder="Enter your name" {...register("name" , {
                        required : true,
                    })}/>
                    <Input label = "Email : " type = "email" placeholder = "Enter your email" {...register("email",
                        {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        }
                    )}/>
                    <Input label = "Password : " type = "password" placeholder="Enter your password" {...register("password" , {
                        required : true,
                        validate : {
                           matchPattern: (value) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value) ||
                                                    "Password must be at least 8 characters and contain a letter and a number",
                        }
                    })}/>
                    <Button type = "submit" className="w-full">SIGN-UP</Button>
                </form>

            </div>
        </div>
    )
}

export default SignUp
