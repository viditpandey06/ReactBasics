/**
 * The useCurrencyInfo function is a custom React hook that fetches currency information from an API
 * based on the provided currency code.
 * @param currency - The currency parameter is a string that represents the currency code for which you
 * want to fetch information.
 * @returns The `useCurrencyInfo` function returns the `data` object, which contains information about
 * the specified currency.
 */
import{useEffect,useState} from 'react'
function useCurrencyInfo(currency){
    useEffect(()=>{
        const[data,setData]=useState({}) 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         .then((res)=>res.json())
         .then((res)=> setData(res[currency]))
         console.log(data)
    },[currency])
    return data
}
export default useCurrencyInfo;