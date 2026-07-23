import { FileText } from "lucide-react";
import React, { useState } from "react";

const Assets = () => {
  // // Surety A
  const [suretyA, setSuretyA] = useState({
    details: "",
    occupation: "",
    bankDetails: "",
    propertyValue: "",
    annualIncome: "",
  });

  // Surety B
  const [suretyB, setSuretyB] = useState({
    details: "",
    occupation: "",
    bankDetails: "",
    propertyValue: "",
    annualIncome: "",
  });

  // // Bank Accounts
  const [bankAccounts, setBankAccounts] = useState({
    bankDetails: [
      {
        bankName: "",
        accountNumber: "",
      },
    ],
  });
  return (
    <div className="space-y-6">
      {/* //bank and account no */}
      {bankAccounts.bankDetails.map((account, index) => (
        <div key={index} className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Name of the Bank
            </label>
            <input
              type="text"
              value={account.bankName}
              //   onChange={(e) => {
              //     const newBankDetails = [...bankAccounts.bankDetails];
              //     newBankDetails[index].bankName = e.target.value;

              //     setBankAccounts({
              //       ...bankAccounts,
              //       bankDetails: newBankDetails,
              //     });
              //   }}
              placeholder="e.g. First Bank, GTBank, Zenith Bank"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Account Number
            </label>
            <input
              type="text"
              value={account.accountNumber}
              //   onChange={(e) => {
              //     const newBankDetails = [...bankAccounts.bankDetails];
              //     newBankDetails[index].accountNumber = e.target.value;

              //     setBankAccounts({
              //       ...bankAccounts,
              //       bankDetails: newBankDetails,
              //     });
              //   }}
              placeholder="Account Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>

          {bankAccounts.bankDetails.length > 1 && (
            <div className="col-span-2">
              <button
                type="button"
                // onClick={() => removeBank(index)}
                className="mt-2 text-sm text-[#dc2626] font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                - Remove bank account
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        // onClick={addBank}
        className="mt-2 text-sm text-[#1a5c3a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
      >
        + Add another bank account
      </button>
      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Personal Chatel
        </label>
        <input
          type="text"
          //   value={personalChattel}
          //   onChange={(e) => setPersonalChattel(e.target.value)}
          placeholder="List any personal chattel (e.g. vehicles, jewelry, electronics) owned by the deceased that may be relevant to the probate application. If there are no personal chattel, please write 'None'."
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Insurance Policies
        </label>
        <input
          type="text"
          //   value={insurancePolicy}
          //   onChange={(e) => setInsurancePolicy(e.target.value)}
          placeholder="List any insurance policies (e.g. life insurance, health insurance) held by the deceased that may be relevant to the probate application. Include the name of the insurance company and policy number if available. If there are no insurance policies, please write 'None'."
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Share in Company (if any)
        </label>
        <input
          type="text"
          //   value={companyShare}
          //   onChange={(e) => setCompanyShare(e.target.value)}
          placeholder="List any shares in companies or businesses owned by the deceased that may be relevant to the probate application. Include the name of the company, type of business, and percentage of ownership if available. If there are no shares in companies, please write 'None'."
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Pension Manager
          </label>
          <input
            type="text"
            // value={pensionManager}
            // onChange={(e) => setPensionManager(e.target.value)}
            placeholder="Name of the Pension Manager"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Pension Account Number
          </label>
          <input
            type="text"
            // value={pensionAccountNumber}
            // onChange={(e) => setPensionAccountNumber(e.target.value)}
            placeholder="Pension Account Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Landed Property/IES (if any)
        </label>
        <input
          type="text"
          //   value={landedProperty}
          //   onChange={(e) => setLandedProperty(e.target.value)}
          placeholder="Enter the name of the property/IES"
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Address of the property/IES (if any)
        </label>
        <input
          type="text"
          //   value={addressOfProperty}
          //   onChange={(e) => setAddressOfProperty(e.target.value)}
          placeholder="Enter the address of the property/IES"
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Rent per annum (if the property is rented out)
        </label>
        <input
          type="text"
          //   value={rent}
          //   onChange={(e) => setRent(e.target.value)}
          placeholder="Enter the annual rent amount"
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>
      {/* tenant */}
      <div>
        <label className="block text-sm font-bold text-gray-900 mb-2">
          Name of Tenant (if the property is rented out)
        </label>
        <input
          type="text"
          //   value={nameOfTenant}
          //   onChange={(e) => setNameOfTenant(e.target.value)}
          placeholder="Enter the name of the tenant"
          className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
        />
      </div>
      {/* sureties */}
      <div className="border-t border-gray-200 pt-6 ">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-[#1a5c3a]" />
          <h3 className="text-lg font-black text-gray-900">
            Details of Sureties
          </h3>
        </div>
        <div className="text-[#1a5c3a] font-bold text-3xl mb-2 ">A</div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Name,Phone Number and Address of the Sureties
          </label>
          <input
            type="text"
            // value={suretyA.details}
            // onChange={(e) =>
            //   setSuretyA({ ...suretyA, details: e.target.value })
            // }
            placeholder="Enter the name, phone number and address of the sureties"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Occupation of surety
          </label>
          <input
            type="text"
            // value={suretyA.occupation}
            // onChange={(e) =>
            //   setSuretyA({
            //     ...suretyA,
            //     occupation: e.target.value,
            //   })
            // }
            placeholder="Enter the occupation of the surety"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Name and Account Number of the Bank where the surety has an account
          </label>
          <input
            type="text"
            value={suretyA.bankDetails}
            // onChange={(e) =>
            //   setSuretyA({
            //     ...suretyA,
            //     bankDetails: e.target.value,
            //   })
            // }
            placeholder="Enter the name and account number of the bank"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Value of Real property
          </label>
          <input
            type="text"
            // value={suretyA.propertyValue}
            // onChange={(e) =>
            //   setSuretyA({
            //     ...suretyA,
            //     propertyValue: e.target.value,
            //   })
            // }
            placeholder=" Enter the value of the real property "
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Salary/Income per annum
          </label>
          <input
            type="text"
            // value={suretyA.salary}
            // onChange={(e) => setSuretyA({ ...suretyA, salary: e.target.value })}
            placeholder=" Enter the salary/income per annum of the surety"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="text-[#1a5c3a] font-bold text-3xl mb-2 ">B</div>
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Name,Phone Number and Address of the Sureties
          </label>
          <input
            type="text"
            // value={suretyB.fullName}
            // onChange={(e) =>
            //   setSuretyB({ ...suretyB, fullName: e.target.value })
            // }
            placeholder="Enter the name, phone number and address of the sureties"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Occupation of surety
          </label>
          <input
            type="text"
            // value={suretyB.occupation}
            // onChange={(e) =>
            //   setSuretyB({
            //     ...suretyB,
            //     occupation: e.target.value,
            //   })
            // }
            placeholder="Enter the occupation of the surety"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Name and Account Number of the Bank where the surety has an account
          </label>
          <input
            type="text"
            // value={suretyB.bankName}
            // onChange={(e) =>
            //   setSuretyB({ ...suretyB, bankName: e.target.value })
            // }
            placeholder="Enter the name and account number of the bank"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Value of Real property
          </label>
          <input
            type="text"
            // value={suretyB.propertyValue}
            // onChange={(e) =>
            //   setSuretyB({
            //     ...suretyB,
            //     propertyValue: e.target.value,
            //   })
            // }
            placeholder=" Enter the value of the real property "
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Salary/Income per annum
          </label>
          <input
            type="text"
            // value={suretyB.salary}
            // onChange={(e) => setSuretyB({ ...suretyB, salary: e.target.value })}
            placeholder=" Enter the salary/income per annum of the surety"
            className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
        <button
          type="button"
          className="px-6 py-3 text-gray-600 text-sm font-bold border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Previous
        </button>

        <button
          type="submit"
          className="px-6 py-3 bg-[#1a5c3a] text-white text-sm font-bold rounded-lg hover:bg-[#154d2f] flex items-center justify-center gap-2"
        >
          Save & Continue
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Assets;
