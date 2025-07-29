import React from "react";
import { Container, ZoomButton } from ".";

const Services = () => {
  return (
    <section id="Services" className="dark:bg-dark">
      <Container>
        <div className="-mx-4 flex flex-wrap mb-8">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[510px] text-center">
              <h4 className="text-[#0859D7] text-lg sm:text-xl font-semibold mb-2">
                Our Services
              </h4>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Services Built Specifically For Your Business
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Web Design"
            details="We craft visually stunning, user-friendly websites tailored to your brand, ensuring a seamless experience across all devices.."
            icon={<i className="fa fa-code"></i>}
          />
          <ServiceCard
            title="Web Development"
            details="We develop robust, scalable, and high-performing web applications tailored to your business needs using modern technologies.
"
            icon={<i className="fa fa-file-code"></i>}
          />
          <ServiceCard
            title="Mobile Development"
            details="We create smooth, responsive mobile apps for iOS and Android, focused on performance and user experience.
"
            icon={<i className="fa fa-external-link-alt"></i>}
          />
          <ServiceCard
            title="Web Security"
            details="We secure your digital assets with industry best practices, safeguarding your website from vulnerabilities and cyber threats.
"
            icon={<i className="fas fa-user-secret"></i>}
          />
          <ServiceCard
            title="Digital Marketing"
            details="From SEO to social media, we help you grow your online presence, reach your audience, and boost your conversions.
"
            icon={<i className="fa fa-envelope-open"></i>}
          />
          <ServiceCard
            title="Automation"
            details="We streamline your development and deployment processes with CI/CD pipelines, automation, and cloud infrastructure support.
"
            icon={<i className="fas fa-laptop"></i>}
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 flex">
      <div className="group liquid flex flex-col justify-between w-full mb-9 rounded-[20px] bg-white p-10 shadow-xl dark:bg-dark-2 border border-gray-100 dark:border-dark-3 md:px-7 xl:px-10 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div>
          <div className="animate-bounce mb-8 flex items-center justify-center rounded-2xl text-[#0859D7] text-8xl transition-colors duration-300 group-hover:text-white">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white transition-colors duration-300 group-hover:text-white">
            {title}
          </h4>
          <p className="text-[#787878] dark:text-dark-6 transition-colors duration-300 group-hover:text-white">
            {details}
          </p>
        </div>
        <div className="mt-4">
          <ZoomButton label="More Details" />
        </div>
      </div>
    </div>
  );
};



