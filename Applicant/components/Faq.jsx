import { HelpCircle } from "lucide-react";
import React from "react";

const Faq = () => {
  return (
    <div className="bg-gray-100 rounded-xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <div
        
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#1a5c2a]" 
      >
        <HelpCircle size={22} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-gray-900">Need Assistance?</h3>
        <p className="text-sm text-gray-500 mt-0.5">
          Access probate guidelines or chat with a registry officer.
        </p>
      </div>
      <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
        <button className="bg-white border border-gray-300 text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">
          Probate FAQ
        </button>
        <button
    
          className="text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap bg-[#1a5c2a]"
        >
          Contact Registry
        </button>
      </div>
    </div>
  );
};

export default Faq;
