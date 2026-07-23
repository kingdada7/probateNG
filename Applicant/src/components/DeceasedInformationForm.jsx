import React, { useState } from "react";
import DeceasedInfo from "./DeceasedInfo";
import NextofKin from "./NextofKin";
import Assets from "./Assets";
import FamilyInfo from "./FamilyInfo";

const DeceasedInformationForm = () => {
  const [deceasedName, setDeceasedName] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");
  const [placeOfDeath, setPlaceOfDeath] = useState("");
  const [dateOfMarriage, setDateOfMarriage] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [occupationAndPlaceOfWork, setOccupationAndPlaceOfWork] = useState("");
  const [formOfMarriage, setFormOfMarriage] = useState("Statutory Marriage");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [lastAddress, setLastAddress] = useState("");

  // Next of Kin
  const [nextOfKin, setNextOfKin] = useState({
    name: "",
    relationship: "",
    phone: "",
    address: "",
  });

  // Children
  const [children, setChildren] = useState([
    {
      name: "",
      age: "",
      motherName: "",
      motherPhone: "",
    },
  ]);
  // // Minor Children
  const [nameAndAgeOfMinorChildren, setNameAndAgeOfMinorChildren] =
    useState("");

  // // Guardian of Minor Children
  const [
    nameAndAddressOfGuardianOfMinorChildren,
    setNameAndAddressOfGuardianOfMinorChildren,
  ] = useState("");
  // Family
  const [family, setFamily] = useState({
    father: {
      name: "",
      address: "",
    },
    mother: {
      name: "",
      address: "",
    },
    brother: {
      name: "",
      address: "",
    },

    sister: {
      name: "",
      address: "",
    },
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

  // // Assets
  const [personalChattel, setPersonalChattel] = useState("");
  const [insurancePolicy, setInsurancePolicy] = useState("");
  const [companyShare, setCompanyShare] = useState("");

  // // Pension
  const [pensionManager, setPensionManager] = useState("");
  const [pensionAccountNumber, setPensionAccountNumber] = useState("");

  // // Property
  const [landedProperty, setLandedProperty] = useState("");
  const [addressOfProperty, setAddressOfProperty] = useState("");
  const [rent, setRent] = useState("");
  const [nameOfTenant, setNameOfTenant] = useState("");

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

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const applicationId = localStorage.getItem("applicationId");

      if (!applicationId) {
        alert("Application not found. Please start a new application.");
        return;
      }

      const { data } = await axios.patch(
        `/api/application/${applicationId}/deceased-information`,
        {
          deceasedName,
          dateOfDeath,
          placeOfDeath,
          dateOfMarriage,
          spouseName,
          occupationAndPlaceOfWork,
          formOfMarriage,
          identificationType,
          identificationNumber,
          lastAddress,

          nextOfKin,
          children,

          nameAndAgeOfMinorChildren,
          nameAndAddressOfGuardianOfMinorChildren,

          family,

          bankAccounts,

          personalChattel,
          insurancePolicy,
          companyShare,

          pensionManager,
          pensionAccountNumber,

          landedProperty,
          addressOfProperty,
          rent,
          nameOfTenant,

          suretyA,
          suretyB,
        },
      );

      if (data.success) {
        navigate("/citizenportal/applicationtype"); // or your next page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <DeceasedInfo
          deceasedName={deceasedName}
          setDeceasedName={setDeceasedName}
          dateOfDeath={dateOfDeath}
          setDateOfDeath={setDateOfDeath}
          placeOfDeath={placeOfDeath}
          setPlaceOfDeath={setPlaceOfDeath}
          dateOfMarriage={dateOfMarriage}
          setDateOfMarriage={setDateOfMarriage}
          spouseName={spouseName}
          setSpouseName={setSpouseName}
          occupationAndPlaceOfWork={occupationAndPlaceOfWork}
          setOccupationAndPlaceOfWork={setOccupationAndPlaceOfWork}
          formOfMarriage={formOfMarriage}
          setFormOfMarriage={setFormOfMarriage}
          identificationType={identificationType}
          setIdentificationType={setIdentificationType}
          identificationNumber={identificationNumber}
          setIdentificationNumber={setIdentificationNumber}
          lastAddress={lastAddress}
          setLastAddress={setLastAddress}
        />
        <NextofKin
          nextOfKin={nextOfKin}
          setNextOfKin={setNextOfKin}
          children={children}
          setChildren={setChildren}
        />

        <FamilyInfo
          family={family}
          setFamily={setFamily}
          nameAndAgeOfMinorChildren={nameAndAgeOfMinorChildren}
          setNameAndAgeOfMinorChildren={setNameAndAgeOfMinorChildren}
          nameAndAddressOfGuardianOfMinorChildren={
            nameAndAddressOfGuardianOfMinorChildren
          }
          setNameAndAddressOfGuardianOfMinorChildren={
            setNameAndAddressOfGuardianOfMinorChildren
          }
        />

        <Assets
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
          personalChattel={personalChattel}
          setPersonalChattel={setPersonalChattel}
          insurancePolicy={insurancePolicy}
          setInsurancePolicy={setInsurancePolicy}
          companyShare={companyShare}
          setCompanyShare={setCompanyShare}
          pensionManager={pensionManager}
          setPensionManager={setPensionManager}
          pensionAccountNumber={pensionAccountNumber}
          setPensionAccountNumber={setPensionAccountNumber}
          landedProperty={landedProperty}
          setLandedProperty={setLandedProperty}
          addressOfProperty={addressOfProperty}
          setAddressOfProperty={setAddressOfProperty}
          rent={rent}
          setRent={setRent}
          nameOfTenant={nameOfTenant}
          setNameOfTenant={setNameOfTenant}
          suretyA={suretyA}
          setSuretyA={setSuretyA}
          suretyB={suretyB}
          setSuretyB={setSuretyB}
        />

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
      </form>
    </>
  );
};

export default DeceasedInformationForm;
