import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);
  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
