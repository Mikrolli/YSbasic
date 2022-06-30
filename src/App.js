import React from "react";
import Navbar from "./UI/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTitle from './components/MainTitle/MainTitle'
import MainAbout from "./components/mainAbout/MainAbout";
import About from "./pages/About/About";
import Certificates from './pages/Certificates/Certificates';
import Services from './pages/Services/Services';
import MainForm from "./components/mainForm/MainForm";
import MainCard from "./components/mainCard/MainCard";
import Footer from "./UI/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <MainTitle />
      <MainAbout />
      <MainForm />
      <MainCard />
      <Footer />
    </div>
  );
};

export default App;
