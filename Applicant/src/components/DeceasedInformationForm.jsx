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

  return (
    <>
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

      <FamilyInfo family={family} setFamily={setFamily} />

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
    </>
  );
};

export default DeceasedInformationForm;
