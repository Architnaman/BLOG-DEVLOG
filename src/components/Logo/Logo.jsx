// src/components/Logo/Logo.jsx
export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 select-none cursor-pointer ${className}`}>
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-indigo-500 shadow-md shadow-indigo-500/20">
        <svg
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-slate-100">
        DEV<span className="text-indigo-600 dark:text-indigo-500 font-black">LOG</span>
      </span>
    </div>
  );
}