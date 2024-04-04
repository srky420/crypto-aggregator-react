import { Button } from "../globals/Button"



export const Features = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-rubik font-bold">
                    Empower Your <br /> <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Crypto</span> Journey
                </h1>
                <Button variant="primary" size="lg" text={`Get Started <i class="fa-solid fa-arrow-right group-hover:translate-x-2 transition-all"></i>`} />
            </div>

            {/* Grid */}
            <div className="grid min-[375px]:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-indigo-500">
                    <div className="text-6xl mb-3 text-indigo-500"><i className="fa-solid fa-chart-simple"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Live Market Data</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Stay updated with real-time cryptocurrency prices and market trends, enabling informed decision-making at your fingertips.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-chart-simple"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-pink-500">
                    <div className="text-6xl mb-3 text-pink-500"><i className="fa-solid fa-briefcase"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Portfolio Management</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Effortlessly track your crypto holdings with our intuitive portfolio management tool, allowing you to monitor performance and balance with ease.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-briefcase"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-yellow-500">
                    <div className="text-6xl mb-3 text-yellow-500"><i className="fa-solid fa-bell"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Customizable Alerts</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Set personalized alerts for price changes, volume fluctuations, or news updates, ensuring you never miss a crucial opportunity in the fast-paced crypto market.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-bell"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-orange-500">
                    <div className="text-6xl mb-3 text-orange-500"><i className="fa-solid fa-newspaper"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">News Feed</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Access a curated stream of the latest news and analysis from top sources in the cryptocurrency world, empowering you to stay ahead of market developments.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-newspaper"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-green-500">
                    <div className="text-6xl mb-3 text-green-500"><i className="fa-solid fa-chart-pie"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Charting Tools</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Dive deep into market analysis with our suite of advanced charting tools, including technical indicators and historical data, for a comprehensive understanding of crypto market movements.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-chart-pie"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-blue-500">
                    <div className="text-6xl mb-3 text-blue-500"><i className="fa-solid fa-shield-halved"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Secure Wallet</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Seamlessly integrate your crypto wallets to manage assets directly from the app, ensuring security and convenience in your digital asset management journey.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-shield-halved"></i></div>
                </div>
            </div>
        </section>
    )
}