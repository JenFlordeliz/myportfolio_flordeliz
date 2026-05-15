import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Home = () => {
  const colors = {
    primary: "#11883ed3",
    dark: "#0f172a",
    slate: "#1e293b",
    muted: "#64748b"
  };


  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "4rem 2rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
  };


  const buttonStyle: React.CSSProperties = {
    backgroundColor: colors.primary,
    color: "#ffffff",
    fontWeight: 600,
    border: "none",
    padding: "0.75rem 1.7rem",
    borderRadius: "8px"
  };


  const outlineButtonStyle: React.CSSProperties = {
    border: `2px solid ${colors.slate}`,
    color: colors.slate,
    fontWeight: 600,
    padding: "0.75rem 1.7rem",
    borderRadius: "8px",
    textDecoration: "none"
  };


  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#dfe0c8" }}>
      <NavBar />
     
     
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center my-5">
        <div style={cardStyle} className="text-center w-100">
         
          <h1 style={{ fontWeight: 800, color: colors.slate, fontSize: "3.5rem" }}>
            Hi, I'm <span style={{ color: "#11883ed3" }}>Jennelyn Flordeliz</span>
          </h1>
         
          <p style={{ color: "black", fontSize: "1.15rem", maxWidth: "750px", margin: "1.5rem auto 0", lineHeight: "1.7" }}>
            Aspiring Full Stack Web Developer passionate about building responsive, modern, and user-friendly applications.
            As a first-year college student stepping into software engineering, this portfolio captures my very first milestones in tech.
            It organizes my learning milestones and lab exercises from scratch—starting with foundational HTML/CSS up to building my first dynamic React apps.
            Explore this timeline of my first college terms to see my laboratory projects from First Grading, Midterms, and Finals!
          </p>
         
          <div className="mt-4 d-flex justify-content-center gap-3" >
            <Link to="/about" style={buttonStyle} className="btn" >
              About Me
            </Link>
            <Link to="/contact" style={outlineButtonStyle} className="btn">
              Contact Me
            </Link>
          </div>


        </div>
      </div>
     
      <Footer />
    </div>
  );
};


export default Home;