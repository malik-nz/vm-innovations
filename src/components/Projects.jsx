"use client";
import React from "react";
import { Container } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    src: "/assets/project-1.jpg",
    title: "Web Design",
    description: "Web Analysis",
  },
  {
    src: "/assets/project-2.jpg",
    title: "Cyber Security",
    description: "Cyber Security Core",
  },
  {
    src: "/assets/project-3.jpg",
    title: "Mobile Info",
    description: "Upcoming Phone",
  },
  {
    src: "/assets/project-4.jpg",
    title: "Web Development",
    description: "Web Analysis",
  },
  {
    src: "/assets/project-5.jpg",
    title: "Digital Marketing",
    description: "Marketing Analysis",
  },
  {
    src: "/assets/project-6.jpg",
    title: "Keyword Research",
    description: "Keyword Analysis",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Projects = () => {
  return (
    <section id="Projects" className="dark:bg-dark">
      {/* Header Section */}
      <Container>
        <div className="-mx-4 flex flex-wrap mb-8">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[510px] text-center">
              <h4 className="text-[#0859D7] text-lg sm:text-xl font-semibold mb-2">
                Our Projects
              </h4>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Recently Completed Projects
              </h2>
            </div>
          </div>
        </div>
      </Container>

      {/* Projects Grid with Background */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background starting from 70% of the section */}
        <div className="absolute bottom-0 left-0 w-full h-[70%]">
          <div className="absolute inset-0 bg-[url('/assets/carousel-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-[#5050F0]/80 mix-blend-multiply" />
        </div>

        {/* Foreground Content */}
        <Container>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((project, idx) => (
              <motion.div
                key={idx}
                className="relative cursor-pointer w-full h-[240px] sm:h-[265px] overflow-hidden shadow-lg group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={idx}
                variants={fadeUp}
              >
                {/* Background Image */}
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Always-visible dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-[1]" />

                {/* Hover blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5050F0]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />

                {/* Text content */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-[3]">
                  <p className="text-sm sm:text-base">{project.title}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">
                    {project.description}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Projects;
