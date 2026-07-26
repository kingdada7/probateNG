import React from "react";

const EstateSummary = ({ estate, setEstate }) => {
  const GREEN = "#1a5c2a";
  return (
    <div>
      {/* Section 2 — Estate Summary */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="w-5 h-5 rounded flex items-center justify-center"
            style={{ backgroundColor: GREEN }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="0.8" fill="white" />
              <rect x="9" y="1" width="6" height="6" rx="0.8" fill="white" />
              <rect x="1" y="9" width="6" height="6" rx="0.8" fill="white" />
              <rect x="9" y="9" width="6" height="6" rx="0.8" fill="white" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900">2. Estate Summary</h2>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Total Value of Estate (₦)
          </label>
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 max-w-xs gap-2 focus-within:border-[#1a5c2a] focus-within:ring-1 focus-within:ring-[#1a5c2a] transition">
            <span className="text-sm font-semibold text-gray-600 shrink-0">
              ₦
            </span>
            <input
              type="text"
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-800 outline-none min-w-0 font-medium"
            />
          </div>
          <p className="mt-2 text-xs italic" style={{ color: GREEN }}>
            This should represent the gross value of all movable and immovable
            assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstateSummary;
