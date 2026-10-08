import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
} , ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && (
            <label htmlFor={id} className='block mb-1.5 pl-0.5 text-sm font-medium text-slate-600 dark:text-slate-300'>
                {label}
            </label>
        )}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border border-slate-200 bg-white text-sm sm:text-base text-slate-800 outline-none transition-colors duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 cursor-pointer dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20 ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option} className="dark:bg-slate-800 dark:text-slate-100">
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)