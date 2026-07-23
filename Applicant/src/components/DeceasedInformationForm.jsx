import React from "react";
import DeceasedInfo from "./DeceasedInfo";
import NextofKin from "./NextofKin";
import Assets from "./Assets";

const DeceasedInformationForm = () => {
  return (
    <div>
      <DeceasedInfo />
      <NextofKin />
      <Assets />
    </div>
  );
};

export default DeceasedInformationForm;
