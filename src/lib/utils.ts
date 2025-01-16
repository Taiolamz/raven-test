import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface StockTimeSeriesData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
}


interface StockData {
  "Weekly Adjusted Time Series"?: {
    [key: string]: StockTimeSeriesData; 
  };
}

interface FormattedData {
  x: string; 
  y: string[]; 
}

export function formatStockData(stockData: StockData): FormattedData[] {
  const formattedData: FormattedData[] = [];

  if (stockData["Weekly Adjusted Time Series"]) {
    Object.entries(stockData["Weekly Adjusted Time Series"]).map(
      ([key, value]) => {
        formattedData.push({
          x: key,
          y: [
            value["1. open"],
            value["2. high"],
            value["3. low"],
            value["4. close"],
          ],
        });
      }
    );
  }

  return formattedData;
}
