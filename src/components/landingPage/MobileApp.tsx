import dummyProfilePic from "../../assets/dummy-profile.jpg"
import qrCode from "../../assets/qr-code.svg"
import { Button } from "../globals/Button"


export const MobileApp = () => {
    return (
        <section className="bg-gray-800 py-20 lg:py-40">
            <div className="container mx-auto px-5 md:px-20 lg:px-40">
                <div className="flex gap-10 justify-between flex-wrap items-center">
                    {/* Header */}
                    <div className="text-white flex-grow flex-shrink-0 basis-96">
                        <h1 className="text-4xl sm:text-5xl font-rubik font-bold">
                            Take <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">CryptoHub</span> Everywhere You Go!
                        </h1>
                        <p className="text-sm text-gray-300">
                            Experience seamless access to the world of cryptocurrencies right from your fingertips with our mobile app. 
                            Stay connected to real-time market updates, manage your portfolio on-the-go, and never miss out on important alerts or news.
                        </p>
                        <div className="flex justify-between items-center my-5">
                            <div className="flex gap-5 items-center">
                                <img src={qrCode} className="rounded-xl h-24" alt="qr-code" />
                                <div className="font-inter">
                                    <p className="text-gray-200">Scan to Download</p>
                                    <p>iOS and Android</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="icon" size="lg" text={`<i class="fa-brands fa-google-play text-black text-lg"></i>`} />
                                <Button variant="icon" size="lg" text={`<i class="fa-brands fa-apple text-black text-xl"></i>`} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile screen view */}
                    <div className="flex-1 rounded-xl flex-grow flex-shrink-0 basis-96 h-96 flex bg-gradient-to-tr from-indigo-300 to-pink-300">
                        <div className="rounded-2xl rounded-b-none h-80 w-64 mx-auto mt-auto bg-gray-900 overflow-hidden">
                            <div className="w-10 h-1 my-4 rounded-md bg-white mx-auto"></div>
                            <div className="h-full mx-4 my-4 bg-white">
                                {/* Mobile nav */}
                                <div className="font-rubik text-xl flex justify-between px-2 border-b">
                                    <p className="text-pink-600 font-extrabold "><i className="fa-brands fa-bitcoin"></i> CoinSpace</p>
                                    <p><i className="fa fa-bars"></i></p>
                                </div>
                                {/* Mobile profile */}
                                <div className="flex gap-2 p-5 font-inter">
                                    <div className="w-12 h-12 border rounded-full overflow-hidden">
                                        <img src={dummyProfilePic} alt="dummy-profile-pic" />
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-80">Your Balance</p>
                                        <h2 className="text-lg font-bold">$6,520</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}