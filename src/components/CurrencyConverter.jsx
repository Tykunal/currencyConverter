// CurrencyConverter.jsx
import React, { useState, useEffect } from "react";
import { Currency } from "../pages/Currency";

function convertingMoney(rate, amount) {
  return (rate * amount).toFixed(2); // Format to two decimal places
}

function CurrencyConverter() {
  const toCurrency = "INR";
  const fromCurrency = "USD";
  const amount = 100;
  const [converted, setConverted] = useState(null); 
  // const [fromCurrency, setFromCurrency] = useState("INR");
  // const [toCurrency, setToCurrency] = useState("USD");
  // const [amount, setAmount] = useState(100);
  // const [convertedAmount, setConvertedAmount] = useState(0);
  // const [rates, setRates] = useState({}); // State for cached rates

  // Debounce function to limit API calls (optional)
  // const debounce = (func, wait) => {
  //   let timeout;
  //   return (...args) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func.apply(this, args), wait);
  //   };
  // };

  // const handleAmountChange = debounce((e) => { // Debounce conversion updates (optional)
  //   setAmount(parseFloat(e.target.value));
  // }, 500); // Adjust debounce wait time (milliseconds)

  // const handleFromCurrencyChange = (e) => {
  //   setFromCurrency(e.target.value.toUpperCase()); // Ensure uppercase for currency codes
  // };

  // const handleToCurrencyChange = (e) => {
  //   setToCurrency(e.target.value.toUpperCase()); // Ensure uppercase for currency codes
  // };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );
        const data = await response.json();
        console.log(data);
        const rate = data.rates.toCurrency; // Access rate based on toCurrency
        // setRates(data.rates); // Cache fetched rates
        const converted = convertingMoney(rate, amount);
        console.log(converted);
        setConverted(converted);
      } catch (error) {
        console.error("Error fetching rates:", error);
        // Handle errors gracefully (e.g., display error message)
      }
    };

    fetchRates();
  }, [toCurrency,amount,fromCurrency]); // Update on currency/amount change
  return (
    <div className="currency-converter">
      {/* Removed <Currency /> rendering */}
      <Currency info = {converted}/>
    </div>
  );
}

export default CurrencyConverter;
