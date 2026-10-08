import React from 'react'
import { useState , useEffect } from 'react'
import container from '../container/container'
import PostForm from '../post-form/PostForm'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import appwriteService from '../../appwrite/config'
function EditPost() {
    const [post , Setpost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) =>{
                if(post){
                    Setpost(post)
                }
            })
        }
        else{
            navigate("/")
        }
    },[slug , navigate])
  return (
    <div className='py-8'>
      <container>
        <PostForm post={post}/>
      </container>
    </div>
  )
}

export default EditPost
