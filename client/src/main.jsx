import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider, RedirectToSignIn } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Step from "./pages/Step.jsx";
// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: false,
});

// const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // Replace with your Clerk Frontend API

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ClerkProvider frontendApi={clerkFrontendApi}> */}
      <Router>
        <App />
      </Router>
    {/* </ClerkProvider> */}
  </StrictMode>
);
