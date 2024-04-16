import { useEffect } from "react"
import { Newsletter } from "../globals/Newsletter"
import { Hero } from "./Hero"
import { Mission } from "./Misson"
import { Offering } from "./Offering"


export const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Hero />
            <Mission />
            <Offering />
            <Newsletter />
        </div>
    )
}