import { SetStateAction, useState } from "react"
import icons from "../../../assets/icons/icons"
import images from "../../../assets/images/images"
import Components from "../../../components"
import Frame from "../../../components/frame"
import { useNavigate } from "react-router"
import ApexChart from "../../../components/apexChart"
// import Tab from "../../../components/tabs"
import Select from "react-select"
import Tab from "../../../components/tabs"


const Exchange = () => {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()

    const MENU_CONTENT = [
        {
            label: 'Exchange',
            path: '/'
        },
        {
            label: "Wallets",
            path: '/wallets'
        },
        {
            label: "Roqqu Hub",
            path: '/roqqu-hub'
        },
        {
            label: 'Log Out',
            path: '/logout'
        }
    ]


    const divider =
        <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.04" width="1" height="48" rx="0.5" fill="#EAF0FE" />
        </svg>


    const smallDivider = <svg width="1" height="26" viewBox="0 0 1 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.1" y="0.5" width="1" height="25" rx="0.5" fill="#EAF0FE" />
    </svg>

    const expand = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.15841 10.6583L3.33341 15.4916V14.1666C3.33341 13.9456 3.24562 13.7337 3.08934 13.5774C2.93306 13.4211 2.7211 13.3333 2.50008 13.3333C2.27907 13.3333 2.06711 13.4211 1.91083 13.5774C1.75455 13.7337 1.66675 13.9456 1.66675 14.1666V17.5C1.66806 17.6089 1.69071 17.7164 1.73341 17.8166C1.81798 18.0203 1.97979 18.1821 2.18341 18.2666C2.2836 18.3093 2.39118 18.332 2.50008 18.3333H5.83342C6.05443 18.3333 6.26639 18.2455 6.42267 18.0892C6.57895 17.9329 6.66675 17.721 6.66675 17.5C6.66675 17.2789 6.57895 17.067 6.42267 16.9107C6.26639 16.7544 6.05443 16.6666 5.83342 16.6666H4.50841L9.34175 11.8416C9.49867 11.6847 9.58682 11.4719 9.58682 11.25C9.58682 11.028 9.49867 10.8152 9.34175 10.6583C9.18483 10.5014 8.972 10.4132 8.75008 10.4132C8.52816 10.4132 8.31533 10.5014 8.15841 10.6583ZM18.2667 2.18329C18.1822 1.97967 18.0204 1.81786 17.8167 1.73329C17.7166 1.69059 17.609 1.66794 17.5001 1.66663H14.1667C13.9457 1.66663 13.7338 1.75442 13.5775 1.9107C13.4212 2.06698 13.3334 2.27895 13.3334 2.49996C13.3334 2.72097 13.4212 2.93293 13.5775 3.08922C13.7338 3.2455 13.9457 3.33329 14.1667 3.33329H15.4917L10.6584 8.15829C10.5803 8.23576 10.5183 8.32793 10.476 8.42948C10.4337 8.53103 10.4119 8.63995 10.4119 8.74996C10.4119 8.85997 10.4337 8.96889 10.476 9.07044C10.5183 9.17199 10.5803 9.26416 10.6584 9.34163C10.7359 9.41973 10.8281 9.48173 10.9296 9.52404C11.0312 9.56634 11.1401 9.58812 11.2501 9.58812C11.3601 9.58812 11.469 9.56634 11.5706 9.52404C11.6721 9.48173 11.7643 9.41973 11.8417 9.34163L16.6667 4.50829V5.83329C16.6667 6.05431 16.7545 6.26627 16.9108 6.42255C17.0671 6.57883 17.2791 6.66663 17.5001 6.66663C17.7211 6.66663 17.9331 6.57883 18.0893 6.42255C18.2456 6.26627 18.3334 6.05431 18.3334 5.83329V2.49996C18.3321 2.39106 18.3095 2.28348 18.2667 2.18329Z" fill="#A7B1BC" />
    </svg>




    const TABS = [
        {
            label: 'Charts',
            tab: 'charts',
            path: '?chart_tab=charts',
        },
        {
            label: 'Orderbook',
            tab: 'chart_orderbook',
            path: '?chart_tab=chart_orderbook',
        },
        {
            label: 'Recent trades',
            tab: 'recent_trades',
            path: '?chart_tab=recent_trades',
        }
    ];

    const BOTTOM_TABS = [
        {
            label: 'Open Orders',
            tab: "open-orders",
            path: '?tab=open-orders'
        },
        {
            label: 'Positions',
            tab: "positions",
            path: '?tab=positions'
        },
        {
            label: 'Order History',
            tab: "order-history",
            path: '?tab=order-history'
        },
        {
            label: 'Trade History',
            tab: "trade-history",
            path: '?tab=trade-history'
        }
    ];


    const CHART_DURATION = [
        {
            label: "Time",
            query: "/time"
        },
        {
            label: "1H",
            query: "1h"
        },
        {
            label: "2H",
            query: "2h",
        },
        {
            label: "4H",
            query: "4h"
        },
        {
            label: "1D",
            query: "1D"
        },
        {
            label: "1W",
            query: "1w"
        },
        {
            label: "1M",
            query: "1m"
        }
    ]

    const bookOne = <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="2" rx="1" fill="#FF6838" />
        <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4" />
        <rect y="8" width="12" height="2" rx="1" fill="#25C26E" />
    </svg>

    const bookTwo = <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="2" rx="1" fill="#B1B5C4" />
        <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4" />
        <rect y="8" width="12" height="2" rx="1" fill="#25C26E" />
    </svg>

    const bookThree = <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="2" rx="1" fill="#FF6838" />
        <rect y="4" width="12" height="2" rx="1" fill="#B1B5C4" />
        <rect y="8" width="12" height="2" rx="1" fill="#B1B5C4" />
    </svg>


    const orderBooks = [{ icon: bookOne, selected: true }, { icon: bookTwo, selected: false }, { icon: bookThree, selected: false }]

    const [perPage, setPerPage] = useState({ label: "10", value: "10" })

    const perPageOptions = [
        {
            label: "5", value: "5"
        },
        {
            label: "10", value: "10"
        }, {
            label: "15", value: "15"
        },
        {
            label: "20", value: "20"
        }
    ]

    const handleSelectChange = (e: any) => {
        setPerPage(e)
    }


    const orderbookTableHead = [<p className="text-left">Price <br /> (USDT)</p>, <p>Amount <br /> (BTC)</p>, <p className="text-xs">Total</p>]

    const orderbookDetails = [
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98"
            // total_color:""
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98"
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98"
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98"
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98"
        }
    ]

    const arrowUp = <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15651 3.606C6.40625 3.33545 6.38938 2.91368 6.11883 2.66394L3.78553 0.510093C3.53015 0.274361 3.13653 0.274359 2.88115 0.510088L0.547793 2.66394C0.277244 2.91367 0.260371 3.33544 0.510106 3.60599C0.75984 3.87654 1.18161 3.89341 1.45216 3.64368L2.66667 2.5226L2.66667 8.99996C2.66667 9.36815 2.96515 9.66663 3.33333 9.66663C3.70152 9.66663 4 9.36815 4 8.99996L4 2.52263L5.21445 3.64367C5.485 3.89341 5.90677 3.87654 6.15651 3.606Z" fill="#25C26E" />
    </svg>



    return (
        <main>

            {/* navbar */}
            <header className="flex fixed flex-col z-50 w-full h-[80px]   border-b border-[#32383F] bg-[#1C2127] p-4">
                <div className="flex justify-between items-center">
                    {/* left wrap  */}
                    <div className="flex gap-3 items-center cursor-pointer">
                        <img src={icons.Logo} alt="logo" />
                        <img src={icons.LogoType} alt="logo type" />
                    </div>

                    {/* right wrap */}
                    <div className="flex gap-3 items-center  pr-3">
                        <img src={images.Avatar} alt="avatar" className="w-[32px] h-[32px] cursor-pointer" />
                        <img src={icons.Globe} alt="globe" className="cursor-pointer" />
                        <div className="ml-2">
                            <Components.HamburgerMenu open={isOpen} setOpen={setOpen} />
                        </div>
                        <Components.MenuDropdown content={MENU_CONTENT} open={isOpen} />
                    </div>
                </div>
            </header>


            <section className="h-[calc(100vh-80px)] overflow-auto absolute flex flex-col gap-2 w-full pt-2 pb-24 bottom-0">
                {/* top wrap */}
                <Frame>
                    <div className="flex  gap-2 items-center ">
                        <div className=" flex ">
                            <img src={icons.Bitcoin} alt="bitcoin" />
                            <img src={icons.Dollarcoin} alt="dollarcoin" className="border-[#20252B] rounded-full -ml-1" />
                        </div>
                        <p className="text-white font-medium text-lg">BTC/USDT</p>

                        <img src={icons.Dropdown} alt="dropdown" className="ml-4 cursor-pointer" />
                        <p className="text-[#00C076] font-medium text-lg ml-4">$20,634</p>

                    </div>
                    <div className="flex items-center gap-5 w-full overflow-x-auto py-4 hidden-scrollbar">
                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.Clock} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h change</p>
                            </div>
                            <p className="text-[#00C076] font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        {divider}

                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.ArrowUp} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h high</p>
                            </div>
                            <p className="text-white font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        {divider}


                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.ArrowDown} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h low</p>
                            </div>
                            <p className="text-white font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        {divider}
                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.Chart} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h volume</p>
                            </div>
                            <p className="text-white font-sm font-medium">75.655.26</p>
                        </div>
                        {divider}
                    </div>
                </Frame>
                <Frame className="!pl-0 pr-0">
                    <div className="px-5">
                        {/* <div className="bg-[#1C2127] cursor-pointer flex justify-between overflow-auto hidden-scrollbar p-1 px-1 gap-2 rounded-[8px]">
                            {TABS.map((chi, idx) => <p className="text-white font-medium min-w-fit bg-[#E9F0FF0D] rounded-[8px] px-8 py-2 " key={idx} onClick={() => navigate(chi.path)} >{chi.label}</p>)}
                        </div> */}
                        <Tab tabs={TABS} queryParam="chart_tab" />

                        {/* <div className="flex justify-between items-center py-2 mt-5  overflow-x-auto w-full hidden-scrollbar">
                            {CHART_DURATION.map((chi, idx) => (
                                <p
                                    className="text-[#A7B1BC] font-medium cursor-pointer px-2"
                                    key={idx}
                                    onClick={() => navigate(chi.query)}
                                >
                                    {chi.label}
                                </p>
                            ))}
                            <img src={icons.AngleDown} alt="angle down" className="cursor-pointer px-2" />
                            <figure>{smallDivider}</figure>
                            <img src={icons.CandleChart} alt="candle chart" className="cursor-pointer px-2" />
                            <figure>{smallDivider}</figure>
                            <p className="text-[#A7B1BC] font-medium px-2 min-w-fit">Fx Indicators</p>
                            <figure>{smallDivider}</figure>
                            <img src={icons.Undo} alt="undo" className="cursor-pointer px-2" />
                            <img src={icons.Redo} alt="redo" className="cursor-pointer px-2" />
                            <figure>{smallDivider}</figure>
                        </div> */}

                        {/* orderbook */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center py-5">
                                {orderBooks.map((chi, idx) => <div key={idx} className={`${chi.selected && "bg-[#353945]"} cursor-pointer  w-[32px] h-[32px] grid place-items-center rounded-[4px]`}><figure key={idx} className="">{chi.icon}</figure></div>)}
                            </div>
                            <Select options={perPageOptions as any} value={perPage} onChange={(e) => handleSelectChange(e)} />
                        </div>
                        {/* table display */}
                        <table className="w-full table-auto">
                            {/* Table Head */}
                            <thead>
                                <tr className="text-[#A7B1BC] font-medium">
                                    {orderbookTableHead.map((chi, idx) => (
                                        <th key={idx} className="w-[49px] text-[9px] text-right px-2 py-1">
                                            {chi}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {orderbookDetails.map((chi, idx) => (
                                    <tr key={idx} className="text-xs text-white">
                                        <td className="text-left text-[#FF6838] font-medium px-2 py-1">
                                            {chi.amount}
                                        </td>
                                        <td className="text-right font-medium px-2 py-1">{chi.price}</td>
                                        <td className="text-right font-medium px-2 py-1">{chi.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Summary Section */}
                        <div className="flex gap-2 items-center p-3 justify-center">
                            <p className="text-[#25C26E] font-medium">36,641.20</p>
                            <figure>{arrowUp}</figure>
                            <p className="text-white font-medium">36,641.20</p>
                        </div>

                    </div>


                    {/* <div className="py-3">
                        <hr className="bg-[#A7B1BC] opacity-[5%] w-full h-[1px]" />
                        <figure className="p-5 cursor-pointer">{expand}</figure>
                        <hr className="bg-[#A7B1BC] opacity-[5%] h-[1px]" />
                    </div> */}

                    {/* <ApexChart /> */}


                </Frame>
                <Frame className="px-5 min-h-[350px]">
                    <Tab tabs={BOTTOM_TABS} queryParam="tab" />
                    <div className="flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-white">No Open Orders</h3>
                        <p className="text-[#A7B1BC] w-[294px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.</p>
                    </div>
                </Frame>

            </section>

        </main>
    )
}

export default Exchange