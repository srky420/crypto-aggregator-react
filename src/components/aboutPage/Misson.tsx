export const Mission = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            <div className="rounded-2xl bg-indigo-500 text-white p-10 relative overflow-hidden">
                <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-bold font-rubik mb-5">
                    Our <span className="text-yellow-400">Mision</span>
                </h1>
                <p className="opacity-90 font-inter">
                    Our mission at CoinSpace is to democratize access to cryptocurrencies and 
                    empower users with the tools and knowledge needed to thrive in the rapidly evolving digital asset ecosystem. 
                    We aim to break down barriers to entry, foster financial inclusion, and drive innovation in the crypto space.
                </p>
                <div className="absolute -top-8 right-1 text-9xl mb-3 text-indigo-400"><i className="fa-solid fa-braille"></i></div>
            </div>
        </section>
    )
}