import { Hero } from "./Hero";
import { Chart } from "./Chart";
import { Achievements } from "./Achievements";
import { Tokens } from "./Tokens";


export const LandingPage = () => {
    return (
        <section>
            <Hero />
            <Chart />
            <Achievements />
            <Tokens />
        </section>
    )
}