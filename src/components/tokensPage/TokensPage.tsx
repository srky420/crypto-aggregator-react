import { useEffect } from "react"
import { Tokens } from "../globals/Tokens"
import { Newsletter } from "../globals/Newsletter";



export const TokensPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <section className="container mx-auto px-5 md:px-20 lg:px-40">
                <div className="py-8 lg:py-16 relative">
                    {/* Header */}
                    <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-5">
                        <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Token</span> Listings
                    </h1>
                    <p className="opacity-80 text-center w-3/4 mx-auto">
                        Welcome to CryptoSpace: Your Gateway to the Future of Finance!
                        Experience real-time market data, manage your portfolio effortlessly, and stay ahead of trends with curated news and analysis. 
                    </p>
                </div>
                <Tokens pageSize={20} />
            </section>
            <Newsletter />
        </div>

    )
}