import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import Components from '.';
import useWindowSize from '../hooks/usewindowSize';
import icons from '../assets/icons/icons';

export const ApexChart = ({ onClickBuy, onClickSell }: { onClickBuy: () => void, onClickSell: () => void }) => {
    // const candlestickData = Array.from({ length: 100 }, (_, i) => {
    //     const open = Math.random() * (200 - 100) + 100;
    //     const close = Math.random() * (200 - 100) + 100;
    //     const high = Math.max(open, close) + Math.random() * 5;
    //     const low = Math.min(open, close) - Math.random() * 5;
    //     const date = new Date(2021, 0, i + 1);

    //     return {
    //         x: date.getTime(),
    //         y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
    //     };
    // });

    // const candlestickData = [
    //     { x: new Date('2021-01-01').getTime(), y: [100.10, 102.40, 99.90, 101.50] }, // Rising
    //     { x: new Date('2021-01-02').getTime(), y: [101.50, 103.00, 100.80, 102.00] }, // Falling
    //     { x: new Date('2021-01-03').getTime(), y: [102.00, 104.50, 101.50, 103.80] }, // Rising
    //     { x: new Date('2021-01-04').getTime(), y: [103.80, 105.00, 103.00, 103.20] }, // Falling
    //     { x: new Date('2021-01-05').getTime(), y: [103.20, 106.00, 103.00, 105.50] }, // Rising
    //     { x: new Date('2021-01-06').getTime(), y: [105.50, 107.00, 104.50, 104.80] }, // Falling
    //     { x: new Date('2021-01-07').getTime(), y: [104.80, 108.00, 104.00, 107.20] }, // Rising
    //     { x: new Date('2021-01-08').getTime(), y: [107.20, 109.20, 106.50, 107.00] }, // Falling
    //     { x: new Date('2021-01-09').getTime(), y: [107.00, 110.50, 106.80, 109.50] }, // Rising
    //     { x: new Date('2021-01-10').getTime(), y: [109.50, 111.00, 108.00, 108.80] }, // Falling
    // ];

    const generateCandlestickData = (numPoints: number) => {
        const data: { x: number; y: [number, number, number, number] }[] = [];
        let basePrice = 100;

        for (let i = 0; i < numPoints; i++) {
            const open = basePrice + Math.random() * 10 - 5;
            const close = open + Math.random() * 10 - 5;
            const high = Math.max(open, close) + Math.random() * 5;
            const low = Math.min(open, close) - Math.random() * 5;

            data.push({
                x: new Date(2021, 0, i + 1).getTime(),
                y: [open.toFixed(2) as any, high.toFixed(2) as any, low.toFixed(2) as any, close.toFixed(2) as any],
            });

            basePrice = close;
        }

        return data;
    };

    // const generateBarData = (numPoints: number) => {
    //     return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100) + 10); // Random data between 10 and 110
    // };

    // const volumeData = [
    //     { x: new Date('2021-01-01').getTime(), y: 1200 },
    //     { x: new Date('2021-01-02').getTime(), y: 1500 },
    //     { x: new Date('2021-01-03').getTime(), y: 1800 },
    //     { x: new Date('2021-01-04').getTime(), y: 2000 },
    //     { x: new Date('2021-01-05').getTime(), y: 2500 },
    //     { x: new Date('2021-01-06').getTime(), y: 2300 },
    //     { x: new Date('2021-01-07').getTime(), y: 2100 },
    //     { x: new Date('2022-01-08').getTime(), y: 2600 },
    //     { x: new Date('2023-01-09').getTime(), y: 2800 },
    //     { x: new Date('2024-01-10').getTime(), y: 3000 },
    //     { x: new Date('2025-01-08').getTime(), y: 2600 },
    //     { x: new Date('2026-01-09').getTime(), y: 2800 },
    //     { x: new Date('2027-01-10').getTime(), y: 3000 },
    //     { x: new Date('2021-01-08').getTime(), y: 2600 },
    //     { x: new Date('2021-01-09').getTime(), y: 2800 },
    //     { x: new Date('2021-01-10').getTime(), y: 3000 },
    //     { x: new Date('2021-01-08').getTime(), y: 2600 },
    //     { x: new Date('2021-01-09').getTime(), y: 2800 },
    //     { x: new Date('2021-01-16').getTime(), y: 3200 },
    //     { x: new Date('2021-01-17').getTime(), y: 2900 },
    //     { x: new Date('2021-01-18').getTime(), y: 2850 },
    //     { x: new Date('2021-01-20').getTime(), y: 3000 },
    //     { x: new Date('2022-01-08').getTime(), y: 2700 },
    //     { x: new Date('2021-01-28').getTime(), y: 2800 },
    //     { x: new Date('2021-01-29').getTime(), y: 3020 },
    // ];

    const [state] = React.useState({
        series: [{
            data: generateCandlestickData(100), // Generate 100 data points
        },
        ],
        options: {
            chart: {
                type: 'candlestick',
                height: 290,
                id: 'candles',
                toolbar: { autoSelected: 'pan', show: false },
                zoom: { enabled: false },
            },

            plotOptions: {
                candlestick: {
                    columnWidth: "20%",
                    barWidth: "5%",
                    colors: { upward: '#25C26E', downward: '#FF6838' },
                },
            },
            xaxis: { type: 'datetime' },
            grid: {
                show: false,
            },
        },
        seriesBar: [{ name: 'volume', data:[], }],
        optionsBar: {
            chart: {
                height: 160,
                type: 'bar',
                brush: { enabled: true, target: 'candles' },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('2021-01-01').getTime(),
                        max: new Date('2021-01-10').getTime(),
                    },
                    fill: { color: '#ccc', opacity: 0 },
                    stroke: { color: '#FF6838' },
                },
            },
            grid: {
                show: false,
            },
            dataLabels: { enabled: false },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    colors: {
                        ranges: [
                            { from: -1000, to: 0, color: '#FF6838' },
                            { from: 1, to: 10000, color: '#FF6838' },
                        ],
                    },

                },
            },
            stroke: { width: 0 },
            xaxis: { type: 'datetime', axisBorder: { offsetX: 13 } },
            yaxis: { labels: { show: false } },
        },
    });

    const { width } = useWindowSize();
    const isMobile = width < 768

    return (
        <div>
            <div className='px-5 flex gap-3 items-center mt-5 overflow-auto hidden-scrollbar'>
                <img src={icons.Dropdown} alt="dropdown" />
                <p className='text-[10px] text-[#777E90] font-medium '>BTC/USD</p>
                <p className='text-[10px] text-[#777E90] font-medium '>O <span className='text-[#25C26E] ml-2'>36,641.54</span></p>
                <p className='text-[10px] text-[#777E90] font-medium '>H <span className='text-[#25C26E] ml-2'>36,641.54</span></p>
                <p className='text-[10px] text-[#777E90] font-medium '>L <span className='text-[#25C26E] ml-2'>36,641.54</span></p>
                <p className='text-[10px] text-[#777E90] font-medium '>C <span className='text-[#25C26E] ml-2'>36,641.54</span></p>
                <p className='text-[10px] text-[#777E90] font-medium '>Change: <span className='text-[#25C26E] ml-2'>2.33%</span></p>
                <p className='text-[10px] text-[#777E90] font-medium '>Amplitude: <span className='text-[#25C26E] ml-2'>6.59%</span></p>
            </div>
            <div className="chart-box">
                <div id="chart-candlestick">
                    <ReactApexChart options={state.options as any} series={state.series} type="candlestick" height={290} />
                </div>
                {isMobile && <div className="flex justify-between mt-5 gap-2 items-center bg-[#262932] p-3">
                    <Components.Button label="Buy" onClick={onClickBuy} backgroundColor="bg-[#25C26E]" />
                    <Components.Button label="Sell" onClick={onClickSell} backgroundColor="bg-[#FF554A]" />
                </div>
                }
                <div className='flex gap-2 items-center px-5 overflow-auto hidden-scrollbar'>
                    <p className='text-[10px] text-[#777E90] font-medium '>Vol(BTC): <span className='text-[#FF6838] ml-2'>2.33%</span></p>
                    <p className='text-[10px] text-[#777E90] font-medium '>Vol(USDT): <span className='text-[#FF6838] ml-2'>6.59%</span></p>
                </div>
                <div id="chart-bar">
                    <ReactApexChart options={state.optionsBar as any} series={state.seriesBar} type="bar" height={160} />
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
