import { Button } from "./Button"



export const Newsletter = () => {
    return (
        <section className="bg-gray-800 py-24 my-10 lg:my-20">
            <div className="container mx-auto px-5 md:px-20 lg:px-40">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-5 text-white">
                    Stay Informed with <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">CoinSpace</span> Newsletter
                </h1>
                <p className="opacity-90 text-center w-3/4 mx-auto font-inter text-white mb-5">
                    Sign up for CoinSpace newsletter to stay updated on the latest trends, news, and insights in the world of cryptocurrencies.
                </p>
                <form className="relative w-96 mx-auto">
                    <input className="block w-full p-3 rounded-full font-inter outline-none focus:shadow-lg" placeholder="Email Address..." />
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                        <Button variant="primary" size="" text="Subscribe" />
                    </div>
                </form>
            </div>
        </section>
    )
}