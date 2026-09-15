import { FileText } from "lucide-react";
import React from "react";

const Assets = ({
  bankAccounts,
  setBankAccounts,
  personalChattel,
  setPersonalChattel,
  insurancePolicy,
  setInsurancePolicy,
  companyShare,
  setCompanyShare,
  pensionManager,
  setPensionManager,
  pensionAccountNumber,
  setPensionAccountNumber,
  landedProperty,
  setLandedProperty,
  addressOfProperty,
  setAddressOfProperty,
  rent,
  setRent,
  nameOfTenant,
  setNameOfTenant,
  suretyA,
  setSuretyA,
  suretyB,
  setSuretyB,
}) => {
  const addBank = () => {
    setBankAccounts((prev) => ({
      ...prev,
      bankDetails: [
        ...prev.bankDetails,
        {
          bankName: "",
          accountNumber: "",
        },
      ],
    }));
  };

  const removeBank = (index) => {
    setBankAccounts((prev) => ({
      ...prev,
      bankDetails: prev.bankDetails.filter((_, i) => i !== index),
    }));
  };

  const handleBankChange = (index, field, value) => {
    setBankAccounts((prev) => ({
      ...prev,
      bankDetails: prev.bankDetails.map((account, i) =>
        i === index ? { ...account, [field]: value } : account,
      ),
    }));
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* ================= BANK ACCOUNTS ================= */}
      <div>
        {bankAccounts.bankDetails.map((account, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 border-b border-gray-200 pb-5 pt-2 sm:gap-6 sm:pb-6 md:grid-cols-2"
          >
            {/* Bank Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Name of the Bank
              </label>

              <input
                type="text"
                value={account.bankName}
                onChange={(e) =>
                  handleBankChange(index, "bankName", e.target.value)
                }
                placeholder="e.g. First Bank, GTBank, Zenith Bank"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Account Number
              </label>

              <input
                type="text"
                value={account.accountNumber}
                onChange={(e) =>
                  handleBankChange(index, "accountNumber", e.target.value)
                }
                placeholder="Account Number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            {/* Remove Bank */}
            {bankAccounts.bankDetails.length > 1 && (
              <div className="col-span-1 md:col-span-2">
                <button
                  type="button"
                  onClick={() => removeBank(index)}
                  className="mt-1 flex items-center gap-1 text-sm font-bold text-red-600 hover:underline"
                >
                  - Remove bank account
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addBank}
        className="flex items-center gap-1 text-sm font-bold text-[#1a5c3a] hover:underline"
      >
        + Add another bank account
      </button>

      {/* ================= PERSONAL CHATTEL ================= */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Personal Chattel
        </label>

        <textarea
          value={personalChattel}
          onChange={(e) => setPersonalChattel(e.target.value)}
          placeholder="List any personal chattel (e.g. vehicles, jewelry, electronics) owned by the deceased that may be relevant to the probate application. If there are no personal chattel, please write 'None'."
          rows={4}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      {/* ================= INSURANCE ================= */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Insurance Policies
        </label>

        <textarea
          value={insurancePolicy}
          onChange={(e) => setInsurancePolicy(e.target.value)}
          placeholder="List any insurance policies (e.g. life insurance, health insurance) held by the deceased that may be relevant to the probate application. Include the name of the insurance company and policy number if available. If there are no insurance policies, please write 'None'."
          rows={4}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      {/* ================= COMPANY SHARES ================= */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Share in Company (if any)
        </label>

        <textarea
          value={companyShare}
          onChange={(e) => setCompanyShare(e.target.value)}
          placeholder="List any shares in companies or businesses owned by the deceased that may be relevant to the probate application. Include the name of the company, type of business, and percentage of ownership if available. If there are no shares in companies, please write 'None'."
          rows={4}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      {/* ================= PENSION ================= */}
      <div className="grid grid-cols-1 gap-4 border-t border-gray-200 pt-5 sm:gap-6 sm:pt-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Pension Manager
          </label>

          <input
            type="text"
            value={pensionManager}
            onChange={(e) => setPensionManager(e.target.value)}
            placeholder="Name of the Pension Manager"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-gray-900">
            Pension Account Number
          </label>

          <input
            type="text"
            value={pensionAccountNumber}
            onChange={(e) => setPensionAccountNumber(e.target.value)}
            placeholder="Pension Account Number"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
          />
        </div>
      </div>

      {/* ================= PROPERTY ================= */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Landed Property/IES (if any)
        </label>

        <textarea
          value={landedProperty}
          onChange={(e) => setLandedProperty(e.target.value)}
          placeholder="Enter the name of the property/IES"
          rows={3}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Address of the property/IES (if any)
        </label>

        <textarea
          value={addressOfProperty}
          onChange={(e) => setAddressOfProperty(e.target.value)}
          placeholder="Enter the address of the property/IES"
          rows={3}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Rent per annum (if the property is rented out)
        </label>

        <input
          type="text"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter the annual rent amount"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      {/* ================= TENANT ================= */}
      <div>
        <label className="mb-2 block text-sm font-bold text-gray-900">
          Name of Tenant (if the property is rented out)
        </label>

        <input
          type="text"
          value={nameOfTenant}
          onChange={(e) => setNameOfTenant(e.target.value)}
          placeholder="Enter the name of the tenant"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
        />
      </div>

      {/* ================= SURETIES ================= */}
      <div className="border-t border-gray-200 pt-5 sm:pt-6">
        <div className="mb-5 flex items-center gap-2 sm:mb-6 sm:gap-3">
          <FileText className="h-5 w-5 shrink-0 text-[#1a5c3a] sm:h-6 sm:w-6" />

          <h3 className="text-base font-black text-gray-900 sm:text-lg">
            Details of Sureties
          </h3>
        </div>

        {/* SURETY A */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 text-2xl font-bold text-[#1a5c3a] sm:text-3xl">
              A
            </div>

            <label className="mb-2 block text-sm font-bold text-gray-900">
              Name, Phone Number and Address of the Surety
            </label>

            <textarea
              value={suretyA.details}
              onChange={(e) =>
                setSuretyA({
                  ...suretyA,
                  details: e.target.value,
                })
              }
              placeholder="Enter the name, phone number and address of the surety"
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Occupation of Surety
            </label>

            <input
              type="text"
              value={suretyA.occupation}
              onChange={(e) =>
                setSuretyA({
                  ...suretyA,
                  occupation: e.target.value,
                })
              }
              placeholder="Enter the occupation of the surety"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Name and Account Number of the Bank where the Surety has an
              Account
            </label>

            <textarea
              value={suretyA.bankDetails}
              onChange={(e) =>
                setSuretyA({
                  ...suretyA,
                  bankDetails: e.target.value,
                })
              }
              placeholder="Enter the name and account number of the bank"
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Value of Real Property
            </label>

            <input
              type="text"
              value={suretyA.propertyValue}
              onChange={(e) =>
                setSuretyA({
                  ...suretyA,
                  propertyValue: e.target.value,
                })
              }
              placeholder="Enter the value of the real property"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Salary/Income per annum
            </label>

            <input
              type="text"
              value={suretyA.annualIncome}
              onChange={(e) =>
                setSuretyA({
                  ...suretyA,
                  annualIncome: e.target.value,
                })
              }
              placeholder="Enter the salary/income per annum of the surety"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
            />
          </div>
        </div>

        {/* SURETY B */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="mb-2 text-2xl font-bold text-[#1a5c3a] sm:text-3xl">
            B
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Name, Phone Number and Address of the Surety
              </label>

              <textarea
                value={suretyB.details}
                onChange={(e) =>
                  setSuretyB({
                    ...suretyB,
                    details: e.target.value,
                  })
                }
                placeholder="Enter the name, phone number and address of the surety"
                rows={3}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Occupation of Surety
              </label>

              <input
                type="text"
                value={suretyB.occupation}
                onChange={(e) =>
                  setSuretyB({
                    ...suretyB,
                    occupation: e.target.value,
                  })
                }
                placeholder="Enter the occupation of the surety"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Name and Account Number of the Bank where the Surety has an
                Account
              </label>

              <textarea
                value={suretyB.bankDetails}
                onChange={(e) =>
                  setSuretyB({
                    ...suretyB,
                    bankDetails: e.target.value,
                  })
                }
                placeholder="Enter the name and account number of the bank"
                rows={3}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Value of Real Property
              </label>

              <input
                type="text"
                value={suretyB.propertyValue}
                onChange={(e) =>
                  setSuretyB({
                    ...suretyB,
                    propertyValue: e.target.value,
                  })
                }
                placeholder="Enter the value of the real property"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-900">
                Salary/Income per annum
              </label>

              <input
                type="text"
                value={suretyB.annualIncome}
                onChange={(e) =>
                  setSuretyB({
                    ...suretyB,
                    annualIncome: e.target.value,
                  })
                }
                placeholder="Enter the salary/income per annum of the surety"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a5c3a]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;