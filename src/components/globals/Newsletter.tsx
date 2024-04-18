import { Button } from "./Button"



export const Newsletter = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-500 to-pink-500 py-32 my-10 lg:my-20 relative overflow-hidden">
            <div className="container mx-auto px-5 md:px-20 lg:px-40">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-5 text-white">
                    Stay Informed with CoinSpace Newsletter
                </h1>
                <p className="opacity-90 text-center w-3/4 mx-auto font-inter text-white mb-5">
                    Sign up for CoinSpace newsletter to stay updated on the latest trends, news, and insights in the world of cryptocurrencies.
                </p>
                <form className="relative w-96 mx-auto z-10">
                    <input className="block w-full p-3 rounded-full font-inter outline-none focus:shadow-lg" placeholder="Email Address..." />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <Button variant="dark" size="" text="Subscribe" />
                    </div>
                </form>
            </div>
            <div className="bg-white opacity-10 w-80 h-80 rounded-full -top-32 left-0 absolute z-0"></div>
            <div className="bg-white opacity-10 w-96 h-96 rounded-full -bottom-40 right-0 absolute z-0"></div>
        </section>
    )
}