import React, { SetStateAction, useEffect, useState } from "react"
import icons from "../../../assets/icons/icons"
import images from "../../../assets/images/images"
import Components from "../../../components"
import Frame from "../../../components/frame"
import { useLocation, useNavigate } from "react-router"
import ApexChart from "../../../components/apexChart"
// import Tab from "../../../components/tabs"
import Select from "react-select"
import Tab from "../../../components/tabs"
import Drawer from "../../../components/drawer"
import { useQuery } from "../../../hooks/useQuery"
import useWindowSize from "../../../hooks/usewindowSize"
import { customSelectStyles } from "../../../lib/select-style"


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
            path: '?tab=chart_tab'
        },
        {
            label: 'Positions',
            tab: "positions",
            path: '&tab=positions'
        },
        {
            label: 'Order History',
            tab: "order-history",
            path: '&tab=order-history'
        },
        {
            label: 'Trade History',
            tab: "trade-history",
            path: '&tab=trade-history'
        }
    ];


    const CHART_DURATION = [
        {
            label: "Time",
            query: "time",
            is_active: false,
        },
        {
            label: "1H",
            query: "1h",
            is_active: false,
        },
        {
            label: "2H",
            query: "2h",
            is_active: false,
        },
        {
            label: "4H",
            query: "4h",
            is_active: false,
        },
        {
            label: "1D",
            query: "1D",
            is_active: true,
        },
        {
            label: "1W",
            query: "1w",
            is_active: false,
        },
        {
            label: "1M",
            query: "1m",
            is_active: false,
        }
    ]

    // const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParam = 'chart_tab';
        const defaultValue = 'charts';

        const queryParams = new URLSearchParams(location.search);
        if (!queryParams.get(queryParam)) {
            queryParams.set(queryParam, defaultValue);
            navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });
        }
    }, [location.pathname, location.search, navigate]);


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
            total: "28,020.98",
            is_total_low: true,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: true,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: true,
            is_normal: false,
            is_amount_low: true,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: false
        },
    ]

    const arrowUp = <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15651 3.606C6.40625 3.33545 6.38938 2.91368 6.11883 2.66394L3.78553 0.510093C3.53015 0.274361 3.13653 0.274359 2.88115 0.510088L0.547793 2.66394C0.277244 2.91367 0.260371 3.33544 0.510106 3.60599C0.75984 3.87654 1.18161 3.89341 1.45216 3.64368L2.66667 2.5226L2.66667 8.99996C2.66667 9.36815 2.96515 9.66663 3.33333 9.66663C3.70152 9.66663 4 9.36815 4 8.99996L4 2.52263L5.21445 3.64367C5.485 3.89341 5.90677 3.87654 6.15651 3.606Z" fill="#25C26E" />
    </svg>
    const line = <svg width="239" height="1" viewBox="0 0 239 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line opacity="0.5" y1="0.5" x2="239" y2="0.5" stroke="#394047" />
    </svg>


    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isBuy, setIsBuy] = useState(true)
    const [isSell, setIsSell] = useState(false)

    const handleOpenDrawer = (type: 'buy' | 'sell') => {
        setDrawerOpen(true)
        if (type === 'buy') {
            setIsBuy(true);
            setIsSell(false)
        } else if (type === 'sell') {
            setIsSell(true);
            setIsBuy(false)
        }
    };

    const drawerTabs = [{
        label: "Limit", is_active: true
    }, {
        label: "Markets", is_active: false
    },
    {
        label: "Stop-Limit", is_active: false
    }
    ]

    const info = <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4.5C4.86739 4.5 4.74022 4.55268 4.64645 4.64645C4.55268 4.74021 4.5 4.86739 4.5 5V7C4.5 7.13261 4.55268 7.25979 4.64645 7.35355C4.74022 7.44732 4.86739 7.5 5 7.5C5.13261 7.5 5.25979 7.44732 5.35356 7.35355C5.44732 7.25979 5.5 7.13261 5.5 7V5C5.5 4.86739 5.44732 4.74021 5.35356 4.64645C5.25979 4.55268 5.13261 4.5 5 4.5ZM5.19 2.54C5.06827 2.48999 4.93173 2.48999 4.81 2.54C4.74863 2.5638 4.69255 2.59948 4.645 2.645C4.60084 2.6936 4.56532 2.74941 4.54 2.81C4.51201 2.86934 4.49831 2.93441 4.5 3C4.49962 3.0658 4.51223 3.13103 4.53712 3.19195C4.562 3.25287 4.59866 3.30828 4.645 3.355C4.6936 3.39917 4.74941 3.43468 4.81 3.46C4.88575 3.49112 4.96798 3.50316 5.04948 3.49506C5.13097 3.48695 5.20922 3.45896 5.27736 3.41353C5.3455 3.36811 5.40144 3.30664 5.44026 3.23454C5.47908 3.16243 5.49959 3.08189 5.5 3C5.49816 2.86762 5.44637 2.74082 5.355 2.645C5.30745 2.59948 5.25138 2.5638 5.19 2.54ZM5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C10 4.34339 9.87067 3.69321 9.6194 3.08658C9.36813 2.47995 8.99983 1.92876 8.53554 1.46447C8.07124 1.00017 7.52005 0.631876 6.91342 0.380602C6.30679 0.129329 5.65661 0 5 0ZM5 9C4.20888 9 3.43552 8.7654 2.77772 8.32588C2.11992 7.88635 1.60723 7.26164 1.30448 6.53073C1.00173 5.79983 0.92252 4.99556 1.07686 4.21964C1.2312 3.44371 1.61216 2.73098 2.17158 2.17157C2.73099 1.61216 3.44372 1.2312 4.21964 1.07686C4.99557 0.922518 5.79983 1.00173 6.53074 1.30448C7.26164 1.60723 7.88635 2.11992 8.32588 2.77772C8.76541 3.43552 9 4.20887 9 5C9 6.06087 8.57858 7.07828 7.82843 7.82843C7.07828 8.57857 6.06087 9 5 9Z" fill="#A7B1BC" />
    </svg>

    const tinyDrop = <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 0.584971C5.40632 0.491846 5.2796 0.439575 5.1475 0.439575C5.01541 0.439575 4.88869 0.491846 4.795 0.584971L3 2.35497L1.23 0.584971C1.13632 0.491846 1.0096 0.439575 0.877505 0.439575C0.745412 0.439575 0.618686 0.491846 0.525005 0.584971C0.478141 0.631453 0.440943 0.686753 0.415559 0.747683C0.390175 0.808613 0.377106 0.873966 0.377106 0.939971C0.377106 1.00598 0.390175 1.07133 0.415559 1.13226C0.440943 1.19319 0.478141 1.24849 0.525005 1.29497L2.645 3.41497C2.69149 3.46184 2.74679 3.49903 2.80772 3.52442C2.86865 3.5498 2.934 3.56287 3 3.56287C3.06601 3.56287 3.13136 3.5498 3.19229 3.52442C3.25322 3.49903 3.30852 3.46184 3.355 3.41497L5.5 1.29497C5.54687 1.24849 5.58407 1.19319 5.60945 1.13226C5.63483 1.07133 5.6479 1.00598 5.6479 0.939971C5.6479 0.873966 5.63483 0.808613 5.60945 0.747683C5.58407 0.686753 5.54687 0.631453 5.5 0.584971Z" fill="#A7B1BC" />
    </svg>

    const dropAngleDown = <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.01257 4C2.00914 3.25771 1.00343 2.51788 -7.76133e-08 1.77558C0.00685687 1.18372 0.015994 0.591861 0.022851 -2.61269e-07L3.12721 2.30411L5.99542 0.00740544C5.99542 0.308268 5.99543 0.60667 5.99771 0.907533C5.99771 1.2084 5.99771 1.50678 6 1.80765C5.00114 2.53761 4.00686 3.26757 3.01257 4Z" fill="#A7B1BC" />
    </svg>

    const angleRight = <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82994 5.28995L2.58994 1.04995C2.49698 0.95622 2.38638 0.881826 2.26452 0.831057C2.14266 0.780288 2.01195 0.75415 1.87994 0.75415C1.74793 0.75415 1.61723 0.780288 1.49537 0.831057C1.37351 0.881826 1.26291 0.95622 1.16994 1.04995C0.983692 1.23731 0.87915 1.49076 0.87915 1.75495C0.87915 2.01913 0.983692 2.27259 1.16994 2.45995L4.70994 5.99995L1.16994 9.53995C0.983692 9.72731 0.87915 9.98076 0.87915 10.2449C0.87915 10.5091 0.983692 10.7626 1.16994 10.9499C1.26338 11.0426 1.3742 11.116 1.49604 11.1657C1.61787 11.2155 1.74834 11.2407 1.87994 11.2399C2.01155 11.2407 2.14201 11.2155 2.26385 11.1657C2.38569 11.116 2.4965 11.0426 2.58994 10.9499L6.82994 6.70995C6.92367 6.61699 6.99806 6.50638 7.04883 6.38453C7.0996 6.26267 7.12574 6.13196 7.12574 5.99995C7.12574 5.86794 7.0996 5.73723 7.04883 5.61537C6.99806 5.49351 6.92367 5.38291 6.82994 5.28995Z" fill="#A7B1BC" />
    </svg>

    const signOut = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0292 15.0007C11.5811 14.9799 12.0454 15.4104 12.0662 15.9623C12.1132 17.2065 12.1791 18.1145 12.244 18.7656C12.3079 19.4068 12.695 19.7926 13.2345 19.8586C13.8708 19.9363 14.7683 20 16 20C17.2317 20 18.1292 19.9363 18.7655 19.8586C19.3048 19.7926 19.6921 19.4067 19.7559 18.7653C19.8763 17.5568 20 15.4688 20 12C20 8.53118 19.8763 6.44321 19.7559 5.23468C19.6921 4.59333 19.3048 4.20736 18.7655 4.14144C18.1292 4.06366 17.2317 4 16 4C14.7683 4 13.8708 4.06365 13.2345 4.14143C12.695 4.20739 12.3079 4.59318 12.244 5.23437C12.1791 5.88545 12.1132 6.79354 12.0662 8.03772C12.0454 8.58961 11.5811 9.02012 11.0292 8.99929C10.4773 8.97845 10.0468 8.51417 10.0676 7.96228C10.1158 6.68524 10.1842 5.73543 10.2538 5.03611C10.4003 3.56595 11.4253 2.3477 12.9919 2.15621C13.7211 2.06707 14.7008 2 16 2C17.2992 2 18.2789 2.06707 19.0082 2.15622C20.5748 2.34774 21.5997 3.56655 21.7461 5.03643C21.875 6.33068 22 8.48847 22 12C22 15.5115 21.875 17.6693 21.7461 18.9636C21.5997 20.4334 20.5748 21.6523 19.0082 21.8438C18.2789 21.9329 17.2992 22 16 22C14.7008 22 13.7211 21.9329 12.9919 21.8438C11.4253 21.6523 10.4003 20.4341 10.2538 18.9639C10.1842 18.2646 10.1158 17.3148 10.0676 16.0377C10.0468 15.4858 10.4773 15.0215 11.0292 15.0007Z" fill="#A7B1BC" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z" fill="#A7B1BC" />
    </svg>



    const query = useQuery();
    const chart_tab = query.get("chart_tab");

    const { width } = useWindowSize();
    const isMobile = width < 768

    const check = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4732 4.8067C12.4112 4.74421 12.3375 4.69461 12.2563 4.66077C12.175 4.62692 12.0879 4.6095 11.9999 4.6095C11.9119 4.6095 11.8247 4.62692 11.7435 4.66077C11.6623 4.69461 11.5885 4.74421 11.5266 4.8067L6.55989 9.78003L4.47322 7.6867C4.40887 7.62454 4.33291 7.57566 4.24967 7.54286C4.16644 7.51006 4.07755 7.49397 3.9881 7.49552C3.89865 7.49706 3.81037 7.51622 3.72832 7.55188C3.64627 7.58754 3.57204 7.63902 3.50989 7.70336C3.44773 7.76771 3.39885 7.84367 3.36605 7.92691C3.33324 8.01014 3.31716 8.09903 3.31871 8.18848C3.32025 8.27793 3.3394 8.36621 3.37507 8.44826C3.41073 8.53031 3.4622 8.60454 3.52655 8.6667L6.08655 11.2267C6.14853 11.2892 6.22226 11.3388 6.3035 11.3726C6.38474 11.4065 6.47188 11.4239 6.55989 11.4239C6.64789 11.4239 6.73503 11.4065 6.81627 11.3726C6.89751 11.3388 6.97124 11.2892 7.03322 11.2267L12.4732 5.7867C12.5409 5.72427 12.5949 5.6485 12.6318 5.56417C12.6688 5.47983 12.6878 5.38876 12.6878 5.2967C12.6878 5.20463 12.6688 5.11356 12.6318 5.02923C12.5949 4.94489 12.5409 4.86912 12.4732 4.8067Z" fill="white" />
    </svg>


    return (
        <main>

            {/* navbar  */}
            <header className="flex fixed flex-col z-50 w-full h-[80px]   border-b border-[#32383F] bg-[#1C2127] p-4">
                <div className="flex justify-between items-center">
                    {/* left wrap  */}
                    <div className="flex gap-3 items-center cursor-pointer">
                        <img src={icons.Logo} alt="logo" />
                        <img src={icons.LogoType} alt="logo type" />
                        {!isMobile && <figure className="ml-10">{divider}</figure>}
                        {!isMobile && <div className="flex relative gap-14 items-center ml-5">
                            {MENU_CONTENT.slice(0, -1).map((chi, idx) => (
                                <p
                                    className={`text-[#A7B1BC] font-medium relative cursor-pointer group transition-all duration-300 
            ${location.pathname === chi.path ? 'text-white' : ''}
            hover:text-white`}
                                    key={idx}
                                    onClick={() => navigate(chi.path)}
                                >
                                    {chi.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 rounded-[8px] bg-white transition-all duration-300
              ${location.pathname === chi.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    ></span>
                                </p>
                            ))}
                        </div>}
                    </div>


                    {/* right wrap */}
                    <div className="flex gap-3 items-center  pr-3">
                        {!isMobile ? <div className="flex gap-2 cursor-pointer items-center bg-[#12171D] p-2 px-5 rounded-[8px]">
                            <img src={images.Avatar} alt="avatar" className="w-[32px] h-[32px] cursor-pointer" />
                            <p className="text-[#A7B1BC] font-medium text-sm">Hassan Lam...</p>
                            <figure className="ml-2">{angleRight}</figure>
                        </div> : <img src={images.Avatar} alt="avatar" className="w-[32px] h-[32px] cursor-pointer" />}

                        <img src={icons.Globe} alt="globe" className="cursor-pointer" />
                        {!isMobile && <figure className="cursor-pointer">{signOut}</figure>}
                        {isMobile && <div className="ml-2">
                            <Components.HamburgerMenu open={isOpen} setOpen={setOpen} />
                        </div>}
                        <Components.MenuDropdown content={MENU_CONTENT} open={isOpen} />
                    </div>
                </div>
            </header>


            <section className="h-[calc(100vh-80px)] w-full  overflow-auto absolute flex flex-col gap-2  pt-2 pb-24 bottom-0">
                {/* top wrap */}
                <Frame className=" lg:flex lg:items-center">
                    <div className="flex  gap-2 items-center ">
                        <div className=" flex ">
                            <img src={icons.Bitcoin} alt="bitcoin" />
                            <img src={icons.Dollarcoin} alt="dollarcoin" className="border-[#20252B] rounded-full -ml-1" />
                        </div>
                        <p className="text-white font-medium text-lg">BTC/USDT</p>

                        <img src={icons.Dropdown} alt="dropdown" className="ml-4 cursor-pointer" />
                        <p className="text-[#00C076] font-medium text-lg ml-4">$20,634</p>

                    </div>
                    <div className="flex items-center lg:gap-10 gap-5 w-full overflow-x-auto py-4 hidden-scrollbar">
                        {!isMobile && <div className="ml-5">
                            {divider}
                        </div>}
                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.Clock} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h change</p>
                            </div>
                            <p className="text-[#00C076] font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        <figure>{divider}</figure>

                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.ArrowUp} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h high</p>
                            </div>
                            <p className="text-white font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        <figure>{divider}</figure>


                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.ArrowDown} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h low</p>
                            </div>
                            <p className="text-white font-sm font-medium">520.80 +1.25%</p>
                        </div>
                        <figure>{divider}</figure>
                        <div className="flex-shrink-0 mt-4 flex flex-col gap-1">
                            <div className="flex gap-1 items-center">
                                <img src={icons.Chart} alt="clock" />
                                <p className="text-[#A7B1BC] text-xs">24h volume</p>
                            </div>
                            <p className="text-white font-sm font-medium">75.655.26</p>
                        </div>

                    </div>
                </Frame>
                <div className="lg:w-[calc(100%-335px)] pr-2">
                    <div className=" lg:w-full lg:flex lg:gap-1">

                        {/* first frame start */}
                        <Frame className="!pl-0 pr-0 relative lg:w-[75%] w-full lg:ml-1">
                            <div className="px-5">
                                {isMobile && <Tab tabs={TABS} queryParam="chart_tab" />}

                                {chart_tab === "charts" && <div className="flex lg:justify-normal lg:gap-4 justify-between items-center py-2 mt-5  overflow-x-auto w-full hidden-scrollbar">
                                    {CHART_DURATION.map((chi, idx) => (
                                        <div key={idx} className={`${chi.is_active && "bg-[#555C63]"} rounded-[100px]`}>
                                            <p
                                                className="text-[#A7B1BC] font-medium cursor-pointer px-2"
                                                onClick={() => navigate(chi.query)}
                                            >
                                                {chi.label}
                                            </p>
                                        </div>
                                    ))}
                                    <img src={icons.AngleDown} alt="angle down" className="cursor-pointer px-2" />
                                    <figure>{smallDivider}</figure>
                                    <img src={icons.CandleChart} alt="candle chart" className="cursor-pointer px-2" />
                                    <figure>{smallDivider}</figure>
                                    <p className="text-[#A7B1BC] font-medium px-2 min-w-fit">Fx Indicators</p>
                                    <figure>{smallDivider}</figure>
                                    <img src={icons.Undo} alt="undo" className="cursor-pointer px-2 lg:px-0" />
                                    <img src={icons.Redo} alt="redo" className="cursor-pointer px-2 lg:px-0" />
                                    <figure>{smallDivider}</figure>
                                    {!isMobile && <figure className="absolute right-0 cursor-pointer mr-4">{expand}</figure>}
                                </div>}

                                {/* orderbook */}
                                {chart_tab === "chart_orderbook" && <>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center py-5">
                                            {orderBooks.map((chi, idx) => <div key={idx} className={`${chi.selected && "bg-[#353945]"} cursor-pointer  w-[32px] h-[32px] grid place-items-center rounded-[4px]`}><figure key={idx} className="">{chi.icon}</figure></div>)}
                                        </div>
                                        <Select options={perPageOptions as any} value={perPage} onChange={(e) => handleSelectChange(e)} styles={customSelectStyles} />
                                    </div>
                                    {/* table display */}
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
                                        <tbody className="space-y-3">
                                            {orderbookDetails.map((chi, idx) => (
                                                <React.Fragment key={idx}>
                                                    <tr className="text-xs text-white">
                                                        <td className="text-left text-[#FF6838] font-medium px-2 py-2">
                                                            {chi.price}
                                                        </td>
                                                        <td className={`text-right font-medium px-2 py-2 ${chi.is_amount_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
                                                            {chi.amount}
                                                        </td>
                                                        <td className={`text-right font-medium px-2 py-2 ${chi.is_total_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
                                                            {chi.total}
                                                        </td>
                                                    </tr>


                                                    {(idx + 1) % 5 === 0 && (
                                                        <tr>
                                                            <td colSpan={3} className="text-center p-3">
                                                                <div className="flex gap-2 items-center justify-center">
                                                                    <p className="text-[#25C26E] font-medium">36,641.20</p>
                                                                    <figure>{arrowUp}</figure>
                                                                    <p className="text-white font-medium">36,641.20</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}

                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                                }
                            </div>

                            {chart_tab === "chart_orderbook" && <>
                                {isMobile &&
                                    <div className="flex justify-between mt-5 gap-2 items-center bg-[#262932] p-3">
                                        <Components.Button label="Buy" onClick={() => handleOpenDrawer("buy")} backgroundColor="bg-[#25C26E]" />
                                        <Components.Button label="Sell" onClick={() => handleOpenDrawer("sell")} backgroundColor="bg-[#FF554A]" />
                                    </div>}
                            </>}



                            {isMobile && <>
                                {chart_tab === "charts" && <div className="py-3">
                                    <hr className="bg-[#A7B1BC] opacity-[5%] w-full h-[1px]" />
                                    <figure className="p-5 cursor-pointer">{expand}</figure>
                                    <hr className="bg-[#A7B1BC] opacity-[5%] h-[1px]" />
                                </div>}
                            </>
                            }

                            {chart_tab === "charts" && <ApexChart onClickBuy={() => handleOpenDrawer("buy")} onClickSell={() => handleOpenDrawer("sell")} />}

                        </Frame>
                        {/* first frame end */}

                        {/* desktop order tabs */}
                        {/* second frame start */}
                        {!isMobile &&
                            <Frame className=" lg:!px-2 lg:w-[24.6%] lg:mr-0">
                                <div className="overflow-auto hidden-scrollbar">
                                    <Tab tabs={TABS} queryParam="chart_tab" />
                                </div>
                                {chart_tab !== "chart_orderbook" && <>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center py-5 overflow-auto hidden-scrollbar">
                                            {orderBooks.map((chi, idx) => <div key={idx} className={`${chi.selected && "bg-[#353945]"} cursor-pointer  w-[32px] h-[32px] grid place-items-center rounded-[4px]`}><figure key={idx} className="">{chi.icon}</figure></div>)}
                                        </div>
                                        <Select options={perPageOptions as any} value={perPage} onChange={(e) => handleSelectChange(e)} />
                                    </div>
                                    {/* table display */}
                                    {/* table display */}
                                    <div className="overflow-auto hidden-srollbar">
                                        <table className="w-full table-auto ">
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
                                                    <React.Fragment key={idx}>
                                                        <tr className="text-xs text-white">
                                                            <td className="text-left text-[#FF6838] font-medium px-2 py-2">
                                                                {chi.price}
                                                            </td>
                                                            <td className={`text-right font-medium px-2 py-2 ${chi.is_amount_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
                                                                {chi.amount}
                                                            </td>
                                                            <td className={`text-right font-medium px-2 py-2 ${chi.is_total_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
                                                                {chi.total}
                                                            </td>
                                                        </tr>

                                                        {/* Show summary after every 5 rows */}
                                                        {(idx + 1) % 5 === 0 && (
                                                            <tr>
                                                                <td colSpan={3} className="text-center p-3">
                                                                    <div className="flex gap-2 items-center justify-center">
                                                                        <p className="text-[#25C26E] font-medium">36,641.20</p>
                                                                        <figure>{arrowUp}</figure>
                                                                        <p className="text-white font-medium">36,641.20</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </>}
                            </Frame>
                        }
                        {/* second frame end */}

                    </div>

                    {/* third frame start */}
                    {!isMobile &&
                        <Frame className="overflow-auto !px-2 top-[130px] pb-10 hidden-scrollbar absolute right-0 w-[327px] mr-2">
                            <section className="w-full flex flex-col gap-6">
                                <div className="flex  rounded-[10px] bg-[#1C2127] justify-between items-center ">
                                    <button className={`${isBuy && "border-[#25C26E] border rounded-l-[10px] rounded-r-[10px] text-white "} text-center   w-full p-2 text-[#A7B1BC]  font-medium text-xs`} onClick={() => { setIsBuy(true); setIsSell(false) }}>Buy</button>
                                    <button className={`${isSell && "border-[#FF554A] border rounded-l-[10px] rounded-r-[10px] text-white"} text-center w-full p-2  text-[#A7B1BC] font-medium text-xs`} onClick={() => { setIsSell(true); setIsBuy(false) }}>Sell</button>
                                </div>

                                <div className="flex gap-3 justify-between items-center hidden-scrollbar overflow-auto">
                                    {drawerTabs.map((chi, idx) => <p key={idx} className={`${chi.is_active && "bg-[#353945] text-white "} px-[24px] cursor-pointer text-[#A7B1BC] min-w-fit font-medium py-[6px] rounded-[100px]`}>{chi.label}</p>)}
                                </div>

                                <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                                    <div className="flex gap-1 items-center ">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Limit price</p>
                                        <p className="translate-y-[1px]">{info}</p>
                                    </div>
                                    <p className="font-medium text-xs text-[#A7B1BC]">0.00 USD</p>
                                </div>

                                <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                                    <div className="flex gap-1 items-center ">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Amount</p>
                                        <p className="translate-y-[1px]">{info}</p>
                                    </div>
                                    <p className="font-medium text-xs text-[#A7B1BC]">0.00 USD</p>
                                </div>



                                <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                                    <div className="flex gap-1 items-center ">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Type</p>
                                        <p className="translate-y-[1px]">{info}</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-3 items-center">
                                            <p className="font-medium text-xs text-[#A7B1BC]">Good till cancelled</p>
                                            <figure className="cursor-pointer">{tinyDrop}</figure>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" />
                                    <div className="flex gap-1 items-center">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Post Only</p>
                                        <figure className="translate-y-[1px]">{info}</figure>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="font-medium text-xs text-[#A7B1BC]">Total</p>
                                    <p className="font-medium text-xs text-[#A7B1BC]">0.00</p>
                                </div>

                                <Components.Button label="Buy BTC" className="bg-gradient-to-r from-gradientStart !font-normal via-gradientMid to-gradientEnd" onClick={() => { }} />

                                {line}

                                <div className="flex justify-between items-baseline">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Total account value</p>
                                        <p className="text-white font-bold text-sm">0.00</p>
                                    </div>
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <p className="font-medium text-xs text-[#A7B1BC] ">NGN</p>
                                        <figure >{dropAngleDown}</figure>
                                    </div>
                                </div>

                                <div className="flex justify-between items-baseline">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Open Orders</p>
                                        <p className="text-white font-bold text-sm">0.00</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-xs text-[#A7B1BC]">Available</p>
                                        <p className="text-white font-bold text-sm">0.00</p>
                                    </div>
                                </div>

                                <div>
                                    <Components.Button label="Deposit" backgroundColor="bg-[#2764FF]" className="!w-24" onClick={() => { }} />
                                </div>

                            </section>
                        </Frame>

                    }
                    {/* third frame end */}
                    <Frame className="px-5 lg:mt-1 lg:ml-1  w-full min-h-[350px]">
                        <Tab tabs={BOTTOM_TABS} queryParam="chart_tab" />
                        {/* Center this content */}
                        <div className="flex flex-col gap-4 items-center justify-center text-center min-h-[350px]">
                            <h3 className="text-white font-bold text-lg">No Open Orders</h3>
                            <p className="text-[#A7B1BC] w-[294px] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.
                            </p>
                        </div>
                    </Frame>
                </div>
            </section>


            {/* drawer */}
            <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} >
                <section className="p-4 w-full mt-4 flex flex-col gap-6">
                    <div className="flex  rounded-[10px] bg-[#1C2127] justify-between items-center ">
                        <button className={`${isBuy && "border-[#25C26E] border rounded-l-[10px] rounded-r-[10px] text-white "} text-center   w-full p-2 text-[#A7B1BC]  font-medium text-xs`} onClick={() => { setIsBuy(true); setIsSell(false) }}>Buy</button>
                        <button className={`${isSell && "border-[#FF554A] border rounded-l-[10px] rounded-r-[10px] text-white"} text-center w-full p-2  text-[#A7B1BC] font-medium text-xs`} onClick={() => { setIsBuy(false); setIsSell(true) }} >Sell</button>
                    </div>

                    <div className="flex gap-3 justify-between items-center">
                        {drawerTabs.map((chi, idx) => <p key={idx} className={`${chi.is_active && "bg-[#353945] text-white "} px-[24px] text-[#A7B1BC] min-w-fit font-medium py-[6px] rounded-[100px]`}>{chi.label}</p>)}
                    </div>

                    <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                        <div className="flex gap-1 items-center ">
                            <p className="font-medium text-xs text-[#A7B1BC]">Limit price</p>
                            <p className="translate-y-[1px]">{info}</p>
                        </div>
                        <p className="font-medium text-xs text-[#A7B1BC]">0.00 USD</p>
                    </div>

                    <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                        <div className="flex gap-1 items-center ">
                            <p className="font-medium text-xs text-[#A7B1BC]">Amount</p>
                            <p className="translate-y-[1px]">{info}</p>
                        </div>
                        <p className="font-medium text-xs text-[#A7B1BC]">0.00 USD</p>
                    </div>

                    <div className="flex justify-between items-center gap-2 px-[15px] py-[14px] border border-[#373B3F]  rounded-[8px]">
                        <div className="flex gap-1 items-center ">
                            <p className="font-medium text-xs text-[#A7B1BC]">Type</p>
                            <p className="translate-y-[1px]">{info}</p>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center">
                                <p className="font-medium text-xs text-[#A7B1BC]">Good till cancelled</p>
                                <figure className="cursor-pointer">{tinyDrop}</figure>
                            </div>
                        </div>

                    </div>
                    {/* checkbox */}
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-xs text-[#A7B1BC]">Total</p>
                        <p className="font-medium text-xs text-[#A7B1BC]">0.00</p>
                    </div>
                    {/* button */}
                    <Components.Button label="Buy BTC" className="bg-gradient-to-r from-gradientStart !font-normal via-gradientMid to-gradientEnd" onClick={() => { }} />

                    {line}

                    <div className="flex justify-between items-baseline">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-xs text-[#A7B1BC]">Total account value</p>
                            <p className="text-white font-bold text-sm">0.00</p>
                        </div>
                        <div className="flex gap-1 items-center cursor-pointer">
                            <p className="font-medium text-xs text-[#A7B1BC] ">NGN</p>
                            <figure >{dropAngleDown}</figure>
                        </div>
                    </div>

                    <div className="flex justify-between items-baseline">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-xs text-[#A7B1BC]">Open Orders</p>
                            <p className="text-white font-bold text-sm">0.00</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-xs text-[#A7B1BC]">Available</p>
                            <p className="text-white font-bold text-sm">0.00</p>
                        </div>
                    </div>

                    <div>
                        <Components.Button label="Deposit" backgroundColor="bg-[#2764FF]" className="!w-24" onClick={() => { }} />
                    </div>

                </section>
            </Drawer>
        </main>
    )
}

export default Exchange