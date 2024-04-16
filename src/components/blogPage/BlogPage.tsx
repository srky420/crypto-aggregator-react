import { useEffect } from "react";
import { BlogPosts } from "../globals/BlogPosts"
import { Newsletter } from "../globals/Newsletter"


export const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <BlogPosts itemsToShow={4} />
            <Newsletter />
        </div>
    )
}