import { BlogPosts } from "../globals/BlogPosts";


export const LatestBlogs = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                Read Latest <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Blogs</span>
            </h1>
            <p className="opacity-80 text-center sm:w-3/4 mx-auto mb-10 font-inter">
                Insights & Analysis: Explore the Latest in Crypto with CoinSpace Blogs
            </p>

            {/* Blog cards */}
            <BlogPosts itemsToShow={2} />
        </section>
    )
}