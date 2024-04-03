import { Button } from "../globals/Button";


export const Hero = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40">
            <div className="py-32 lg:py-40 relative">
                <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik text-center">
                    Unlock the power of <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Crypto</span> through CoinSpace
                </h1>
                <div className="text-center my-5">
                    <Button variant="primary" size="lg" text="Get Started" />
                </div>
                <i className="fa-brands fa-bitcoin absolute top-10 left-0 text-6xl xl:text-7xl text-yellow-500 -z-30"></i>
                <i className="fa-solid fa-cubes absolute top-7 right-0 text-6xl xl:text-7xl text-indigo-600 -z-30"></i>
                <i className="fa-brands fa-ethereum absolute bottom-10 right-10 text-7xl lg:text-8xl text-purple-500 -z-30"></i>
                <i className="fa-solid fa-chart-line absolute bottom-15 left-10 text-6xl text-pink-500 -z-30"></i>
            </div>
        </section>
    )
}