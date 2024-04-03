


export const Achievements = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-20 lg:my-40">
            <div className="grid grid-cols-2 xl:grid-cols-4 font-rubik gap-y-10 text-start">
                <div className="flex gap-3 md:gap-5 items-center">
                    <h1 className="text-4xl md:text-5xl font-bold">150<span className="text-indigo-500">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Supported <br /> Crypto Currencies</p>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h1 className="text-4xl md:text-5xl font-bold">10<span className="text-pink-500">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Transaction <br /> Methods Supported</p>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h1 className="text-4xl md:text-5xl font-bold">6.9M<span className="text-indigo-500">+</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Crypto <br /> Users</p>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                    <h1 className="text-4xl md:text-5xl font-bold">0.5<span className="text-pink-500">%</span></h1>
                    <p className="text-xs md:text-sm opacity-80">Lowest <br /> Transaction Costs</p>
                </div>
            </div>
        </section>
    )
}