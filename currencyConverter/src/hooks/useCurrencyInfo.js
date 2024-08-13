import {useEffect, useState} from "react"

// useEffect(()=>{callback},[dependencies array])
// HOW TO DESIGN CUSTOM HOOKS
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        // Here we convert the respone into the json the data of the api store in the form of a string that cnvert it into the json me
        .then((res) => res.json())
        // NowThe response comes in the form of a json for holding a data  So jo res me jo data aayaha hai ushme se currrency nikal loj
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;