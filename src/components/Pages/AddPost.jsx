import React from 'react'
import container from '../container/container'
import PostForm from '../post-form/PostForm'
function AddPost() {
  return (
    <div className='py-8'>
      <container>
        <PostForm/>
      </container>
    </div>
  )
}

export default AddPost
