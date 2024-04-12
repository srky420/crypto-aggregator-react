import { Newsletter } from "../globals/Newsletter"
import { Hero } from "./Hero"
import { Mission } from "./Misson"
import { Offering } from "./Offering"



export const AboutPage = () => {
    return (
        <div>
            <Hero />
            <Mission />
            <Offering />
            <Newsletter />
        </div>
    )
}