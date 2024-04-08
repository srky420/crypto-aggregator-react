import cryptoTrade from "../../assets/trade-crypto.svg";
import cryptoTips from "../../assets/trade-tips.svg"
import { Button } from "../globals/Button";


export const BlogPosts = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-10">
                Read Latest <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Blogs</span>
            </h1>

            {/* Blog cards */}
            <div className="grid sm:grid-cols-2 gap-10">
                <div className="bg-gray-50 rounded-xl p-5 border">
                    <div className="rounded-xl overflow-hidden h-64 p-5 bg-white">
                        <img src={cryptoTrade} alt="blog-img" className="h-full" />
                    </div>
                    <div className="font-inter my-5">
                        <p className="opacity-80 mb-3 text-sm">John D. | November 12, 2023</p>
                        <h2 className="text-2xl font-semibold mb-2">Demystifying Blockchain: The Backbone of Cryptocurrencies</h2>
                        <p className="opacity-80 text-sm">
                            Dive into the fundamental technology behind cryptocurrencies - Blockchain. 
                            and the impact it has on revolutionizing various industries beyond finance. 
                        </p>
                        <div className="w-fit ms-auto mt-3">
                            <Button variant="dark" size="sm" text="Read More" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border">
                    <div className="rounded-xl overflow-hidden h-64 p-5 bg-white">
                        <img src={cryptoTips} alt="blog-img" className="h-full" />
                    </div>
                    <div className="font-inter my-5">
                        <p className="opacity-80 mb-3 text-sm">Julia S. | December 18, 2023</p>
                        <h2 className="text-2xl font-semibold mb-2">Navigating the Cryptocurrency Landscape: A Beginner's Guide</h2>
                        <p className="opacity-80 text-sm">
                            Embarking on your crypto journey? This comprehensive guide provides essential insights for beginners. 
                        </p>
                        <div className="w-fit ms-auto mt-3">
                            <Button variant="dark" size="sm" text="Read More" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}