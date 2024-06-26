import { Hero } from "./Hero";
import { Chart } from "./Chart";
import { Achievements } from "./Achievements";
import { Features } from "./Features";
import { Brands } from "./Brands";
import { MobileApp } from "./MobileApp";
import { TokenListing } from "./TokenListing";
import { useEffect } from "react";
import { Newsletter } from "../globals/Newsletter";
import { LatestBlogs } from "./LatestBlogs";


export const LandingPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section>
            <Hero />
            <Chart />
            <Achievements />
            <TokenListing />
            <Features />
            <Brands />
            <MobileApp />
            <LatestBlogs />
            <Newsletter />
        </section>
    )
}