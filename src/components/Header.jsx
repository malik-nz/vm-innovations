"use client";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Container, ShineButton } from ".";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header>
      <section className="bg-[#0859D7] text-white text-sm font-medium">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={14} />
              <span>(64) 2238 09022</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            {/* Location */}
            <div className="flex items-center gap-2">
              <IoLocation size={16} />
              <span>12 Wintere Road, Auckland, New Zealand</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            {/* Email */}
            <div className="flex items-center gap-2">
              <MdEmail size={16} />
              <span>Vishal@vminnovations.co.nz</span>
            </div>

            <span className="hidden md:block h-4 w-px bg-white" />

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-base">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-gray-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-200"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gray-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <nav className="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800">
        <Container>
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              VM<span className="text-[#0859D7]">Innovations</span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-8 items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`hover:text-[#0859D7] transition ${
                        item === "Home" ? "text-[#0859D7]" : ""
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <button
                  aria-label="Search"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#0859D7] transition"
                >
                  <ImSearch size={16} />
                </button>
              </li>
            </ul>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#0859D7]"
                aria-label="Open Menu"
              >
                <FiMenu size={24} />
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <ShineButton label='Contact us!' />
            </div>
          </div>
        </Container>
        {/* Mobile Offcanvas Menu */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-[75%] max-w-sm bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-gray-800">
              VM<span className="text-[#0859D7]">Innovations</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          <ul className="flex flex-col p-4 gap-4 text-gray-800 font-medium">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#0859D7] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#0859D7]">
                <ImSearch size={16} />
                Search
              </button>
            </li>
            <li>
              <a
                href="#"
                className="inline-block mt-2 text-white bg-[#0859D7] hover:bg-blue-800 font-semibold rounded-3xl text-sm px-4 py-2"
              >
                Contact us!
              </a>
            </li>
          </ul>
        </div>

        {/* Background overlay when menu open */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
