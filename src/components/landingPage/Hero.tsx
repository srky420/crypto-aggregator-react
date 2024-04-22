import { Button } from "../globals/Button";


export const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-indigo-500 to bg-pink-500 text-white">
            <div className="container mx-auto px-5 md:px-20 lg:px-40">
                <div className="py-24 sm:py-32 lg:py-40 relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik text-center mb-5">
                        Unlock the power of Crypto through CoinSpace
                    </h1>
                    <p className="opacity-90 text-center sm:w-3/4 mx-auto">
                        Welcome to CoinSpace: Your Gateway to the Future of Finance!
                        Experience real-time market data, manage your portfolio effortlessly, and stay ahead of trends with curated news and analysis. 
                    </p>
                    <div className="text-center my-5 w-fit mx-auto">
                        <Button link to={'/account'}
                            variant="light" size="lg" text={`Get Started <i class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-all">`} />
                    </div>
                </div>
            </div>
            <div className="bg-white opacity-10 w-80 h-80 rounded-full -top-32 left-0 absolute z-0"></div>
            <div className="bg-white opacity-10 w-96 h-96 rounded-full -bottom-40 right-0 absolute z-0"></div>
        </section>
    )
}