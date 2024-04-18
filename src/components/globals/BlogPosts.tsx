import { Button } from "./Button";
import { blogPosts } from "../../data/blogPosts";


export const BlogPosts = (props: {itemsToShow: number}) => {
    return (
        <div className="grid sm:grid-cols-2 gap-10">
            {blogPosts.slice(0, props.itemsToShow).map((item, index) => 
                <div className="bg-gray-50 rounded-xl p-5 border" key={"blog" + index}>
                    <div className="rounded-xl overflow-hidden h-64 p-5 bg-white">
                        <img src={item.image_url} alt="blog-img" className="h-full" />
                    </div>
                    <div className="font-inter my-5">
                        <p className="opacity-80 mb-3 text-sm">{item.author} | {item.published_date}</p>
                        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                        <p className="opacity-80 text-sm">{item.description}</p>
                        <div className="w-fit ms-auto mt-3">
                            <Button variant="dark" size="sm" text="Read More" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}