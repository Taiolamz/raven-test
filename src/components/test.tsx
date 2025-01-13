import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart

const ApexChart = () => {
    // Sample candlestick data (timestamp, open, high, low, close)
    const seriesData = [
        [1617168000000, 100.10, 102.40, 99.90, 101.00], // Bullish: close > open
        [1617171600000, 101.00, 103.00, 100.80, 102.50], // Bullish: close > open
        [1617175200000, 102.50, 104.50, 102.00, 103.20], // Bullish: close > open
        [1617178800000, 103.20, 104.20, 102.80, 103.00], // Bearish: close < open
        [1617182400000, 103.00, 105.00, 102.50, 104.20], // Bullish: close > open
        [1617186000000, 104.20, 106.00, 103.80, 105.00], // Bullish: close > open
        [1617189600000, 105.00, 107.00, 104.80, 106.50], // Bullish: close > open
        [1617193200000, 106.50, 107.50, 105.80, 106.00], // Bearish: close < open
        [1617196800000, 106.00, 108.00, 105.50, 107.50], // Bullish: close > open
        [1617200400000, 107.50, 109.00, 106.80, 107.00], // Bearish: close < open
    ];

    // Sample bar chart data (volume or linear data)
    const seriesDataLinear = [
        [1617168000000, 15],
        [1617171600000, 35],
        [1617175200000, 50],
        [1617178800000, 20],
        [1617182400000, 30],
        [1617186000000, 60],
        [1617189600000, 80],
        [1617193200000, 40],
        [1617196800000, 45],
        [1617200400000, 55],
    ];

    const [state, setState] = React.useState({
        // Candlestick chart series and options
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
                        upward: '#3C90EB', // Bullish color
                        downward: '#DF7D46' // Bearish color
                    }
                }
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                title: {
                    text: 'Price',
                },
            },
        },
        
        // Bar chart (volume) series and options
        seriesBar: [{
            name: 'Volume',
            data: seriesDataLinear,
        }],
        optionsBar: {
            chart: {
                height: 160,
                type: 'bar',
                brush: {
                    enabled: true,
                    target: 'candles',
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('20 Jan 2017').getTime(),
                        max: new Date('10 Dec 2017').getTime(),
                    },
                    fill: {
                        color: '#ccc',
                        opacity: 0.4,
                    },
                    stroke: {
                        color: '#0D47A1',
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    colors: {
                        ranges: [
                            { from: -1000, to: 0, color: '#F15B46' },
                            { from: 1, to: 10000, color: '#FEB019' },
                        ],
                    },
                },
            },
            stroke: {
                width: 0,
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    offsetX: 13,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
        },
    });

    return (
        <div>
            <div className="chart-box">
                {/* Candlestick Chart */}
                <div id="chart-candlestick">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="candlestick"
                        height={290}
                    />
                </div>

                {/* Volume Bar Chart */}
                <div id="chart-bar">
                    <ReactApexChart
                        options={state.optionsBar}
                        series={state.seriesBar}
                        type="bar"
                        height={160}
                    />
                </div>
            </div>
        </div>
    );
};

export default ApexChart;
