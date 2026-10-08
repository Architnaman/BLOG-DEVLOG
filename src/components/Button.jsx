import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-indigo-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium ${bgColor} ${textColor} shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}