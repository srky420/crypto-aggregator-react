import { Button } from "../globals/Button"
import accountImg from "../../assets/account.svg"
import { Newsletter } from "../globals/Newsletter"
import { useState } from "react"


export const AccountPage = () => {

    const [form, setForm] = useState<string>('login')

    return (
        <>
            <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-3">
                        Welcome to <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">CoinSpace</span>
                </h1>
                <p className="opacity-80 text-center w-3/4 mx-auto mb-10 font-inter">
                    New here? Sign up now to join our community of crypto enthusiasts and gain access to exclusive features, market insights, and more!
                    <br />
                    <br />
                    Already have an account? Simply log in to continue your crypto journey with CoinSpace.
                </p>

                <div className="grid grid-cols-2 gap-10 p-5 border bg-gray-50 rounded-2xl items-center">
                    <div className="bg-white p-5 rounded-xl h-full">
                        <img src={accountImg} alt="account-image" className="h-full" />
                    </div>

                    {form === 'login' ?

                    <form className="flex flex-col gap-5 rounded-2xl p-5 sm:p-10">
                        <h1 className="text-3xl sm:text-4xl font-rubik font-bold text-center col-span-2">
                            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Log In</span>
                        </h1>
                        <p className="opacity-80 text-center font-inter text-sm">
                            Welcome back! Log in to your CoinSpace account to access your portfolio.
                        </p>
                        <input type="email" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Email Address..." />
                        <input type="password" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Password..." />
                        <div className="w-fit mx-auto">
                            <Button variant="dark" text="Log In" />
                        </div>
                        <p className="font-inter text-center">
                            Don't have an account? <button className="underline text-indigo-600" onClick={() => setForm('signup')}>Sign Up</button>
                        </p>
                    </form>

                    :
                    
                    <form className="flex flex-col gap-5 rounded-2xl p-5 sm:p-10">
                        <h1 className="text-3xl sm:text-4xl font-rubik font-bold text-center col-span-2">
                            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Sign Up</span>
                        </h1>
                        <p className="opacity-80 text-center font-inter text-sm">
                            Ready to explore the world of cryptocurrencies? 
                            Create your CryptoHub account today and embark on an exciting journey towards financial empowerment and innovation.
                        </p>
                        <input type="text" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Username..." />
                        <input type="email" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Email Address..." />
                        <input type="password" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Password..." />
                        <input type="password" className="block w-full py-3 px-4 rounded-full font-inter border focus:shadow-lg" placeholder="Confirm Password..." />
                        <div className="w-fit mx-auto">
                            <Button variant="dark" text="Sign Up" />
                        </div>
                        <p className="text-center font-inter">or</p>
                        <div className="w-fit mx-auto">
                            <Button variant="light" text="Sign In with Google" />
                        </div>
                        <p className="font-inter text-center">
                            Already have an account? <button className="underline text-indigo-600" onClick={() => setForm('login')}>Log In</button>
                        </p>
                    </form>

                    }
                </div>
            </section>
            <Newsletter />
        </>
    )
}