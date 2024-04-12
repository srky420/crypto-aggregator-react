import cryptoTips from "../../assets/team.svg"


export const Hero = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            <div className="flex items-center justify-between gap-10">
                <div className="sm:basis-3/5">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik mb-5">
                        About <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">CoinSpace</span>
                    </h1>
                    <p className="opacity-80 font-inter">
                        At CoinSpace, we're passionate about empowering individuals to unlock the potential of cryptocurrencies and decentralized finance. 
                        Founded with the vision of providing a comprehensive platform for crypto enthusiasts, investors, and traders, 
                        CoinSpace strives to be the ultimate destination for all things crypto.
                    </p>
                </div>
                <div className="rounded-2xl basis-2/5 p-10 h-96 border shadow-md hidden sm:block">
                    <img src={cryptoTips} alt="hero-image" className="h-full object-contain" />
                </div>
            </div>
        </section>
    )
}