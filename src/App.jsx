import { useState , useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import conf from './conf/conf'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { login , logout } from './store/authSlice'
import { Header, Footer ,Logo } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  // Loading Screen (Enterprise Theme)
  if (loading) {
    return (
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 px-4 transition-colors duration-200">
        <div className="relative z-10 flex flex-col items-center p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none max-w-sm w-full mx-auto transition-colors duration-200">
          <div className="mb-6">
            <Logo />
          </div>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-2 border-slate-100 dark:border-slate-800" />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-600 dark:border-indigo-500 border-t-transparent animate-spin" />
          </div>
          <p className="mt-4 text-xs sm:text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Synchronizing workspace...
          </p>
        </div>
      </div>
    )
  }
  // Main App Shell (Enterprise Theme)
return (
  <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-indigo-600 selection:text-white dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-indigo-500 dark:selection:text-white transition-colors duration-200">
    <Header />

    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="w-full h-full min-h-[65vh] rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-none transition-colors duration-200">
        <Outlet />
      </div>
    </main>

    <footer className="w-full border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Logo />
        <Footer />
      </div>
    </footer>
  </div>
)
}
export default App