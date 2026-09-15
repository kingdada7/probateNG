import { FileText } from "lucide-react";
import React from "react";

const DeceasedInfo = ({
  deceasedName,
  setDeceasedName,
  dateOfDeath,
  setDateOfDeath,
  placeOfDeath,
  setPlaceOfDeath,
  dateOfMarriage,
  setDateOfMarriage,
  spouseName,
  setSpouseName,
  occupationAndPlaceOfWork,
  setOccupationAndPlaceOfWork,
  formOfMarriage,
  setFormOfMarriage,
  identificationType,
  setIdentificationType,
  identificationNumber,
  setIdentificationNumber,
  lastAddress,
  setLastAddress,
}) => {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Deceased Name + Date of Death */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Full Name of Deceased
          </label>
          <input
            type="text"
            value={deceasedName}
            onChange={(e) => setDeceasedName(e.target.value)}
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Date of Death
          </label>
          <input
            type="date"
            value={dateOfDeath}
            onChange={(e) => setDateOfDeath(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>

      {/* Place of Death + Marriage */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Place of Death
          </label>
          <input
            type="text"
            value={placeOfDeath}
            onChange={(e) => setPlaceOfDeath(e.target.value)}
            placeholder="Enter place of death"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Date of Marriage
          </label>
          <input
            type="date"
            value={dateOfMarriage}
            onChange={(e) => setDateOfMarriage(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Spouse of Deceased
          </label>
          <input
            type="text"
            value={spouseName}
            onChange={(e) => setSpouseName(e.target.value)}
            placeholder="Enter spouse's full name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Occupation and Place of Work
          </label>
          <input
            type="text"
            value={occupationAndPlaceOfWork}
            onChange={(e) => setOccupationAndPlaceOfWork(e.target.value)}
            placeholder="e.g. Civil Servant, XYZ Company"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>

      {/* Form of Marriage */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Form of Marriage
          </label>

          <select
            value={formOfMarriage}
            onChange={(e) => setFormOfMarriage(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          >
            <option value="Statutory Marriage">Statutory Marriage</option>
          </select>
        </div>
      </div>

      {/* Identification */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Identification Type
          </label>

          <select
            value={identificationType}
            onChange={(e) => setIdentificationType(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          >
            <option value="">Select Identification Type</option>
            <option value="NIN">National ID (NIN)</option>
            <option value="Voters Card">Voters Card</option>
            <option value="International Passport">
              International Passport
            </option>
            <option value="Driver's License">Driver's License</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            ID Number
          </label>

          <input
            type="text"
            value={identificationNumber}
            onChange={(e) => setIdentificationNumber(e.target.value)}
            placeholder="Enter identification number"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>

      {/* Address */}
      <div className="border-t border-gray-200 pt-5 sm:pt-6">
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <FileText className="h-5 w-5 shrink-0 text-[#1a5c3a] sm:h-6 sm:w-6" />

          <h3 className="text-base font-black text-gray-900 sm:text-lg">
            Contact Information
          </h3>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Last Known Residential Address of Deceased
          </label>

          <textarea
            value={lastAddress}
            onChange={(e) => setLastAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>
    </div>
  );
};

export default DeceasedInfo;