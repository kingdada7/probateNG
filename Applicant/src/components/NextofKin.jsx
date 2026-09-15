import { FileText } from "lucide-react";
import React from "react";

const NextofKin = ({ nextOfKin, setNextOfKin, children, setChildren }) => {
  const addChild = () => {
    setChildren((prev) => [
      ...prev,
      {
        name: "",
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
    <div className="space-y-5 sm:space-y-6">
      {/* Section Header */}
      <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
        <FileText className="h-5 w-5 shrink-0 text-[#1a5c3a] sm:h-6 sm:w-6" />

        <h3 className="text-base font-black text-gray-900 sm:text-lg">
          Name of Deceased's Next of Kin (NOK)
        </h3>
      </div>

      {/* NOK Name + Relationship */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
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
            placeholder="Surname First, Middle Name, Last Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
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
            className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          >
            <option value="">Select relationship</option>
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
          </select>
        </div>
      </div>

      {/* Phone + Address */}
      <div className="grid grid-cols-1 gap-4 border-b border-gray-200 pb-5 sm:gap-6 sm:pb-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Phone Number
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              defaultValue="+234"
              disabled
              className="w-16 shrink-0 rounded-lg border border-gray-300 bg-gray-50 px-3 py-3 text-sm font-medium text-gray-600"
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
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Residential Address
          </label>

          <input
            type="text"
            placeholder="Street name, City, LGA, State"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>

      {/* Children Information */}
      <div className="space-y-5">
        {children.map((child, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 border-b border-gray-200 pb-5 sm:gap-6 sm:pb-6 md:grid-cols-2"
          >
            {/* Child Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Full Name of Child of Deceased (if applicable)
              </label>

              <input
                type="text"
                value={child.name}
                onChange={(e) =>
                  handleChildChange(index, "name", e.target.value)
                }
                placeholder="Surname First, Middle Name, Last Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Child Age */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Age of Child of Deceased (if applicable)
              </label>

              <input
                type="number"
                value={child.age}
                onChange={(e) =>
                  handleChildChange(index, "age", e.target.value)
                }
                placeholder="Enter age"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Mother Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Full Name of the Mother (if applicable)
              </label>

              <input
                type="text"
                value={child.motherName}
                onChange={(e) =>
                  handleChildChange(index, "motherName", e.target.value)
                }
                placeholder="Surname First, Middle Name, Last Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Mother Phone */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Mother Phone Number (if applicable)
              </label>

              <input
                type="text"
                value={child.motherPhone}
                onChange={(e) =>
                  handleChildChange(index, "motherPhone", e.target.value)
                }
                placeholder="8012345678"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Remove Child */}
            {children.length > 1 && (
              <div className="col-span-1 md:col-span-2">
                <button
                  type="button"
                  onClick={() => removeChild(index)}
                  className="text-sm font-bold text-red-600 transition hover:underline"
                >
                  Remove Child
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Child */}
      <button
        type="button"
        onClick={addChild}
        className="mt-2 flex items-center gap-1 text-sm font-bold text-[#1a5c3a] transition hover:underline"
      >
        + Add another child
      </button>
    </div>
  );
};

export default NextofKin;