import { AlertCircle, FileText, Lock } from "lucide-react";
import React, { useState } from "react";
import ApplicationFooter from "./ApplicationFooter";
import { useAppContext } from "../context/AppContext";

const ApplicationInformationForm = () => {
  const { axios, navigate } = useAppContext();
  const [applicantFullName, setApplicantFullName] = useState("");
const [applicantEmail, setApplicantEmail] = useState("");
const [applicantPhoneNumber, setApplicantPhoneNumber] = useState("");
const [applicantAddress, setApplicantAddress] = useState("");
const [applicantOccupation, setApplicantOccupation] = useState("");
const [relationshipToDeceased, setRelationshipToDeceased] = useState("");
const [identificationType, setIdentificationType] = useState("");
const [identificationNumber, setIdentificationNumber] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/api/application/application-information",
        {
          applicantFullName,
          applicantEmail,
          applicantPhoneNumber,
          applicantAddress,
          applicantOccupation,
          relationshipToDeceased,
          identificationType,
          identificationNumber,
        },
      );

      if (data.success) {
        // save application id
        localStorage.setItem("applicationId", data.application._id);

        navigate("/citizenportal/deceasedinformation");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="col-span-3">
        <div className="col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-[#1a5c3a]" />
              <h2 className="text-2xl font-black text-gray-900">
                Personal Details
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    value={applicantFullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Surname First, Middle Name, Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Relationship to Deceased
                  </label>
                  <select
                    // value={relationship}
                    // onChange={(e) => setRelationship(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    // value={occupation}
                    // onChange={(e) => setOccupation(e.target.value)}
                    placeholder="e.g. Civil Servant"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Identification Type
                  </label>
                  <select
                    // value={idType}
                    // onChange={(e) => setIdType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                  >
                    <option value="National ID (NIN)">National ID (NIN)</option>
                    <option value="Passport">Passport</option>
                    <option value="Driver's License">Driver's License</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  ID Number
                </label>
                <input
                  type="text"
                  //   value={idNumber}
                  //   onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="Enter identification number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                />
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
                    Permanent Residential Address
                  </label>
                  <textarea
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street name, City, LGA, State"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
                    rows={3}
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
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
                        // value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        placeholder="8012345678"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-700 text-sm font-bold hover:text-gray-900">
                  <Lock className="w-4 h-4" />
                  Save Draft
                </button>
                <div className="flex-1"></div>
                {/* <button className="px-6 py-3 text-gray-600 text-sm font-bold border border-gray-300 rounded-lg hover:bg-gray-50">
                      Previous
                    </button> */}

                <button className="px-6 py-3 bg-[#1a5c3a] text-white text-sm font-bold rounded-lg hover:bg-[#154d2f] flex items-center gap-2">
                  Save & Continue
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          <ApplicationFooter />
        </div>
      </form>
    </div>
  );
};

export default ApplicationInformationForm;
