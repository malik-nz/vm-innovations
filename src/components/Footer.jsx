import React from "react";

const Footer = () => {
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
            <div className="flex mt-4 space-x-2">
              <a
                href="#"
                className="bg-white p-2 rounded-full transition"
              >
                <i className="fab fa-facebook-f text-blue-600"></i>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full transition"
              >
                <i className="fab fa-twitter text-blue-400"></i>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full transition"
              >
                <i className="fab fa-instagram text-pink-500"></i>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full transition"
              >
                <i className="fab fa-linkedin-in text-blue-700"></i>
              </a>
            </div>
          </div>

          {/* Short Links */}
          <div>
            <h3 className="text-[#0859D7] text-lg font-semibold">
              Short Link
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>Our
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>Our
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Latest Blog
                </a>
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
                <a href="#" className="text-white hover:text-[#0859D7]">
                  <i className="fas fa-angle-right text-[#0859D7] mr-2"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
         

          {/* Contact Info */}
          <div>
            <h3 className="text-[#0859D7] text-lg font-semibold">
              Contact Us
            </h3>
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
