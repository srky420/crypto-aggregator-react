import { Button } from "../globals/Button";


export const Hero = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40">
            <div className="py-32 lg:py-40 relative">
                <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik text-center">
                    Unlock the power of <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Crypto</span> through CoinSpace
                </h1>
                <p className="opacity-80 text-center w-3/4 mx-auto">
                    Welcome to CryptoSpace: Your Gateway to the Future of Finance!
                    Experience real-time market data, manage your portfolio effortlessly, and stay ahead of trends with curated news and analysis. 
                </p>
                <div className="text-center my-5">
                    <Button variant="primary" size="lg" text={`Get Started <i class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-all">`} />
                </div>
                <i className="fa-brands fa-bitcoin absolute top-10 left-0 text-6xl xl:text-7xl text-yellow-500 -z-30"></i>
                <i className="fa-solid fa-cubes absolute top-7 right-0 text-6xl xl:text-7xl text-indigo-600 -z-30"></i>
                <i className="fa-brands fa-ethereum absolute bottom-10 right-10 text-7xl lg:text-8xl text-purple-500 -z-30"></i>
                <i className="fa-solid fa-chart-line absolute bottom-15 left-10 text-6xl text-pink-500 -z-30"></i>
            </div>
        </section>
    )
}