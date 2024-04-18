


export const Achievements = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 mb-10 lg:mb-20">
            <div className="grid grid-cols-4 font-rubik gap-y-10 bg-gray-800 p-3 py-10 rounded-xl text-white">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">150<span className="text-indigo-400">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Supported <br /> Crypto Currencies</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">10<span className="text-pink-400">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Transaction <br /> Methods Supported</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">6.9M<span className="text-indigo-400">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">CryptoSpace <br /> Users</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">0.5<span className="text-pink-400">%</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Lowest <br /> Transaction Costs</p>
                </div>
            </div>
        </section>
    )
}