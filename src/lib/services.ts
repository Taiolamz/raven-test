
interface StockTimeSeriesData {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. adjusted close": string;
    "6. volume": string;
    "7. dividend amount": string;
    "8. split coefficient": string;
  };
}

interface AlphaVantageResponse {
  "Time Series (Weekly Adjusted)": StockTimeSeriesData;
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Time Zone": string;
  };
}


const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchStockData = async (
  symbol: string
): Promise<AlphaVantageResponse | null> => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${VITE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch stock data");
    }

    const data: AlphaVantageResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};
