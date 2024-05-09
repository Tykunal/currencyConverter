// Currency.jsx
import React from 'react';
import Input from '../components/Input';
import video from "./video2.mp4"; 
import { Header } from '../components/Header';

export function Currency(props) {
  return (
    <div className="currency-container">
      <Header />
      <div className="video-container">
        <video autoPlay loop muted className="video2">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className="content-container">
        <Input
          label="From Currency:"
          value={props.fromCurrency}
          onChange={props.handleFromCurrencyChange}
          type="text"
        />
        <Input
          label="To Currency:"
          value={props.toCurrency}
          onChange={props.handleToCurrencyChange}
          type="text"
        />
        <Input
          label="Amount:"
          value={props.amount}
          onChange={props.handleAmountChange}
          type="number"
        />
        <p>Converted amount: amount: {props.info} ToCurrency: {props.toCurrency}</p>
      </div>
    </div>
  );
}

