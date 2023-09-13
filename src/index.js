// //  React Router

// // React Router is a popular library for handling routing and navigation in React applications. It provides a way to manage the URLs (Uniform Resource Locators) of your application and render different components based on the current URL, allowing you to create multi-page applications or single-page applications (SPAs) with distinct views. //

//============================================================================================================================================//

// // Routes - In React Router, routes are used to define how different components or views should be rendered based on the URL or path in your application. React Router is a library for handling routing and navigation in React applications. Routes determine what content to display when a specific URL is accessed. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // more ditails in ./src/App.js and ./src/index.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
