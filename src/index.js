import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./`components/Home";
import Contact from "./`components/Contact";
import Error from "./`components/Error";
import CountryDetails from "./`components/CountryDetails";
import About from "./`components/About";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />  , 
    errorElement : <Error />,
    children : [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/contact", 
        element: <Contact /> 
      },
      { 
        path: "/:country", 
        element: <CountryDetails /> ,
      },
      { 
        path: "/:country/about", 
        element: <About /> ,
        
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
