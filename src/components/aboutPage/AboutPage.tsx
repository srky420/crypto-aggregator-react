import { useEffect } from "react"
import { Newsletter } from "../globals/Newsletter"
import { Hero } from "./Hero"
import { Mission } from "./Misson"
import { Offering } from "./Offering"
import { Link } from "react-router-dom"


export const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div className="container mx-auto px-5 md:px-20 lg:px-40 mt-5 font-inter opacity-80 mb-10">
                <Link to={"/"} className="hover:text-indigo-500">Home</Link> &gt; About 
            </div>
            <Hero />
            <Mission />
            <Offering />
            <Newsletter />
        </div>
    )
}