'use client';
import { socialLinks } from "@/helpers";
import React from "react";

const Footer = () => {
   const scrollToSection = (id) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <a href="index.html">
              <h1 className="text-white text-2xl font-bold">
                VM<span className="text-[#0859D7]">Innovations</span>
              </h1>
            </a>
            <p className="mt-4 text-gray-300 text-sm">
              Delivering smart, secure, and scalable digital solutions to help
              your business grow in the modern world.
            </p>
            <div className="flex mt-4 gap-3">
              {socialLinks?.map((item) => (
                <a
                  key={item?.label}
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#0859D7] hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105"
                  title={item?.label}
                >
                  <i className={`${item?.icon} text-white text-[16px]`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Short Links */}
          <div>
            <h3 className="text-[#0859D7] text-lg font-semibold">Short Link</h3>
            <ul className="mt-4 space-y-2 text-sm">
              
              <li>
                <span onClick={() => scrollToSection('About')} className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  About us
                </span>
              </li>
              <li>
                 <span onClick={() => scrollToSection('Contact')} className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Contact us
                </span>
              </li>
              <li>
                 <span onClick={() => scrollToSection('Services')} className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>Our
                  Services
                </span>
              </li>
              <li>
                 <span onClick={() => scrollToSection('Projects')} className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>Our
                  Projects
                </span>
              </li>
              <li>
                 <span className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Latest Blog
                </span>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-[#0859D7] text-lg font-semibold">Help Link</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Helps
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  FAQs
                </a>
              </li>
              <li>
                  <span onClick={() => scrollToSection('Contact')} className="text-white hover:text-[#0859D7] cursor-pointer">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#0859D7] text-lg font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-4 text-sm">
              <p className="border-b border-[#0859D7] pb-2">
                <i className="fas fa-map-marker-alt text-[#0859D7] mr-2"></i>
                12 Wintere Road, Auckland, New Zealand
              </p>
              <p className="border-b border-[#0859D7] pb-2">
                <i className="fas fa-phone text-[#0859D7] mr-2"></i>+64
                223809022
              </p>
              <p className="border-b border-[#0859D7] pb-2">
                <i className="fas fa-envelope text-[#0859D7] mr-2"></i>
                vishal@vminnovations.co.nz
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mt-10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between text-center md:text-left text-sm text-gray-400">
          <p>
            &copy; <span className="text-[#0859D7]">VMInnovations</span>, All
            rights reserved.
          </p>
          {/* Footer Credit (Optional) */}
          {/* <p>Designed by <a href="https://htmlcodex.com" className="text-[#0859D7]">HTML Codex</a> | Distributed by <a href="https://themewagon.com" className="text-[#0859D7]">ThemeWagon</a></p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
