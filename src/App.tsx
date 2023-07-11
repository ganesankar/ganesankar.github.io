import React from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import { HomePage } from "./pages/Homepage";
import { AboutPage } from "./pages/Aboutpage";
import { BlogPage } from "./pages/Blogpage";
import { NotFoundPage } from "./pages/Notfoundpage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="wrapper">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
