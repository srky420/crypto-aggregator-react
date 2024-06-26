import { useEffect, useState } from "react";
import { cryptoListings } from "../../data/cryptoListings";
import { Button } from "./Button";


export const Tokens = (props: { pageSize: number }) => {

    // State for API Data
    const [cryptoData, setCryptoData] = useState<[any]>();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // USD Currency format
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // Effect
    useEffect(() => {

        // Contact API
        const url = 'http://localhost:3000/cryptocurrency';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCryptoData(data.data);
                setTotalPages(data.data.length / props.pageSize);
                setIsLoading(false);
            })
            .catch(err => {
                // On error, use pre-defined data
                console.log(err);
                setCryptoData(cryptoListings.data);
                setTotalPages(cryptoListings.data.length / props.pageSize);
                setIsLoading(false);
            });
    }, [])

    // Next page
    const nextPage = () => {
        setCurrentPage(prev => prev < totalPages ? ++prev : totalPages)
    }

    // Prev page
    const prevPage = () => {
        setCurrentPage(prev => prev === 1 ? 1 : --prev);
    }

    return (
        <div>
            <div className="font-inter border rounded-2xl">
                <div className="grid grid-cols-4 sm:grid-cols-5 bg-indigo-600 p-5 rounded-tr-2xl rounded-tl-2xl text-white">
                    <h6 className="">Name</h6>
                    <h6 className="">Price</h6>
                    <h6 className="">24h Change</h6>
                    <h6 className="hidden sm:block">Market Cap</h6>
                    <h6 className="justify-self-center">Details</h6>
                </div>
        

                {isLoading ? 
                    <div className="h-20 w-20 border-8 border-t-8 border-gray-100 border-t-indigo-600 animate-spin mx-auto rounded-full my-20"></div>
                :
                    <>
                    {cryptoData && cryptoData.slice((currentPage - 1) * props.pageSize, ((currentPage - 1) * props.pageSize) + props.pageSize).map((item, index) => 
                        <div key={'listing' + index} className="grid grid-cols-4 sm:grid-cols-5 gap-2 p-5 border-b hover:bg-gray-100 last:border-b-0">
                            <h6 className="overflow-hidden text-ellipsis">{item.name}</h6>
                            <h6 className="font-semibold overflow-hidden text-ellipsis">{USDollar.format(item.quote.USD.price)}</h6>
                            <h6 className={item.quote.USD.percent_change_24h < 0 ? "text-red-600" : "text-green-600"}>
                                {item.quote.USD.percent_change_24h > 0 && <>+</>}
                                {(item.quote.USD.percent_change_24h).toFixed(2)}%
                            </h6>
                            <h6 className="hidden sm:block">{USDollar.format(item.quote.USD.market_cap)}</h6>
                            <a href="" className="justify-self-center text-indigo-600 underline underline-offset-4 hover:opacity-80">See More</a>
                        </div>
                    )}
                    </>
                }
            </div>
            <div className="text-center my-10">
                <div className="flex gap-2 mx-auto w-fit">
                    <Button variant="icon" text={`<i class="fa-solid fa-chevron-left"></i>`} onClick={prevPage} />
                    <Button variant="icon" text={`<i class="fa-solid fa-chevron-right"></i>`} onClick={nextPage} />
                </div>
                <p className="text-center opacity-80">Showing page {currentPage} of {totalPages}</p>
            </div>
        </div>
    )
}