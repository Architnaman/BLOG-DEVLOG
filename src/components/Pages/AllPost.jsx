import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import appwriteService from '../../appwrite/config'
import container from '../container/container'
import PostCard from '../Postcard'
function AllPost() {
    const [Post , setPost] = useState([])
    useEffect(() =>{
        appwriteService.listPost().then((post) => {
            if(post){
                setPost(post.documents || [])
            }
        })
    },[])
 return (
        <div className='w-full py-6 sm:py-8 lg:py-10'>
            <container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
                    {Post.map((post) => (
                        <div key={post.$id} className="h-full">
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </container>
        </div>
    )
}

export default AllPost
