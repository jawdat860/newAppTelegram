import { useIntegration } from "@telegram-apps/react-router-integration";
import { initNavigator } from "@telegram-apps/sdk-react";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import WebApp from "@twa-dev/sdk"; // Import the TWA SDK
import CartProvider from "./components/store/s.jsx"; // Your CartProvider

import Order from "./components/Order/Order.jsx"; // Order component

import Heder from "./components/Heder/Heder.jsx";
import Body from "./components/Body/Body.jsx";

function App() {
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);
  const [externalUrl, setExternalUrl] = useState(null); // State to hold the external URL
  const [thems, setThems] = useState("light");
  useEffect(() => {
    setThems(WebApp.colorScheme);
  }, [WebApp.colorScheme]);
  useEffect(() => {
    navigator.attach(); // Attach navigator for route integration
    // Show back button in Telegram app

    // Handle back button press
    const handleBackButton = () => {
      if (externalUrl) {
        setExternalUrl(null); // Clear the external URL to go back to the app
        return true; // Prevent default back behavior
      }
      return false; // Allow default back behavior
    };

    WebApp.onEvent("backButtonClicked", handleBackButton); // Register back button event

    return () => {
      navigator.detach(); // Detach navigator on cleanup
      WebApp.offEvent("backButtonClicked", handleBackButton); // Cleanup event listener
    };
  }, [navigator, externalUrl]);

  // Function to handle external link clicks
  const handleExternalLink = (url) => {
    setExternalUrl(url); // Set the external URL to be loaded
  };

  // If an external URL is set, display the iframe for it
  if (externalUrl) {
    return (
      <div>
        <button onClick={() => setExternalUrl(null)}>Back to App</button>{" "}
        {/* Button to go back to the app */}
      </div>
    );
  }

  // Main app rendering
  return (
    <CartProvider>
      <Router location={location} navigator={reactNavigator}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heder thems={thems}/>
                <Body
                  handleExternalLink={handleExternalLink}
                  thems={thems}
                />
              </>
            }
          />
          <Route
            path="/order"
            element={<Order handleExternalLink={handleExternalLink} thems={thems} />}
          />
          {/* <Route
            path="/like"
            element={<ServicesFa handleExternalLink={handleExternalLink} />}
          />
          <Route path="/Dislike" element={<ServicesDisFa />} /> */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect all other paths to home */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
