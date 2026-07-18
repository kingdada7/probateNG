import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={22} className="text-[#1a5c2a]" fill="#1a5c2a" />
              <span className="font-bold text-gray-900 text-base">FCT Court Portal</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ensuring efficient and transparent estate administration for all residents of the Federal Capital Territory, Abuja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Probate Guidelines', 'Fee Schedule', 'Download Forms'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#1a5c2a] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Court Locations */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">Court Locations</h4>
            <ul className="space-y-2.5">
              {['Abuja Judicial Division', 'Gwagwalada Division', 'Kuje Division', 'Bwari Division'].map(loc => (
                <li key={loc}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#1a5c2a] transition-colors">{loc}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">Contact Support</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-gray-500 mt-0.5 shrink-0" />
                <a href="mailto:support@fctcustomarycourt.gov.ng" className="text-gray-500 text-sm hover:text-[#1a5c2a] transition-colors break-all">
                  support@fctcustomarycourt.gov.ng
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gray-500 shrink-0" />
                <a href="tel:+2349123456" className="text-gray-500 text-sm hover:text-[#1a5c2a] transition-colors">
                  +234 9 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-gray-500 shrink-0" />
                <span className="text-gray-500 text-sm">Abuja, FCT, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; 2024 FCT Customary Court of Nigeria. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Accessibility Statement'].map(item => (
              <a key={item} href="#" className="text-gray-400 text-xs hover:text-[#1a5c2a] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
