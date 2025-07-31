"use client";
import React, { useEffect, useState } from "react";
import { Container, ShineButton } from ".";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

const scrollToSection = (id) => {
  if (id === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  setMobileMenuOpen(false);
};



 useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 300);

    const sections = ["Home", "About", "Services", "Projects", "Contact"];
    let currentSection = "Home";

    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top <= 150) {
          currentSection = id;
        }
      }
    }

    setActiveTab(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header className="relative z-[999]">
      {/* Top Bar */}
      <section className="bg-[#0859D7] text-white text-sm font-medium">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-2 group cursor-pointer">
              <i className="fa fa-phone vibrate-on-group-hover"></i>
              <span>(64) 2238 09022</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            <div className="flex items-center gap-2 group cursor-pointer">
              <i className="fas fa-map-marker-alt vibrate-on-group-hover"></i>
              <span>12 Wintere Road, Auckland, New Zealand</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            <div className="flex items-center gap-2 group cursor-pointer">
              <i className="fas fa-envelope vibrate-on-group-hover"></i>
              <span>vishal@vminnovations.co.nz</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            <div className="flex items-center gap-4 text-base">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="wave-hover"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Nav */}
      <nav
        className={`bg-white border-b border-gray-200 dark:bg-gray-800 shadow-sm transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 w-full shadow-lg animate-slide-down"
            : ""
        }`}
      >
        <Container>
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              VM<span className="text-[#0859D7]">Innovations</span>
            </span>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <span
                      onClick={() => scrollToSection(item)}
                      className={`cursor-pointer transition px-1 pb-2
        ${
          item === activeTab
            ? "text-[#0859D7] border-b-2 border-[#0859D7]"
            : "text-gray-700 dark:text-gray-300 hover:text-[#0859D7]"
        }`}
                    >
                      {item}
                    </span>
                  </li>
                )
              )}

              <li>
                <button className="text-gray-600 dark:text-gray-300 hover:text-[#0859D7] transition">
                  <i className="fa fa-search"></i>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#0859D7]"
                aria-label="Open Menu"
              >
                <i className="fa-solid fa-bars cursor-pointer"></i>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <ShineButton label="Contact us!" />
            </div>
          </div>
        </Container>

        {/* Mobile Offcanvas Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white z-[9999] shadow-md transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-gray-800">
              VM<span className="text-[#0859D7]">Innovations</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0859D7]"
            >
              <i className="fa-solid fa-xmark cursor-pointer"></i>
            </button>
          </div>

          <ul className="flex flex-col p-4 gap-4 text-gray-800 font-medium">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <span
                    onClick={() => scrollToSection(item)}
                    className="block cursor-pointer hover:text-[#0859D7] transition"
                  >
                    {item}
                  </span>
                </li>
              )
            )}
            <li>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#0859D7]">
                <i className="fa fa-search"></i>
                Search
              </button>
            </li>
            <li>
              <button className="mt-2 text-white bg-[#0859D7] hover:bg-blue-800 font-semibold rounded-3xl text-sm px-4 py-2">
                Contact us!
              </button>
            </li>
          </ul>
        </div>

        {/* Background overlay */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-[9998]"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
