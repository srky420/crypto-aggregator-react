import { useEffect } from "react"
import { Tokens } from "../globals/Tokens"
import { Newsletter } from "../globals/Newsletter";
import { Link } from "react-router-dom";



export const TokensPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div className="container mx-auto px-5 md:px-20 lg:px-40 mt-5 font-inter opacity-80 mb-10">
                <Link to={"/"} className="hover:text-indigo-500">Home</Link> &gt; Tokens 
            </div>
            <section className="container mx-auto px-5 md:px-20 lg:px-40">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                    <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Token</span> Listings
                </h1>
                <p className="opacity-80 text-center sm:w-3/4 mx-auto mb-10">
                    Welcome to CryptoSpace!
                    Your All-in-One Destination for Real-Time Market Data and Insights!
                </p>
                <Tokens pageSize={20} />
            </section>
            <Newsletter />
        </div>

    )
}