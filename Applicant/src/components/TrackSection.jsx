// import React from "react";
// import { useState } from "react";

// const TrackSection = () => {
//   const [refNumber, setRefNumber] = useState("");
//   return (
//     <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto bg-gray-100 rounded-2xl px-6 sm:px-12 py-14 text-center">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a5c2a] mb-4">
//           Track Your Application Status
//         </h2>
//         <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg mx-auto">
//           Already submitted your filing? Enter your application reference number
//           below to receive a real-time status update from the Judicial Division.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm max-w-xl mx-auto">
//           <input
//             type="text"
//             value={refNumber}
//             onChange={(e) => setRefNumber(e.target.value)}
//             placeholder="Enter Application Reference Number (e.g., FCT/PRB/2C..."
//             className="flex-1 px-4 py-3.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400 min-w-0"
//           />
//           <button className="bg-[#1a5c2a] text-white font-semibold px-6 py-3.5 text-sm hover:bg-[#164d23] transition-colors whitespace-nowrap shrink-0">
//             Track Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrackSection;
