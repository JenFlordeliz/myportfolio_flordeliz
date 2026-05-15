import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);


  const navStyles = {
    activeLink: {
      color: "#188d0e",
      fontWeight: 700,
    },
    normalLink: {
      fontWeight: 500,
      color: "#1e293b",
      transition: "color 0.2s ease-in-out",
    },
  };


  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);


  const navLinks = [
    { label: "Home", path: "/", exact: true },
    { label: "About", path: "/about", exact: true },
    { label: "Projects", path: "/projects", exact: false },
    { label: "Contact", path: "/contact", exact: true },
  ];


  const isActive = (path: string, exact: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);


  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm"
      style={{ backgroundColor: "#668baf" }}
    >
      <div className="container py-2">
        <Link
          className="navbar-brand fw-bold fs-4"
          to="/"
          style={{ color: "#010611", textDecoration: "none" }}
          onClick={closeNav}
        >
          My Portfolio
        </Link>


        {/* ✅ Toggler button controls React state instead of Bootstrap JS */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* ✅ Dropdown controlled by React state — no Bootstrap JS dependency */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3 mt-2 mt-lg-0">
            {navLinks.map(({ label, path, exact }) => (
              <li className="nav-item" key={path}>
                <Link
                  className="nav-link"
                  style={isActive(path, exact) ? navStyles.activeLink : navStyles.normalLink}
                  to={path}
                  onClick={closeNav}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;