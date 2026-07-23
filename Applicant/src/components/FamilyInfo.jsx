import React from "react";

const FamilyInfo = () => {
  return (
    <div>
      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Name and Age of Minor Children of the Deceased
        </label>
        <textarea
          //   value={nameAndAgeOfMinorChildren}
          //   onChange={(e) => setNameAndAgeOfMinorChildren(e.target.value)}
          placeholder="Provide the full names and ages of any minor children of the deceased. If there are no minor children, please write 'None'."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Name and Address of the Guardian of Minor Children (if applicable)
        </label>
        <textarea
          //   value={nameAndAddressOfGuardianOfMinorChildren}
          //   onChange={(e) =>
          //     setNameAndAddressOfGuardianOfMinorChildren(e.target.value)
          //   }
          placeholder="Provide the full names and addresses of the guardians of any minor children of the deceased. If there are no minor children, please write 'None'."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
          rows={3}
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Name of the Father of the Deceased (if applicable)
          </label>
          <input
            type="text"
            // value={fatherName}
            // onChange={(e) => setFatherName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Address of the Father (if applicable)
          </label>
          <input
            type="text"
            // value={fatherAddress}
            // onChange={(e) => setFatherAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Name of the Mother of the Deceased (if applicable)
          </label>
          <input
            type="text"
            // value={motherName}
            // onChange={(e) => setMotherName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Address of the Mother (if applicable)
          </label>
          <input
            type="text"
            // value={motherAddress}
            // onChange={(e) => setMotherAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Name of the Brother of the Deceased (if applicable)
          </label>
          <input
            type="text"
            // value={brotherName}
            // onChange={(e) => setBrotherName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Address of the Brother (if applicable)
          </label>
          <input
            type="text"
            // value={brotherAddress}
            // onChange={(e) => setBrotherAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Name of the Sister (if applicable)
          </label>
          <input
            type="text"
            // value={sisterName}
            // onChange={(e) => setSisterName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Address of the Sister (if applicable)
          </label>
          <input
            type="text"
            // value={sisterAddress}
            // onChange={(e) => setSisterAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
