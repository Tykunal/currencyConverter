import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import video from "./video2.mp4"; 
import { Header } from '../components/Header';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 


function convertingMoney(rate, amount) {
  return (rate * amount).toFixed(2); // Format to two decimal places
}

export function Currency() {
  const [toCurrency, setToCurrency] = useState(""); 
  const [fromCurrency, setFromCurrency] = useState(""); 
  const [amount, setAmount] = useState(0);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [converted, setConverted] = useState();
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchCurrencyOptions = async () => {
      try {
        const response = await fetch(
          'https://open.er-api.com/v6/latest'
        );
        const data = await response.json();
        // console.log(data);
        const options = Object.keys(data.rates);
        // console.log(options);
        setCurrencyOptions(options);
        setToCurrency(options[0]); 
        setFromCurrency(options[1]); 
      } catch (error) {
        console.error("Error fetching currency options:", error);
      }
    };

    fetchCurrencyOptions();
  }, []);

  const handleCalculate = async () => {
    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const converted = convertingMoney(rate, amount);
      setConverted(converted);
      setShowResult(true);
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="video-container currency-container">
        <video autoPlay loop muted className="video2">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className="content-container currency-container">
        <form>
        <label htmlFor="toCurrency">To Currency:</label>
        <select name="toCurrency" id="toCurrency" value={toCurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="fromCurrency">From Currency:</label>
        <select name="fromCurrency" id="fromCurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="amount">Amount:</label>
        <Input type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        {/* {<button onClick={handleCalculate}>Calculate</button> */}
        <Button id="btn" onClick={handleCalculate}>Calculate</Button>
        {showResult && <p className="result">Result: {converted} {toCurrency}</p>}
        </form>
      </div>
    </div>
  );
}

