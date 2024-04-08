import { Tokens } from "../globals/Tokens"


export const TokenListing = () => {
    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 my-10 lg:my-20">

            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-rubik font-bold text-center mb-10">
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text">Tokens</span> Listing
            </h1>

            <Tokens pageSize={10} />
            
        </section>
    )
}