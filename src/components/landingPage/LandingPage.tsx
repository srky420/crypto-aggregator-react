import { Hero } from "./Hero";
import { Chart } from "./Chart";
import { Achievements } from "./Achievements";
import { Tokens } from "./Tokens";
import { Features } from "./Features";
import { Brands } from "./Brands";
import { MobileApp } from "./MobileApp";


export const LandingPage = () => {
    return (
        <section>
            <Hero />
            <Chart />
            <Achievements />
            <Tokens />
            <Features />
            <Brands />
            <MobileApp />
        </section>
    )
}