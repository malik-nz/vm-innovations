"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from ".";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactUs = () => {
  return (
    <section id="Contact" className="dark:bg-dark">
      <Container>
        <motion.div
          className="-mx-4 flex flex-wrap my-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full px-4">
            <div className="mx-auto max-w-[510px] text-center">
              <h4 className="text-[#0859D7] text-lg sm:text-xl font-semibold mb-2">
                Get In Touch
              </h4>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Contact for any query
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.{" "}
                <span className="text-[#0859D7]">Download Now</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-[60%]">
          <div className="absolute inset-0 bg-[url('/assets/carousel-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-[#5050F0]/80 mix-blend-multiply" />
        </div>

        <Container>
          {/* Contact Cards */}
          <motion.div
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
              <div className="bg-[#0859D7]/10 text-[#0859D7] p-3 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0859D7]">Address</h4>
                <p className="text-sm text-gray-700">
                  12 Wintere Road, Auckland, New Zealand
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
              <div className="bg-[#0859D7]/10 text-[#0859D7] p-3 rounded-full">
                <i className="fa fa-phone"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0859D7]">Call Us</h4>
                <p className="text-sm text-gray-700">+64 223809022</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
              <div className="bg-[#0859D7]/10 text-[#0859D7] p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0859D7]">Email Us</h4>
                <p className="text-sm text-gray-700">
                  Vishal@vminnovations.co.nz
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map & Form */}
          <motion.div
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Google Map */}
            <div className="w-full h-full rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.731509101056!2d174.87865937646186!3d-36.96544147222001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49ef9c16c6cf%3A0x95a929bdc0195c9b!2s12%20Wintere%20Road%2C%20Papatoetoe%2C%20Auckland%202025%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1692976600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0859D7]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0859D7]"
                />
                <input
                  type="text"
                  placeholder="Project"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0859D7]"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#0859D7]"
                />
                <button
                  type="submit"
                  className="bg-[#0859D7] hover:bg-[#0647b3] text-white font-semibold py-2 px-6 rounded transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </Container>
      </section>
    </section>
  );
};

export default ContactUs;
