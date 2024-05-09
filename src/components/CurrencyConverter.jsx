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
  const [converted, setConverted] = useState();
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const converted = convertingMoney(rate, amount);
        setConverted(converted);
        // You can use 'converted' here for any other purpose if needed
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="currency-converter">
      <Currency fromCurrency={fromCurrency} toCurrency={toCurrency} info={converted}/>
      {/* <p>Converted Amount is: {converted}</p> */}
    </div>
  );
}

export default CurrencyConverter;
