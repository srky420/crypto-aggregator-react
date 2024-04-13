import cryptoTrade from "../../assets/trade-crypto.svg";
import cryptoTips from "../../assets/trade-tips.svg"
import { Button } from "./Button";
import { blogPosts } from "../../data/blogPosts";


export const BlogPosts = (props: {itemsToShow: number}) => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                Read Latest <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Blogs</span>
            </h1>
            <p className="opacity-80 text-center w-3/4 mx-auto mb-10 font-inter">
                Insights & Analysis: Explore the Latest in Crypto with CoinSpace Blogs
            </p>

            {/* Blog cards */}
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

        </section>
    )
}