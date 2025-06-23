import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import { FEED_DATA } from "./data";
import FeedPage from "./pages/FeedPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import type { Feed } from "./types";

const initialCredentials: Record<string, string> = {
  "demo@example.com": "password123",
  "test@user.com": "testpass",
};

function App() {
  const [feeds, setFeeds] = useState<Feed[]>(() => {
    const storedFeeds = localStorage.getItem("FEEDS");
    return storedFeeds ? JSON.parse(storedFeeds) : FEED_DATA;
  });

  // Seed localStorage with default data (feeds and credentials)
  useEffect(() => {
    // Only set FEEDS if not already set
    if (!localStorage.getItem("FEEDS")) {
      localStorage.setItem("FEEDS", JSON.stringify(FEED_DATA));
    }

    // Only set CREDENTIALS if not already set
    if (!localStorage.getItem("CREDENTIALS")) {
      localStorage.setItem("CREDENTIALS", JSON.stringify(initialCredentials));
    }
  }, []);

  // Listen to custom event to update feeds from localStorage
  useEffect(() => {
    const handleStorageUpdate = () => {
      const updatedFeeds = JSON.parse(localStorage.getItem("FEEDS") || "[]");
      setFeeds(updatedFeeds);
    };

    window.addEventListener("feeds-updated", handleStorageUpdate); // to listed to feed update event
    return () =>
      window.removeEventListener("feeds-updated", handleStorageUpdate);
  }, []);

  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<FeedPage feeds={feeds} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
