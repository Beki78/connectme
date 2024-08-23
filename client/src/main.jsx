import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animation in milliseconds
  once: false, // Animation will only happen once
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
