/**
 * The `useCurrencyInfo` function is a custom React hook that fetches currency information from an API
 * based on the provided currency code.
 * @param currency - The `currency` parameter is a string that represents the currency code for which
 * you want to fetch the currency information.
 * @returns The `useCurrencyInfo` function returns the `data` state variable, which represents the
 * currency information fetched from the API.
 */
import { useEffect, useState } from "react";

async function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
     fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
