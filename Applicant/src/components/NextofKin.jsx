import { FileText } from "lucide-react";
import React, { useState } from "react";

const NextofKin = () => {
  const [childrenInfo, setChildrenInfo] = useState({
    children: [
      {
        childName: "",
        age: "",
        motherName: "",
        motherPhone: "",
      },
    ],
  });

  const addChild = () => {
    setChildrenInfo((prev) => ({
      ...prev,
      children: [
        ...prev.children,
        {
          childName: "",
          age: "",
          motherName: "",
          motherPhone: "",
        },
      ],
    }));
  };
  const removeChild = (index) => {
    setChildrenInfo((prev) => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index),
    }));
  };

  const handleChildChange = (index, field, value) => {
    setChildrenInfo((prev) => ({
      ...prev,
      children: prev.children.map((child, i) =>
        i === index ? { ...child, [field]: value } : child,
      ),
    }));
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mt-6">
        <FileText className="w-6 h-6 text-[#1a5c3a]" />
        <h3 className="text-lg font-black text-gray-900">
          Name of Deceased's Next of Kin (NOK)
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Full Legal Name
          </label>
          <input
            type="text"
            // value={nextOfKinName}
            // onChange={(e) => setNextOfKinName(e.target.value)}
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Relationship to Deceased
          </label>
          <select
            // value={nextOfKinRelationship}
            // onChange={(e) => setNextOfKinRelationship(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
          >
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
          </select>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-6 mt-8">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          value={nextOfKinName}
                          placeholder="Surname First, Middle Name, Last N"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Relationship to Deceased
                        </label>
                        <select
                          value={nextOfKinRelationship}
                          onChange={(e) =>
                            setNextOfKinRelationship(e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                        >
                          <option value="">Select relationship</option>
                          <option value="spouse">Spouse</option>
                          <option value="child">Child</option>
                          <option value="parent">Parent</option>
                          <option value="sibling">Sibling</option>
                        </select>
                      </div>
                    </div> */}

      <div className="grid grid-cols-2 gap-6 mt-6 p-4 border-b border-gray-200 ">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Phone Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              defaultValue="+234"
              disabled
              className="w-16 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-600 font-medium"
            />
            <input
              type="text"
              //   value={nextOfKinPhone}
              //   onChange={(e) => setNextOfKinPhone(e.target.value)}
              placeholder="8012345678"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Residential Address
          </label>
          <input
            type="text"
            // value={nextOfKinAddress}
            // onChange={(e) => setNextOfKinAddress(e.target.value)}
            placeholder="Street name, City, LGA, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* // children information */}
      <div>
        {childrenInfo.children.map((child, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-6 mt-8 border-b border-gray-200 pb-6"
          >
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Full Name of Child of Deceased (if applicable)
              </label>

              <input
                type="text"
                // value={child.childName}
                // onChange={(e) =>
                //   handleChildChange(index, "childName", e.target.value)
                // }
                placeholder="Surname First, Middle Name, Last N"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Age of Child of Deceased (if applicable)
              </label>

              <input
                type="number"
                // value={child.age}
                // onChange={(e) =>
                //   handleChildChange(index, "age", e.target.value)
                // }
                placeholder="Enter age"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Full Name of the Mother (if applicable)
              </label>

              <input
                type="text"
                // value={child.motherName}
                // onChange={(e) =>
                //   handleChildChange(index, "motherName", e.target.value)
                // }
                placeholder="Surname First, Middle Name, Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Mother Phone Number (if applicable)
              </label>

              <input
                type="text"
                // value={child.motherPhone}
                // onChange={(e) =>
                //   handleChildChange(index, "motherPhone", e.target.value)
                // }
                placeholder="8012345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            {childrenInfo.children.length > 1 && (
              <div className="col-span-2">
                <button
                  type="button"
                    onClick={() => removeChild(index)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Remove Child
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addChild}
        className="mt-4 text-sm text-[#1a5c3a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
      >
        + Add another child
      </button>

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

export default NextofKin;
