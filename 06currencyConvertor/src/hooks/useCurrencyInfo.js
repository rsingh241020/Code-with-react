import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/rates.json")
      .then((res) => res.json())
      .then((res) => {
        const baseCurrencyData = res.rates;
        setData(baseCurrencyData);
        console.log("Currency data loaded:", baseCurrencyData);
      })
      .catch((err) => {
        console.error("Error loading currency info:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
