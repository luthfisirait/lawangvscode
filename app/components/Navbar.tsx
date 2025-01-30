"use client";
import React, { useState, useEffect } from "react";
import "../styles/Navbarcss.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Fungsi untuk mendeteksi bagian aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section"); // Semua elemen section
      const scrollPos = window.scrollY + 100; // Tambahkan offset agar sesuai navbar
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Periksa apakah posisi scroll ada di dalam rentang section ini
        if (
          scrollPos >= sectionTop &&
          scrollPos < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Menu Bars */}
        <div
          className="menubars"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Brand */}
        <h1 className="navbar-brand">
        <img src='../logo.svg' alt="Logo" className="navbar-logo" />
          </h1>

        {/* Menu */}
        <ul className={`navbar-menu ${showMenu ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={`navbar-link ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`navbar-link ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#ourteam"
              className={`navbar-link ${
                activeSection === "ourteam" ? "active" : ""
              }`}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#location"
              className={`navbar-link ${
                activeSection === "location" ? "active" : ""
              }`}
            >
              Location
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
