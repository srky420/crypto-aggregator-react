import { useState } from "react"
import ReactApexChart from "react-apexcharts"
import bnb from '../../assets/icons/bnb.svg'
import btc from '../../assets/icons/btc.svg'
import usdt from '../../assets/icons/usdt.svg'
import usdc from '../../assets/icons/usdc.svg'
import eth from '../../assets/icons/eth.svg'
import { cryptoData } from "../../data/cryptoData"


export const Chart = () => {

    const [state, setState] = useState<any>({
        series: [{
            name: "Price",
            data: cryptoData.btc
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'btc',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['9:30am', '11:30am', '01:30pm', '03:30pm', '05:30pm', '07:30pm', '09:30pm', '11:30pm', '12:30am'],
            }
        },
        current: 'btc'
    });

    const handleClick = (coin: string) => {
        setState((prevState: any) => ({
            ...prevState,
            series: [{
                name: "Price",
                data: cryptoData[coin]
            }],
            options: {
                ...prevState.options,
                title: {
                    text: coin,
                    align: 'left'
                }
            },
            current: coin
        }));
    }

    return (
        <section className="container mx-auto px-5 md:px-20 lg:px-40 mb-5 relative -top-20">
            <div className="border-2 rounded-2xl bg-white shadow-lg">
                <div className="border-b-2 p-3 flex gap-2 bg-gray-100 rounded-t-2xl">
                    <div className="w-4 h-4 bg-green-500 rounded-full ms-auto"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full bg-ind"></div>
                </div>
                <div className="my-5 font-inter">
                    <div className="mx-1 sm:*:mx-3 flex justify-center flex-wrap">
                        <button 
                            className={state.current === 'btc' ? "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3 border" : "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3"} 
                            onClick={() => handleClick('btc')}><img src={btc} alt="btc" className="w-10" /> Bitcoin</button>
                        <button 
                            className={state.current === 'eth' ? "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3 border" : "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3"} 
                            onClick={() => handleClick('eth')}><img src={eth} alt="eth" className="w-10" /> Etherium</button>
                        <button 
                            className={state.current === 'usdt' ? "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3 border" : "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3"} 
                            onClick={() => handleClick('usdt')}><img src={usdt} alt="usdt" className="w-10" /> USDT</button>
                        <button 
                            className={state.current === 'usdc' ? "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3 border" : "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3"}
                            onClick={() => handleClick('usdc')}><img src={usdc} alt="usdc" className="w-10" /> USDC</button>
                        <button 
                            className={state.current === 'bnb' ? "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3 border" : "flex gap-3 items-center hover:bg-gray-100 rounded-md p-3"}
                            onClick={() => handleClick('bnb')}><img src={bnb} alt="bnb" className="w-10" /> BNB</button>
                    </div>
                </div>
                <div id="chart">
                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                </div>
                <div id="html-dist"></div>
                <p className="text-xs text-center opacity-80 font-inter">This is Dummy Data (Does not represent REAL CRYPTO INFO)</p>

            </div>
        </section>
    )
}