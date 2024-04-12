import { Button } from "./Button"



export const Footer = () => {
    return (
        <section className="container mx-auto px-5 lg:px-20 xl:px-40 my-10 lg:my-20">
            <hr />
            <div className="flex justify-center md:justify-between gap-5 flex-wrap my-10">
                <div>
                    <a href="" className="text-2xl text-pink-600 font-extrabold font-rubik">
                        <i className="fa-brands fa-bitcoin"></i> CoinSpace
                    </a>
                    <p className="opacity-80 font-inter">Your All-in-One Destination for Real-Time Market Data and Insights!</p>
                </div>
                <div className="flex gap-5 items-center font-inter">
                    <p>Follow Us:</p>
                    <Button variant="icon" text={`<i class="fa-brands fa-x-twitter"></i>`} />
                    <Button variant="icon" text={`<i class="fa-brands fa-instagram"></i>`} />
                    <Button variant="icon" text={`<i class="fa-brands fa-facebook-f"></i>`} />
                    <Button variant="icon" text={`<i class="fa-brands fa-youtube"></i>`} />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 my-10 gap-10 justify-center">
                <div className="font-inter">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="*:mb-1">
                        <li><a href="" className="opacity-80 hover:opacity-100">Home</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">About</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Pricing</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Blog</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Tokens</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Contact</a></li>
                    </ul>
                </div>
                <div className="font-inter">
                    <h3 className="text-lg font-semibold mb-2">Legal Links</h3>
                    <ul className="*:mb-1">
                        <li><a href="" className="opacity-80 hover:opacity-100">Privacy Policy</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Wallet Security</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Exchange Terms</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Terms & Conditions</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Affiliate Terms</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Cookies Policy</a></li>
                    </ul>
                </div>
                <div className="font-inter">
                    <h3 className="text-lg font-semibold mb-2">Contact Links</h3>
                    <ul className="*:mb-1">
                        <li><a href="" className="opacity-80 hover:opacity-100">Help Center</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Feedback</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Careers</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Download App</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">FAQ</a></li>
                        <li><a href="" className="opacity-80 hover:opacity-100">Community</a></li>
                    </ul>
                </div>
                <div className="font-inter">
                    <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                    <p className="opacity-80 mb-3">Office Address: 123 Main Street, Cityville, CryptoLand, 12345</p>
                    <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                    <p className="opacity-80 mb-3">+1 (555) 123-4567</p>
                    <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                    <p className="opacity-80">info@cryptospace.com</p>
                </div>
            </div>
        </section>
    )
}