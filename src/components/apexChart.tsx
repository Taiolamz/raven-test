import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import Components from '.';

export const ApexChart = () => {
  const candlestickData = [
    { x: new Date('2021-01-01').getTime(), y: [100.10, 102.40, 99.90, 101.00] },
    { x: new Date('2021-01-02').getTime(), y: [101.00, 103.00, 100.80, 102.50] },
    { x: new Date('2021-01-03').getTime(), y: [102.50, 104.50, 102.00, 103.20] },
    { x: new Date('2021-01-04').getTime(), y: [103.20, 105.20, 102.80, 104.00] },
    { x: new Date('2021-01-05').getTime(), y: [104.00, 106.00, 103.50, 105.30] },
    { x: new Date('2021-01-06').getTime(), y: [105.30, 107.00, 104.80, 106.20] },
    { x: new Date('2021-01-07').getTime(), y: [106.20, 108.00, 105.80, 107.00] },
    { x: new Date('2021-01-08').getTime(), y: [107.00, 109.20, 106.50, 108.10] },
    { x: new Date('2021-01-09').getTime(), y: [108.10, 110.50, 107.80, 109.00] },
    { x: new Date('2021-01-10').getTime(), y: [109.00, 111.00, 108.50, 110.30] },
  ];

  const volumeData = [
    { x: new Date('2021-01-01').getTime(), y: 1200 },
    { x: new Date('2021-01-02').getTime(), y: 1500 },
    { x: new Date('2021-01-03').getTime(), y: 1800 },
    { x: new Date('2021-01-04').getTime(), y: 2000 },
    { x: new Date('2021-01-05').getTime(), y: 2500 },
    { x: new Date('2021-01-06').getTime(), y: 2300 },
    { x: new Date('2021-01-07').getTime(), y: 2100 },
    { x: new Date('2021-01-08').getTime(), y: 2600 },
    { x: new Date('2021-01-09').getTime(), y: 2800 },
    { x: new Date('2021-01-10').getTime(), y: 3000 },
  ];

  const [state, setState] = React.useState({
    series: [{ data: candlestickData }],
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
          colors: { upward: '#3C90EB', downward: '#DF7D46' },
        },
      },
      xaxis: { type: 'datetime' },
    },
    seriesBar: [{ name: 'volume', data: volumeData }],
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
          fill: { color: '#ccc', opacity: 0.4 },
          stroke: { color: '#0D47A1' },
        },
      },
      dataLabels: { enabled: false },
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
      stroke: { width: 0 },
      xaxis: { type: 'datetime', axisBorder: { offsetX: 13 } },
      yaxis: { labels: { show: false } },
    },
  });

  return (
    <div>
      <div className="chart-box">
        <div id="chart-candlestick">
          <ReactApexChart options={state.options} series={state.series} type="candlestick" height={290} />
        </div>
        <div>
          <div className="flex justify-between mt-5 gap-2 items-center bg-[#262932] p-3">
            <Components.Button label="Buy" onClick={() => {}} backgroundColor="bg-[#25C26E]" />
            <Components.Button label="Sell" onClick={() => {}} backgroundColor="bg-[#FF554A]" />
          </div>
        </div>
        <div id="chart-bar">
          <ReactApexChart options={state.optionsBar} series={state.seriesBar} type="bar" height={160} />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
