import { useEffect } from "react";
import { BlogPosts } from "../globals/BlogPosts"
import { Newsletter } from "../globals/Newsletter"
import { Link } from "react-router-dom";


export const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="container mx-auto px-5 md:px-20 lg:px-40 mt-5 font-inter opacity-80 mb-10">
                <Link to={"/"} className="hover:text-indigo-500">Home</Link> &gt; Blogs 
            </div>
            <section className="container mx-auto px-5 md:px-20 lg:px-40 mb-10 lg:mb-20">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                    Browse Our <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Blogs</span>
                </h1>
                <p className="opacity-80 text-center sm:w-3/4 mx-auto mb-10 font-inter">
                    Insights & Analysis: Explore the Latest in Crypto with CoinSpace Blogs
                </p>
                <BlogPosts itemsToShow={4} />
            </section>
            <Newsletter />
        </>
    )
}