import { FileText } from "lucide-react";
import React from "react";

const NextofKin = ({ nextOfKin, setNextOfKin, children, setChildren }) => {
  const addChild = () => {
    setChildren((prev) => [
      ...prev,
      {
        childName: "",
        age: "",
        motherName: "",
        motherPhone: "",
      },
    ]);
  };

  const removeChild = (index) => {
    setChildren((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChildChange = (index, field, value) => {
    setChildren((prev) =>
      prev.map((child, i) =>
        i === index ? { ...child, [field]: value } : child,
      ),
    );
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
            value={nextOfKin.name}
            onChange={(e) =>
              setNextOfKin({
                ...nextOfKin,
                name: e.target.value,
              })
            }
            placeholder="Surname First, Middle Name, Last N"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Relationship to Deceased
          </label>
          <select
            value={nextOfKin.relationship}
            onChange={(e) =>
              setNextOfKin({
                ...nextOfKin,
                relationship: e.target.value,
              })
            }
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
              value={nextOfKin.phone}
              onChange={(e) =>
                setNextOfKin({
                  ...nextOfKin,
                  phone: e.target.value,
                })
              }
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
        {children.map((child, index) => (
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
                value={child.childName}
                onChange={(e) =>
                  handleChildChange(index, "childName", e.target.value)
                }
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
                value={child.age}
                onChange={(e) =>
                  handleChildChange(index, "age", e.target.value)
                }
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
                value={child.motherName}
                onChange={(e) =>
                  handleChildChange(index, "motherName", e.target.value)
                }
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
                value={child.motherPhone}
                onChange={(e) =>
                  handleChildChange(index, "motherPhone", e.target.value)
                }
                placeholder="8012345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            {children.length > 1 && (
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
    </div>
  );
};

export default NextofKin;
