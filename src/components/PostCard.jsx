import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className='w-full h-full bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-indigo-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500/50 dark:hover:shadow-indigo-500/10'>
        <div className='w-full aspect-video overflow-hidden rounded-xl mb-3 sm:mb-4 bg-slate-100 dark:bg-slate-800'>
          <img
            src={featuredImage ? appwriteService.getFilePreview(featuredImage) : ''}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <h2 className='text-base sm:text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors dark:text-slate-100 dark:group-hover:text-indigo-400'>
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard