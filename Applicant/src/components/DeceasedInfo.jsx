import React from "react";

const DeceasedInfo = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Name of Deceased
          </label>
          <input
            type="text"
            // value={deceasedName}
            // onChange={(e) => setDeceasedName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Date of Death
          </label>
          <input
            type="date"
            // value={dateOfDeath}
            // onChange={(e) => setDateOfDeath(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Place of Death
          </label>
          <input
            type="text"
            // value={placeOfDeath}
            // onChange={(e) => setPlaceOfDeath(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Date of Marriage
          </label>
          <input
            type="date"
            // value={dateOfMarriage}
            // onChange={(e) => setDateOfMarriage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Spouse of Deceased
          </label>
          <input
            type="text"
            // value={spouseName}
            // onChange={(e) => setSpouseName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Occupation and Place of Work
          </label>
          <input
            type="text"
            // value={occupationAndPlaceOfWork}
            // onChange={(e) => setOccupationAndPlaceOfWork(e.target.value)}
            placeholder="e.g. Civil Servant, XYZ Company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Form of Marriage
          </label>
          <select
            // value={formOfMarriage}
            // onChange={(e) => setFormOfMarriage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
          >
            <option value="Statutory Marriage">Statutory Marriage</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Identification Type
          </label>
          <select
            // value={identificationType}
            // onChange={(e) => setIdentificationType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
          >
            <option value="NIN">National ID (NIN)</option>

            <option value="Voters Card">Voters Card</option>

            <option value="International Passport">
              International Passport
            </option>

            <option value="Driver's License">Driver's License</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            ID Number
          </label>
          <input
            type="text"
            // value={identificationNumber}
            // onChange={(e) => setIdentificationNumber(e.target.value)}
            placeholder="Enter identification number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-[#1a5c3a]" />
          <h3 className="text-lg font-black text-gray-900">
            Contact Information
          </h3>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Last Known Residential Address of Deceased
          </label>
          <textarea
            // value={lastAddress}
            // onChange={(e) => setLastAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default DeceasedInfo;
