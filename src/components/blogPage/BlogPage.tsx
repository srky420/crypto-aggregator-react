import { BlogPosts } from "../globals/BlogPosts"
import { Newsletter } from "../globals/Newsletter"

export const BlogPage = () => {
    return (
        <div>
            <BlogPosts itemsToShow={4} />
            <Newsletter />
        </div>
    )
}