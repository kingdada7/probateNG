import { useState } from 'react';
import { Shield, Home, ChevronRight, ArrowRight, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          <a href="#" className="block text-sm text-gray-700 font-medium py-2 border-b border-gray-50">Home</a>
          <a href="#" className="block text-sm text-gray-700 font-medium py-2 border-b border-gray-50">Apply for Probate</a>
          <a href="#" className="block text-sm text-gray-700 font-medium py-2 border-b border-gray-50">Track Application</a>
          <button className="w-full bg-[#1a5c2a] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#164d23] transition-colors mt-2">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-[#1a5c2a] text-white text-center text-xs sm:text-sm py-2.5 px-4 font-medium tracking-wide">
      OFFICIAL PORTAL OF THE FCT CUSTOMARY COURT - ABUJA JUDICIAL DIVISION
    </div>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-[45%] shrink-0">
          <img
            src="https://images.pexels.com/photos/1464580/pexels-photo-1464580.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="FCT Customary Court Building"
            className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight mb-5">
            Probate<br />Application<br />Portal
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
            Digitizing the administration of estates for the residents of the Federal Capital Territory.
            Efficiently apply for probate or track your existing application online with full legal transparency.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1a5c2a] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#164d23] transition-colors text-sm">
              Apply for Probate
            </button>
            <button className="border-2 border-[#1a5c2a] text-[#1a5c2a] font-semibold px-6 py-3 rounded-md hover:bg-[#f0f7f2] transition-colors text-sm">
              Track Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Probate',
      subtitle: 'Estates with a valid Will',
      description:
        'Official process to validate a deceased person\'s will and appoint executors to manage the estate according to the instructions provided.',
      link: 'Learn More',
    },
    {
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Letters of Administration',
      subtitle: 'Estates without a valid Will',
      description:
        'Required when someone dies intestate. This gives the court-appointed administrator authority to manage and distribute the deceased\'s assets.',
      link: 'Learn More',
    },
    {
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Required Documents',
      subtitle: 'Mandatory Filing Checklist',
      description:
        'Detailed list of identification, death certificates, and financial statements required for a complete and successful application process.',
      link: 'View Checklist',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-7 bg-[#1a5c2a] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Services & Requirements</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">{service.title}</h3>
                <p className="text-[#1a5c2a] text-sm font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-gray-900 text-sm font-semibold hover:text-[#1a5c2a] transition-colors">
                  {service.link} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackSection() {
  const [refNumber, setRefNumber] = useState('');

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-2xl px-6 sm:px-12 py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a5c2a] mb-4">
          Track Your Application Status
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Already submitted your filing? Enter your application reference number below to receive a
          real-time status update from the Judicial Division.
        </p>
        <div className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm max-w-xl mx-auto">
          <input
            type="text"
            value={refNumber}
            onChange={e => setRefNumber(e.target.value)}
            placeholder="Enter Application Reference Number (e.g., FCT/PRB/2C..."
            className="flex-1 px-4 py-3.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400 min-w-0"
          />
          <button className="bg-[#1a5c2a] text-white font-semibold px-6 py-3.5 text-sm hover:bg-[#164d23] transition-colors whitespace-nowrap shrink-0">
            Track Now
          </button>
        </div>
      </div>
    </section>
  );
}




