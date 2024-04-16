import { useEffect } from "react";
import { Button } from "../globals/Button"
import { Newsletter } from "../globals/Newsletter";


export const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section>

            <div className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                    Reach <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Out</span>
                </h1>
                <p className="opacity-80 text-center w-3/4 mx-auto mb-10 font-inter">
                    Have a question, suggestion, or just want to say hello? We'd love to hear from you! 
                    Feel free to reach out to us using the contact details below or fill out the form, 
                    and we'll get back to you as soon as possible.
                </p>

                <div className="flex gap-5 justify-center items-center font-inter flex-wrap">
                    <div className="flex gap-3 items-center shrink-0">
                        <Button variant="icon" text={`<i class="fa-solid fa-envelope"></i>`} />
                        <span className="pe-5">info@coinspace.com</span>
                    </div>
                    <div className="flex gap-3 items-center shrink-0">
                        <Button variant="icon" text={`<i class="fa-solid fa-phone"></i>`} />
                        <span className="pe-5">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex gap-3 items-center shrink-0">
                        <Button variant="icon" text={`<i class="fa-solid fa-location-dot"></i>`} />
                        <span className="pe-5">
                            123 Main Street,
                            Cityville,
                            12345
                        </span>
                    </div>
                </div>

                <form className="my-10 lg:my-20 border rounded-2xl p-10 grid grid-cols-2 gap-5 bg-gray-50">
                    <h1 className="text-3xl sm:text-4xl font-rubik font-bold text-center mb-3 col-span-2">
                        Send us a <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Message</span>
                    </h1>
                    <input className="block w-full p-3 rounded-full font-inter border focus:shadow-lg" placeholder="Full Name..." />
                    <input className="block w-full p-3 rounded-full font-inter border focus:shadow-lg" placeholder="Email Address..." />
                    <textarea className="block w-full p-3 rounded-2xl font-inter border focus:shadow-lg col-span-2 resize-y" placeholder="Email Address..." rows={5}></textarea>
                    <div className="col-span-2 w-fit ms-auto">
                        <Button variant="dark" text="Send Message" />
                    </div>
                </form>
            </div>

            <Newsletter />

        </section>
    )
}