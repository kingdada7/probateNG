import React from "react";
import { services } from "../src/assets/assests";
import { ArrowRight } from "lucide-react";


const ServiceSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-7 bg-[#1a5c2a] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Services & Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                  {service.title}
                </h3>
                <p className="text-[#1a5c2a] text-sm font-semibold mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-gray-900 text-sm font-semibold hover:text-[#1a5c2a] transition-colors"
                >
                  {service.link} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
