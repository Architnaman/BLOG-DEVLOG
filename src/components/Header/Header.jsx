import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoutBtn from './LogoutBtn'
import Container from '../container/container'
import Logo from '../Logo/Logo'
import { changeTheme } from '../../store/ThemeChanger'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const authStatus = useSelector((state) => state.auth.status)
  const user = useSelector((state) => state.auth.userData)
  const theme = useSelector((state) => state.theme.theme)

  // Keep the <html> "dark" class in sync with the Redux theme
  useEffect(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const navItems = [
    { name: 'Home', url: '/', active: true },
    { name: 'Login', url: '/login', active: !authStatus },
    { name: 'Signup', url: '/signup', active: !authStatus },
    { name: 'All Posts', url: '/all-posts', active: authStatus },
    { name: 'Add Post', url: '/add-post', active: authStatus },
  ]

  const navBtnClass =
    'px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-slate-800/50'

  const themeLabel = theme === 'light' ? '🌙 Dark' : '☀️ Light'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 transition-colors duration-200">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.url)} className={navBtnClass}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Theme toggle */}
            <li>
              <button onClick={() => dispatch(changeTheme())} className={navBtnClass}>
                {themeLabel}
              </button>
            </li>

            {authStatus && (
              <li className="flex items-center gap-3 pl-3 ml-1 border-l border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium text-slate-600 whitespace-nowrap max-w-[140px] truncate dark:text-slate-300">
                  Hi, {user?.name}
                </span>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 pb-4 dark:border-slate-800 transition-colors duration-200">
            <ul className="flex flex-col gap-1 pt-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.url)
                        setMenuOpen(false)
                      }}
                      className={`w-full text-left ${navBtnClass}`}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {/* Theme toggle (mobile) */}
              <li>
                <button
                  onClick={() => dispatch(changeTheme())}
                  className={`w-full text-left ${navBtnClass}`}
                >
                  {themeLabel}
                </button>
              </li>

              {authStatus && (
                <li className="px-3 pt-3 mt-2 border-t border-slate-200 flex items-center justify-between dark:border-slate-800 transition-colors duration-200">
                  <span className="text-sm font-medium text-slate-600 truncate max-w-[60%] dark:text-slate-300">
                    Hi, {user?.name}
                  </span>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header