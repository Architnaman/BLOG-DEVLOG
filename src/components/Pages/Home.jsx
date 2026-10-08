import React from 'react'
import appwriteService from '../../appwrite/config'
import { useState  , useEffect} from 'react'
import Container from '../container/container'
import { Link } from 'react-router-dom'
import PostCard from '../Postcard'
import { useSelector } from 'react-redux'
function Home() {
    const [post , setPost] = useState([])
    const status = useSelector(state => state.auth.status)
    const userData = useSelector(state => state.auth.userData)
    useEffect(() => {
        appwriteService.listPost().then((post) => {
            if(post){
                setPost(post.documents || [])
            }
        })
    },[])
    const myPosts = post && userData ?  post.filter((post) => post.userId === userData.$id) : []
if(status == false){
    return (
            <div className='w-full py-16 sm:py-24'>
                <Container>
                    <div className='flex flex-col items-center justify-center text-center max-w-md mx-auto'>
                        <h1 className='text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100'>
                            Login to read posts
                        </h1>
                        <p className='mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400'>
                            You need to be logged in to view and create posts.
                        </p>
                        <Link
                            to='/login'
                            className='mt-6 inline-block px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow dark:bg-indigo-500 dark:hover:bg-indigo-600'
                        >
                            Login
                        </Link>
                    </div>
                </Container>
            </div>
        )
}
else if (myPosts.length === 0) {
        return (
            <div className='w-full py-16 sm:py-24'>
                <Container>
                    <div className='flex flex-col items-center justify-center text-center max-w-md mx-auto'>
                        <h1 className='text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100'>
                            Add some post to see post
                        </h1>
                        <p className='mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400'>
                            You need to be add post to view and create posts.
                        </p>
                        <Link
                            to='/add-post'
                            className='mt-6 inline-block px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow dark:bg-indigo-500 dark:hover:bg-indigo-600'
                        >
                            Add Post
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
    // Case 2: Posts exist — render the grid
    return (
        <div className='w-full py-6 sm:py-8 lg:py-10'>
            <container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
                    {myPosts.map((post) => (
                        <div key={post.$id} className='h-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </container>
        </div>
    )
}

export default Home
