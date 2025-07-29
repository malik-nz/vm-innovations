import React from "react";
import Image from "next/image";
import { Container } from ".";

const AboutUs = () => {
  return (
    <section id="About" className="bg-white py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">
          {/* Left: Image Section */}
          <div className="relative w-full flex justify-center md:block">
            {/* First (always visible) image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-lg z-0">
              <Image
                src="/assets/about-1.jpg"
                alt="Image 1"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Second overlapping image (only on md and above) */}
            <div className="absolute top-24 left-20 w-64 h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-lg z-10 hidden md:block">
              <Image
                src="/assets/about-2.jpg"
                alt="Image 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-left">
            <h4 className="text-[#0859D7] text-lg sm:text-xl font-semibold mb-2">
              About Us
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              About VMInnovation Agency And <br className="hidden sm:block" />
              Its Innovative IT Solutions
            </h2>
            <p className="text-[#787878] mb-4 leading-relaxed text-base sm:text-lg">
              At VMInnovation Agency, we’re passionate about transforming ideas
              into powerful digital solutions. With a forward-thinking approach
              and a skilled team of developers, designers, and strategists, we
              specialize in delivering high-quality services including web
              development, mobile apps, cybersecurity, digital marketing, and
              cloud infrastructure.
            </p>
            <p className="text-[#787878] mb-4 leading-relaxed text-base sm:text-lg">
              Our mission is to help businesses thrive in the digital age by
              combining creativity, innovation, and technology. Whether you're a
              startup looking to build from the ground up or an established
              company seeking to scale, we bring tailored IT solutions that
              drive results.
            </p>
            <p className="text-[#787878] leading-relaxed text-base sm:text-lg">
              With a strong focus on performance, user experience, and long-term
              value, VMInnovation is your trusted partner in building the future
              — one solution at a time.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="cursor-pointer text-white bg-gradient-to-r from-[#0859D7] to-[#4e9ff9] animated-gradient font-semibold rounded-3xl text-lg px-10 py-3 transition-all duration-300">
            More Details
          </button>
          
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
