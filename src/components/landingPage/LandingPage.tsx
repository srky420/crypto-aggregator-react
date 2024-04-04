import { Hero } from "./Hero";
import { Chart } from "./Chart";
import { Achievements } from "./Achievements";
import { Tokens } from "./Tokens";
import { Features } from "./Features";


export const LandingPage = () => {
    return (
        <section>
            <Hero />
            <Chart />
            <Achievements />
            <Tokens />
            <Features />
        </section>
    )
}