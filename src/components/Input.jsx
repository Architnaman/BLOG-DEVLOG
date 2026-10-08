import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
} , ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label
                    className='block mb-1.5 pl-0.5 text-sm font-medium text-slate-600 dark:text-slate-300'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                ref={ref}
                className={`w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-slate-200 bg-white text-sm sm:text-base text-slate-800 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20 ${className}`}
                {...props}
            />
        </div>
    )
})

export default Input