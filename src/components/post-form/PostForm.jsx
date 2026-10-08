import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import RTE from '../RTE'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/auth'

function PostForm({post}) {
    const {register , handleSubmit , watch , setValue , control , getValues , reset} = useForm({
        defaultValues : {
            title : post?.title || "",
            content : post?.content || "",
            status : post?.status || "active",
            slug : post?.slug || ""
        }
    })
    useEffect(() => {
    if (post) {
        reset({
            title: post.title,
            content: post.content,
            status: post.status,
            slug: post.slug,
        })
    }
    }, [post , reset])
    const navigate  = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const submit = async (data) => {
        if (!userData) {
            console.error("User not logged in. Cannot submit post.")
            return
        }
        if(post){
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id ,{...data, featuredImage : file ? file.$id : undefined})
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }

        }
        else{
            const file = await appwriteService.uploadFile(data.image[0])
            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId : userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
                console.error("File upload failed. Post not created.")
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z\d\s]+/g, '')   // remove special characters
                  .replace(/\s+/g, '-')          // spaces to hyphens
        }
        else return ''
    },[])
    useEffect(() => {
        const subscription = watch((value , {name}) => {
            if(name === 'title'){
                setValue("slug" , slugTransform(value.title) ,{shouldValidate : true})
            }
        })
        return () =>{
            subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap -mx-2 sm:-mx-3">
    <div className="w-full lg:w-2/3 px-2 sm:px-3">
        <Input
            label="Title :"
            placeholder="title"
            className="mb-4 sm:mb-5"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4 sm:mb-5"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-full lg:w-1/3 px-2 sm:px-3 mt-6 lg:mt-0">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4 sm:mb-5"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4 sm:mb-5 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="w-full h-auto rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 sm:mb-5"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default PostForm
