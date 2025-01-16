import React, { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchStockData } from '../lib/services';
import { formatStockData } from '../lib/utils';
import { candleStickOptions } from '../lib/constants';
import Spinner from './spinner';

interface LiveChartProps {
    symbol: string;
}

interface StockData {
    "Weekly Adjusted Time Series"?: {
        [key: string]: {
            "1. open": string;
            "2. high": string;
            "3. low": string;
            "4. close": string;
        };
    };
}

const LiveChart: React.FC<LiveChartProps> = ({ symbol }) => {
    const [stockData, setStockData] = useState<StockData>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetchStockData(symbol)
            .then((data) => {
                setStockData(data as any);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [symbol]);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

    if (loading) {
        return <div className="absolute inset-0 flex justify-center items-center">
            <Spinner className="!w-24 !h-24" />
        </div>
            ;
    }

    return (
        <ReactApexChart
            height={300}
            series={[{ data: seriesData }]}
            options={candleStickOptions as any}
            type="candlestick"
        />
    );
};

export default LiveChart;
