import React from "react";
import { Routes, Route, Link } from "react-router-dom"; 
import { HomePage } from "./pages/Homepage";
import { ResumePage } from "./pages/ResumePage";
import { BlogPage } from "./pages/Blogpage";
import { NotFoundPage } from "./pages/Notfoundpage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div >
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<ResumePage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
