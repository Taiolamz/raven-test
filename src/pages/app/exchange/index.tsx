import React, { useEffect, useState } from "react"
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
// import { MenuDropdown } from "../../../components/menuDropdown"


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
            is_amount_high: true
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
            is_amount_high: true
        },
        {
            price: "36920.12",
            amount: '0.758965',
            total: "28,020.98",
            is_total_low: false,
            is_normal: false,
            is_amount_low: false,
            is_amount_high: true
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


    const coin = <svg width="52" height="32" viewBox="0 0 52 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11486_5650)">
            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A" />
            <path d="M23.032 14.02C23.346 11.924 21.749 10.797 19.567 10.045L20.275 7.205L18.547 6.775L17.857 9.54C17.403 9.426 16.937 9.32 16.472 9.214L17.167 6.431L15.439 6L14.731 8.839C14.355 8.753 13.985 8.669 13.627 8.579L13.629 8.57L11.245 7.975L10.785 9.821C10.785 9.821 12.068 10.115 12.041 10.133C12.741 10.308 12.867 10.771 12.846 11.139L12.04 14.374C12.088 14.386 12.15 14.404 12.22 14.431L12.037 14.386L10.907 18.918C10.821 19.13 10.604 19.449 10.114 19.328C10.132 19.353 8.858 19.015 8.858 19.015L8 20.993L10.25 21.554C10.668 21.659 11.078 21.769 11.481 21.872L10.766 24.744L12.493 25.174L13.201 22.334C13.673 22.461 14.131 22.579 14.579 22.691L13.873 25.519L15.601 25.949L16.316 23.083C19.264 23.641 21.48 23.416 22.413 20.75C23.165 18.604 22.376 17.365 20.825 16.558C21.955 16.298 22.805 15.555 23.032 14.02ZM19.082 19.558C18.549 21.705 14.934 20.544 13.762 20.253L14.712 16.448C15.884 16.741 19.641 17.32 19.082 19.558ZM19.617 13.989C19.13 15.942 16.122 14.949 15.147 14.706L16.007 11.256C16.982 11.499 20.125 11.952 19.617 13.989Z" fill="white" />
        </g>
        <g clip-path="url(#clip1_11486_5650)">
            <path d="M51.5 16C51.5 24.5604 44.5604 31.5 36 31.5C27.4396 31.5 20.5 24.5604 20.5 16C20.5 7.43959 27.4396 0.5 36 0.5C44.5604 0.5 51.5 7.43959 51.5 16Z" fill="#6CDE07" stroke="#20252B" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43 19.154C43 21.724 40.914 23.43 37.834 23.687V26H35.724V23.664C33.6407 23.4291 31.6613 22.6289 30 21.35L31.552 19.224C32.935 20.299 34.244 21 35.821 21.234V16.654C32.28 15.766 30.631 14.481 30.631 11.841C30.631 9.318 32.692 7.589 35.724 7.355V6H37.834V7.402C39.4831 7.58518 41.0554 8.19754 42.394 9.178L41.035 11.374C39.968 10.603 38.877 10.112 37.737 9.879V14.318C41.424 15.206 43 16.631 43 19.154ZM35.82 13.827V9.715C34.293 9.832 33.493 10.65 33.493 11.678C33.493 12.658 33.953 13.29 35.821 13.828L35.82 13.827ZM40.138 19.317C40.138 18.267 39.628 17.636 37.737 17.098V21.328C39.265 21.21 40.138 20.439 40.138 19.318V19.317Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_11486_5650">
                <rect width="32" height="32" fill="white" />
            </clipPath>
            <clipPath id="clip1_11486_5650">
                <rect width="32" height="32" fill="white" transform="translate(20)" />
            </clipPath>
        </defs>
    </svg>

    const bitCoin = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2094_4446)">
            <path d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z" fill="#F7931A" stroke="#262932" stroke-width="2" />
            <path d="M23.032 14.02C23.346 11.924 21.749 10.797 19.567 10.045L20.275 7.205L18.547 6.775L17.857 9.54C17.403 9.426 16.937 9.32 16.472 9.214L17.167 6.431L15.439 6L14.731 8.839C14.355 8.753 13.985 8.669 13.627 8.579L13.629 8.57L11.245 7.975L10.785 9.821C10.785 9.821 12.068 10.115 12.041 10.133C12.741 10.308 12.867 10.771 12.846 11.139L12.04 14.374C12.088 14.386 12.15 14.404 12.22 14.431L12.037 14.386L10.907 18.918C10.821 19.13 10.604 19.449 10.114 19.328C10.132 19.353 8.858 19.015 8.858 19.015L8 20.993L10.25 21.554C10.668 21.659 11.078 21.769 11.481 21.872L10.766 24.744L12.493 25.174L13.201 22.334C13.673 22.461 14.131 22.579 14.579 22.691L13.873 25.519L15.601 25.949L16.316 23.083C19.264 23.641 21.48 23.416 22.413 20.75C23.165 18.604 22.376 17.365 20.825 16.558C21.955 16.298 22.805 15.555 23.032 14.02ZM19.082 19.558C18.549 21.705 14.934 20.544 13.762 20.253L14.712 16.448C15.884 16.741 19.641 17.32 19.082 19.558ZM19.617 13.989C19.13 15.942 16.122 14.949 15.147 14.706L16.007 11.256C16.982 11.499 20.125 11.952 19.617 13.989Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_2094_4446">
                <rect width="32" height="32" fill="white" />
            </clipPath>
        </defs>
    </svg>

    const tCoin = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2094_4447)">
            <path d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z" fill="#26A17B" stroke="#262932" stroke-width="2" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.622 17.564V17.562C17.512 17.57 16.945 17.604 15.68 17.604C14.67 17.604 13.959 17.574 13.709 17.562V17.565C9.821 17.394 6.919 16.717 6.919 15.907C6.919 15.098 9.821 14.421 13.709 14.247V16.891C13.963 16.909 14.691 16.952 15.697 16.952C16.904 16.952 17.509 16.902 17.622 16.892V14.249C21.502 14.422 24.397 15.099 24.397 15.907C24.397 16.717 21.502 17.392 17.622 17.564ZM17.622 13.974V11.608H23.036V8H8.295V11.608H13.709V13.973C9.309 14.175 6 15.047 6 16.091C6 17.135 9.309 18.006 13.709 18.209V25.791H17.622V18.207C22.015 18.005 25.316 17.134 25.316 16.091C25.316 15.048 22.015 14.177 17.622 13.974Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_2094_4447">
                <rect width="32" height="32" fill="white" />
            </clipPath>
        </defs>
    </svg>

    const searchIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.99326 0.00237398C5.69301 0.00113582 4.41829 0.36494 3.31287 1.05275C2.4977 1.56292 1.79523 2.23549 1.2488 3.02898C0.70236 3.82246 0.323552 4.72003 0.135737 5.6663C-0.0520771 6.61256 -0.0449199 7.58746 0.156786 8.53083C0.358491 9.47421 0.750464 10.3661 1.30851 11.1513C1.86655 11.9366 2.57883 12.5987 3.40141 13.0967C4.22398 13.5947 5.1394 13.9181 6.09119 14.0469C7.04297 14.1758 8.01095 14.1073 8.93536 13.8457C9.85978 13.5841 10.721 13.135 11.466 12.526L10.3945 11.4424C9.42921 12.2173 8.22884 12.6366 6.99326 12.6306C5.89908 12.6301 4.8296 12.3038 3.91992 11.6929C3.01025 11.082 2.30122 10.214 1.88239 9.19837C1.46356 8.18278 1.35374 7.06526 1.56681 5.98699C1.77987 4.90872 2.30624 3.91808 3.07944 3.14025C3.85264 2.36242 4.83796 1.8323 5.91092 1.61685C6.98387 1.40141 8.09631 1.51031 9.10768 1.92981C10.1191 2.3493 10.984 3.06057 11.5932 3.97374C12.2024 4.8869 12.5285 5.96099 12.5304 7.0603C12.5331 8.24444 12.152 9.39728 11.4447 10.3445L12.5233 11.4305C13.3396 10.3884 13.8473 9.13652 13.9885 7.81804C14.1297 6.49956 13.8985 5.16779 13.3215 3.97513C12.7445 2.78247 11.845 1.77712 10.7258 1.07412C9.60667 0.371122 8.31314 -0.00111528 6.99326 2.51005e-06V0.00237398Z" fill="#A5B1BD" />
        <path d="M15.7851 15.7793C15.6437 15.9207 15.4523 16 15.2529 16C15.0534 16 14.8621 15.9207 14.7207 15.7793L11.4731 12.526C11.8589 12.2015 12.2107 11.8384 12.5233 11.4424L15.7851 14.7194C15.9229 14.8611 16.0001 15.0513 16.0001 15.2494C16.0001 15.4475 15.9229 15.6377 15.7851 15.7793Z" fill="#A5B1BD" />
        <path d="M7.70033 4.03513C7.70098 4.15071 7.67507 4.26489 7.62461 4.36876C7.57415 4.47263 7.5005 4.5634 7.4094 4.63399C7.34059 4.69219 7.25982 4.73438 7.17287 4.75756C7.14419 4.77208 7.11272 4.78019 7.08062 4.78132C6.50354 4.93661 5.99354 5.27877 5.62963 5.7548C5.26573 6.23083 5.06824 6.81415 5.06776 7.41438C5.07019 7.96194 5.23487 8.49638 5.54082 8.94954C5.54082 8.94954 5.55738 8.9733 5.56448 8.98043C5.69091 9.11724 5.76032 9.29755 5.75844 9.48423C5.75942 9.64983 5.70605 9.81113 5.60661 9.9432C5.50716 10.0753 5.36719 10.1707 5.20831 10.2148C5.04944 10.2589 4.88053 10.2492 4.72771 10.1872C4.57489 10.1251 4.44668 10.0142 4.36291 9.87158C4.27507 9.75071 4.19602 9.62365 4.12638 9.49136C3.76933 8.85806 3.58265 8.14222 3.58473 7.41438C3.58436 6.58398 3.82697 5.7718 4.28242 5.07886C4.73788 4.38592 5.38606 3.8428 6.14633 3.51707C6.35906 3.42868 6.57807 3.35639 6.80152 3.30082C6.85216 3.29059 6.90363 3.28502 6.95527 3.28418C7.0534 3.28387 7.15061 3.30309 7.2413 3.34075C7.33199 3.37841 7.41437 3.43375 7.48365 3.50358C7.55293 3.5734 7.60774 3.65633 7.64493 3.74756C7.68213 3.8388 7.70095 3.93654 7.70033 4.03513Z" fill="#A5B1BD" />
    </svg>

const [dropCoins, setDropCoins] = useState(false)


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


            <section className="h-[calc(100vh-80px)] w-full   overflow-auto absolute flex flex-col gap-2  pt-2 pb-24 bottom-0">
                {/* top wrap */}
                <Frame className=" lg:flex lg:items-center">
                    <div className="flex  gap-2 items-center ">
                        <div className="flex">
                            {isMobile ? <> <img src={icons.Bitcoin} alt="bitcoin" />
                                <img src={icons.Dollarcoin} alt="dollarcoin" className="border-[#20252B]  rounded-full -ml-1 " /></> : <figure>{coin}</figure>}

                        </div>
                        <p className="text-white font-medium text-lg lg:ml-0 m l">BTC/USDT</p>

                        <img src={icons.Dropdown} alt="dropdown" className="ml-4 cursor-pointer" onClick={() =>setDropCoins(!dropCoins)} />
                        <p className="text-[#00C076] font-medium text-lg ml-4">$20,634</p>

                        {/* dropdown */}
                        <Frame
  className={`lg:w-[444px] w-[320px] shadow-lg absolute z-[999] pr-2 overflow-hidden hidden-scrollbar lg:top-24 top-14 ${
    dropCoins ? "h-[458px] opacity-100" : "h-0 opacity-0"
  } duration-300 transition-all`}
>
  <div className="w-full h-full flex flex-col">
    {/* Header */}
    <p className="font-bold text-white">Select Market</p>

    {/* Search Input */}
    <div className="grid place-items-center relative border-b py-3 border-[#394047]">
      <figure className="absolute left-0 ml-3">{searchIcon}</figure>
      <input
        type="text"
        placeholder="Search"
        className="text-[#A5B1BD] pl-8 w-full placeholder:text-[#A5B1BD] border-[#373B3F] border rounded-[8px] p-1 bg-[#20252B]"
      />
    </div>

    {/* Filter Options */}
    <div className="flex gap-3 items-center py-3 border-b border-[#394047]">
      <p className="text-white font-medium text-sm bg-[#353945] p-1 px-[8px] rounded-[100px] cursor-pointer">All</p>
      <p className="text-[#A7B1BC] font-medium text-sm cursor-pointer">USD</p>
      <p className="text-[#A7B1BC] font-medium text-sm cursor-pointer">BTC</p>
    </div>

    {/* Scrollable Content */}
    <div className="flex flex-col gap-3 mt-5 w-full overflow-y-auto h-[calc(100%-120px)] hidden-scrollbar">
      {[...Array(100)].map((_, idx) => (
        <div className="flex gap-10 items-center" key={idx}>
          <div className="flex">
            <figure>{bitCoin}</figure>
            <figure className="-ml-2">{tCoin}</figure>
          </div>
          <p className="text-sm font-medium text-[#A7B1BC] min-w-fit">BTC - USDT</p>
          <p className="text-sm font-medium text-[#A7B1BC]">$23,234.6</p>
          <p className="text-[#25C26E] font-medium text-sm">+0.005%</p>
        </div>
      ))}
    </div>
  </div>
</Frame>


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
                                        {/* <div className="flex gap-5 items-center bg-[#353945] p-1 rounded-[4px]"> */}
                                        {/* <p>10</p>
                                            <figure>{selectAngleDown}</figure> */}
                                        {/* </div> */}
                                    </div>
                                    {/* table display */}
                                    {/* table display */}

                                    <div className="overflow-auto max-h-[400px]">
                                        <table className="w-full table-auto">
                                            {/* Table Head */}
                                            <thead className="sticky top-0 bg-[#1E293B]">
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
                                                            <td
                                                                className={`text-right font-medium px-2 py-2 ${chi.is_amount_low && 'bg-[#FF6838] bg-opacity-[15%]'
                                                                    }`}
                                                            >
                                                                {chi.amount}
                                                            </td>
                                                            <td
                                                                className={`text-right font-medium px-2 py-2 ${chi.is_total_low && 'bg-[#FF6838] bg-opacity-[15%]'
                                                                    }`}
                                                            >
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
                                    </div>

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
                                        <Select options={perPageOptions as any} value={perPage} onChange={(e) => handleSelectChange(e)} styles={customSelectStyles} />
                                    </div>
                                    {/* table display */}
                                    {/* table display */}
                                    <div className="overflow-auto hidden-srollbar">
                                        <table className="w-full table-auto ">
                                            {/* Table Head */}
                                            <thead>
                                                <tr className="text-[#A7B1BC] font-medium ">
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
                                                            <td className="text-left text-[#FF6838] font-medium px-2 py-4">
                                                                {chi.price}
                                                            </td>
                                                            <td className={`text-right font-medium px-2 py-4  ${chi.is_amount_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
                                                                {chi.amount}
                                                            </td>
                                                            <td className={`text-right font-medium px-2 py-4  ${chi.is_total_low && 'bg-[#FF6838] bg-opacity-[15%]'}`}>
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

                                <Components.Button label={isBuy ? "Buy BTC" : "Sell BTC"} className="bg-gradient-to-r from-gradientStart !font-normal via-gradientMid to-gradientEnd" onClick={() => { }} />

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
                    <Components.Button label={isBuy ? "Buy BTC" : "Sell BTC"} className="bg-gradient-to-r from-gradientStart !font-normal via-gradientMid to-gradientEnd" onClick={() => { }} />

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