import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/money.context.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);
