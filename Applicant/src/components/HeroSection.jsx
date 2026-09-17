import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-[45%] shrink-0">
          <img
            src="https://fctcca.gov.ng/uploads/THE%20COURT.jpeg"
            alt="FCT Customary Court Building"
            className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight mb-5">
            Probate
            <br />
            Application
            <br />
            Portal
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
            Digitizing the administration of estates for the residents of the
            Federal Capital Territory. Efficiently apply for probate or track
            your existing application online with full legal transparency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/citizenportal" className="bg-[#1a5c2a] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#164d23] transition-colors text-sm">
              Apply for Probate
            </Link>
            {/* <Link to="/track" className="border-2 border-[#1a5c2a] text-[#1a5c2a] font-semibold px-6 py-3 rounded-md hover:bg-[#f0f7f2] transition-colors text-sm">
              Track Application
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
