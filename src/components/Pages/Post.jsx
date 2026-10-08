import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import Button from "../Button";
import Container from "../container/container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };
    return post ? (
    <div className="py-6 sm:py-8 lg:py-10">
        <Container>
            <div className="w-full flex justify-center mb-4 sm:mb-6 relative border border-slate-200 rounded-2xl bg-white p-2 sm:p-3 shadow-sm overflow-hidden dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
                <img
                    src={post.featuredImage ? appwriteService.getFilePreview(post.featuredImage) : ''}
                    alt={post.title}
                    className="w-full h-auto rounded-xl object-cover max-h-[500px]"
                />

                {isAuthor && (
                    <div className="absolute right-3 top-3 sm:right-6 sm:top-6 flex gap-2 sm:gap-3 bg-white/50 dark:bg-slate-900/50 p-2 rounded-xl backdrop-blur-sm">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button
                                bgColor="bg-green-600"
                                className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm"
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button
                            bgColor="bg-red-600"
                            onClick={deletePost}
                            className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm"
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100">
                    {post.title}
                </h1>
            </div>
            <div className="browser-css text-sm sm:text-base text-slate-700 leading-relaxed max-w-none dark:text-slate-300">
                {parse(post.content)}
            </div>
        </Container>
    </div>
) : null;
}