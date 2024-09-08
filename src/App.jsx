import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Index from "./Pages/Index";
import Media from "./Pages/Media";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import ErrorPage from "./Pages/ErrorPage";
import Donation from "./Pages/Donation";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Whatsapp from "./Components/Whatsapp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </BrowserRouter>
  );
}

export default App;
