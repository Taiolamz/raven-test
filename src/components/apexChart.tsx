import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart

export const ApexChart = () => {
    // Expanded example candlestick data (open, high, low, close, timestamp)
    const seriesData = [
        [1617168000000, 100.10, 102.40, 99.90, 101.00],
        [1617171600000, 101.00, 103.00, 100.80, 102.50],
        [1617175200000, 102.50, 104.50, 102.00, 103.20],
        [1617178800000, 103.20, 105.20, 102.80, 104.00],
        [1617182400000, 104.00, 106.00, 103.50, 105.30],
        [1617186000000, 105.30, 107.00, 104.80, 106.20],
        [1617189600000, 106.20, 108.00, 105.80, 107.00],
        [1617193200000, 107.00, 109.20, 106.50, 108.10],
        [1617196800000, 108.10, 110.50, 107.80, 109.00],
        [1617200400000, 109.00, 111.00, 108.50, 110.30],
        // Add more data as needed
    ];

    // Expanded example bar chart data (volume, timestamp)
    const seriesDataLinear = [
        [1617168000000, 1200],
        [1617171600000, 1500],
        [1617175200000, 1800],
        [1617178800000, 2000],
        [1617182400000, 2500],
        [1617186000000, 2300],
        [1617189600000, 2100],
        [1617193200000, 2600],
        [1617196800000, 2800],
        [1617200400000, 3000],
        // Add more data as needed
    ];

    const [state, setState] = React.useState({
        series: [{
            data: seriesData,
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 290,
                id: 'candles',
                toolbar: {
                    autoSelected: 'pan',
                    show: false
                },
                zoom: {
                    enabled: false
                },
            },
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#3C90EB',
                        downward: '#DF7D46'
                    }
                }
            },
            xaxis: {
                type: 'datetime'
            }
        },
        seriesBar: [{
            name: 'volume',
            data: seriesDataLinear
        }],
        optionsBar: {
            chart: {
                height: 160,
                type: 'bar',
                brush: {
                    enabled: true,
                    target: 'candles'
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('1 Jan 2021').getTime(),
                        max: new Date('1 Feb 2021').getTime()
                    },
                    fill: {
                        color: '#ccc',
                        opacity: 0.4
                    },
                    stroke: {
                        color: '#0D47A1',
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    colors: {
                        ranges: [{
                            from: -1000,
                            to: 0,
                            color: '#F15B46'
                        }, {
                            from: 1,
                            to: 10000,
                            color: '#FEB019'
                        }],
                    },
                }
            },
            stroke: {
                width: 0
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    offsetX: 13
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            }
        },
    });

    return (
        <div>
            <div className="chart-box">
                <div id="chart-candlestick">
                    <ReactApexChart options={state.options as any} series={state.series} type="candlestick" height={290} />
                </div>
                <div>
                    <div className='flex gap-5 items-center px-3'>
                        <button className='bg-[#25C26E] py-[px] px-[16px] rounded-[8px] text-white w-full cusor-pointer outline-none'>
                            Buy
                        </button>
                        <button className='bg-[#FF554A] py-[6px] px-[16px] rounded-[8px] text-white w-full cusor-pointer outline-none'>
                            Sell
                        </button>
                    </div>
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
