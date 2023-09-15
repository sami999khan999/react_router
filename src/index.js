// //  React Router

// // React Router is a popular library for handling routing and navigation in React applications. It provides a way to manage the URLs (Uniform Resource Locators) of your application and render different components based on the current URL, allowing you to create multi-page applications or single-page applications (SPAs) with distinct views. //

//============================================================================================================================================//

// // Routes - In React Router, routes are used to define how different components or views should be rendered based on the URL or path in your application. React Router is a library for handling routing and navigation in React applications. Routes determine what content to display when a specific URL is accessed. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // SPA - A Single Page Application (SPA) in React is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. This approach provides a smoother and more responsive user experience compared to traditional multi-page applications where each interaction typically involves loading a new HTML page from the server. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // useNavigate - The useNavigate hook is part of the React Router library (React Router v6 and later) and is used for programmatic navigation in a React Single Page Application (SPA). It allows you to programmatically navigate to different routes within your application without the need for traditional anchor (<a>) tags or other navigation components. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
