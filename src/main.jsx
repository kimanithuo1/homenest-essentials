import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react"; // Import StrictMode
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Remove BrowserRouter to avoid nesting */}
      <App />
  </React.StrictMode>,
);
