import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
function Footer() {
   return (
    <footer className="w-full bg-white border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand & Description Column (Spans 2 columns on large screens) */}
          <div className="col-span-2 flex flex-col justify-between pr-0 lg:pr-8">
            <div className="space-y-4">
              <Link to="/" className="inline-block">
              </Link>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
                A modern publishing platform built for developers and creators to share ideas, knowledge, and stories.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 lg:border-none lg:pt-0">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} MegaBlog. All rights reserved.
              </p>
            </div>
          </div>
          {/* Column 1: Company */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 2: Support */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Legals */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
