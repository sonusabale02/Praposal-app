import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import AboutHer from "./pages/AboutHer";
import Distance from "./pages/Distance";
import Memories from "./pages/Memories";
import Praposal from "./pages/Praposal";
import Letter from "./pages/Letter";
import Devika from "./pages/Devika";

function AppContent() {
  const location = useLocation();

  // Hide navbar only on welcome page
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Welcome */}
        <Route path="/" element={<Welcome />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Other pages */}
        <Route path="/story" element={<OurStory />} />
        <Route path="/about-her" element={<AboutHer />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/devika" element={<Devika />} />
        <Route path="/proposal" element={<Praposal />} />
      </Routes>
    </>
  );
}

export default AppContent;