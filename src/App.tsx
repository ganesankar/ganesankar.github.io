import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HomePage } from "./pages/Homepage";
import { AboutPage } from "./pages/Aboutpage";
import { BlogPage } from "./pages/Blogpage";
import { NotFoundPage } from "./pages/Notfoundpage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="wrapper">
      <Navbar className="">
        <Container>
          <Navbar.Brand href="/"> 
            <h4>Ganesan Karuppaiya</h4>
            <p>Full Stack Lead Developer</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/">Home</Link>
              <Link to="/posts">Blog</Link>
              <Link to="/about">About</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
