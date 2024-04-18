export const Offering = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
            <div className="grid min-[375px]:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-indigo-500">
                    <div className="text-6xl mb-3 text-indigo-500"><i className="fa-solid fa-users"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">User-Centric Approach</h2>
                    <p className="opacity-80 font-inter text-sm">
                        We prioritize the needs of our users, constantly striving to enhance their experience 
                        and provide them with the tools they need to succeed in the crypto space.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-users"></i></div>
                </div>
                <div className="bg-gray-100 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-pink-500">
                    <div className="text-6xl mb-3 text-pink-500"><i className="fa-solid fa-key"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Security and Trust</h2>
                    <p className="opacity-80 font-inter text-sm">
                        Security is our top priority. We employ robust security measures to safeguard our users' data and assets, ensuring a safe and secure trading environment.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-key"></i></div>
                </div>
                <div className="bg-gray-100 min-[375px]:col-span-2 md:col-span-1 rounded-xl p-5 lg:p-10 relative border overflow-hidden hover:outline-dashed outline-yellow-500">
                    <div className="text-6xl mb-3 text-yellow-500"><i className="fa-solid fa-lightbulb"></i></div>
                    <h2 className="text-2xl font-rubik font-semibold">Continuous Innovation</h2>
                    <p className="opacity-80 font-inter text-sm">
                        We are committed to innovation and excellence, constantly exploring new features 
                        and functionalities to improve our platform and stay ahead of the curve in the dynamic crypto landscape.
                    </p>
                    <div className="absolute -top-10 -right-2 text-9xl mb-3 text-gray-200"><i className="fa-solid fa-lightbulb"></i></div>
                </div>
            </div>
        </section>
    )
}