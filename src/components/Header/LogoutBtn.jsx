import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
        .catch((error) =>{
            console.log("logoutHandle error : ",error)
        })
    }
  return (
    <button
  onClick={logoutHandler}
  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 active:scale-95 transition-all duration-200 cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-rose-950/30 dark:hover:text-rose-400 dark:hover:border-rose-900/50"
>
  <svg
    className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
  Logout
</button>
  )
}

export default LogoutBtn
