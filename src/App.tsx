import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/footer";
import ServiceDetailPage from "./components/ServiceDetailPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
};

export default App;
