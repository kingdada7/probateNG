import React from "react";

const FamilyInfo = ({
  family,
  setFamily,
  nameAndAddressOfGuardianOfMinorChildren,
  setNameAndAddressOfGuardianOfMinorChildren,
  nameAndAgeOfMinorChildren,
  setNameAndAgeOfMinorChildren,
}) => {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Minor Children */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Name and Age of Minor Children of the Deceased
        </label>

        <textarea
          value={nameAndAgeOfMinorChildren}
          onChange={(e) => setNameAndAgeOfMinorChildren(e.target.value)}
          placeholder="Provide the full names and ages of any minor children of the deceased. If there are no minor children, please write 'None'."
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          rows={3}
        />
      </div>

      {/* Guardian */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Name and Address of the Guardian of Minor Children (if applicable)
        </label>

        <textarea
          value={nameAndAddressOfGuardianOfMinorChildren}
          onChange={(e) =>
            setNameAndAddressOfGuardianOfMinorChildren(e.target.value)
          }
          placeholder="Provide the full names and addresses of the guardians of any minor children of the deceased. If there are no minor children, please write 'None'."
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          rows={3}
        />
      </div>

      {/* Family Information */}
      <div className="grid grid-cols-1 gap-4 border-t border-gray-200 pt-5 sm:gap-6 sm:pt-6 md:grid-cols-2">
        {/* Father Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Full Name of the Father of the Deceased (if applicable)
          </label>

          <input
            type="text"
            value={family.father.name}
            onChange={(e) =>
              setFamily({
                ...family,
                father: {
                  ...family.father,
                  name: e.target.value,
                },
              })
            }
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Father Address */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Address of the Father (if applicable)
          </label>

          <input
            type="text"
            value={family.father.address}
            onChange={(e) =>
              setFamily({
                ...family,
                father: {
                  ...family.father,
                  address: e.target.value,
                },
              })
            }
            placeholder="Street name, City, LGA, State"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Mother Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Full Name of the Mother of the Deceased (if applicable)
          </label>

          <input
            type="text"
            value={family.mother.name}
            onChange={(e) =>
              setFamily({
                ...family,
                mother: {
                  ...family.mother,
                  name: e.target.value,
                },
              })
            }
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Mother Address */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Address of the Mother (if applicable)
          </label>

          <input
            type="text"
            value={family.mother.address}
            onChange={(e) =>
              setFamily({
                ...family,
                mother: {
                  ...family.mother,
                  address: e.target.value,
                },
              })
            }
            placeholder="Street name, City, LGA, State"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Brother Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Full Name of the Brother of the Deceased (if applicable)
          </label>

          <input
            type="text"
            value={family.brother.name}
            onChange={(e) =>
              setFamily({
                ...family,
                brother: {
                  ...family.brother,
                  name: e.target.value,
                },
              })
            }
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Brother Address */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Address of the Brother (if applicable)
          </label>

          <input
            type="text"
            value={family.brother.address}
            onChange={(e) =>
              setFamily({
                ...family,
                brother: {
                  ...family.brother,
                  address: e.target.value,
                },
              })
            }
            placeholder="Street name, City, LGA, State"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Sister Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Full Name of the Sister (if applicable)
          </label>

          <input
            type="text"
            value={family.sister.name}
            onChange={(e) =>
              setFamily({
                ...family,
                sister: {
                  ...family.sister,
                  name: e.target.value,
                },
              })
            }
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        {/* Sister Address */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Address of the Sister (if applicable)
          </label>

          <input
            type="text"
            value={family.sister.address}
            onChange={(e) =>
              setFamily({
                ...family,
                sister: {
                  ...family.sister,
                  address: e.target.value,
                },
              })
            }
            placeholder="Street name, City, LGA, State"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;