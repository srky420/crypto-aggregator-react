import cryptoTips from "../../assets/team.svg"


export const Hero = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 mb-10 lg:mb-20">
            <div className="flex justify-between gap-10">
                <div className="sm:basis-3/5 flex flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik mb-5">
                        About <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">CoinSpace</span>
                    </h1>
                    <p className="opacity-80 font-inter mb-3">
                        At CoinSpace, we're passionate about empowering individuals to unlock the potential of cryptocurrencies and decentralized finance. 
                        Founded with the vision of providing a comprehensive platform for crypto enthusiasts, investors, and traders, 
                        CoinSpace strives to be the ultimate destination for all things crypto.
                    </p>
                    <div className="rounded-2xl bg-gray-800 text-white p-5 relative overflow-hidden mt-auto flex gap-5">
                        <div>
                            <h1 className="text-4xl sm:text-2xl md:text-3xl xl:text-4xl font-bold font-rubik mb-3">
                                Join Us
                            </h1>
                            <p className="opacity-90 font-inter">
                                Whether you're a seasoned crypto investor or just starting out, 
                                CoinSpace welcomes you to join our community and embark on your crypto journey with confidence. 
                            </p>
                        </div>
                        <div className="text-8xl text-gray-700 self-center"><i className="fa-solid fa-right-to-bracket"></i></div>
                    </div>
                </div>
                <div className="rounded-2xl basis-2/5 p-10 min-h-96 border shadow-md hidden sm:block">
                    <img src={cryptoTips} alt="hero-image" className="h-full object-contain" />
                </div>
            </div>
        </section>
    )
}