import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
// import { Home } from './pages/Home';
// import Currency from './pages/Currency';
import reportWebVitals from './reportWebVitals';
import { Home } from "./pages/Home";
import {Currency} from "./pages/Currency"
// import CurrencyConverter from './components/CurrencyConverter';

const router = createBrowserRouter([
  {
  path:"/",
  element: <Home />
  },
  {
  path:"currency",
  element: <Currency />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
