import Application from "../model/application.js";

import { uploadToImageKit } from "../utils/uploadToImageKit.js";
export const applicantInformation = async (req, res) => {
  try {
    const {
      applicantFullName,
      applicantEmail,
      applicantPhoneNumber,
      applicantAddress,
      relationshipToDeceased,
      applicantOccupation,
      identificationType,
      identificationNumber,
    } = req.body;
    if (
      !applicantFullName?.trim() ||
      !applicantEmail?.trim() ||
      !applicantPhoneNumber?.trim() ||
      !applicantAddress?.trim() ||
      !relationshipToDeceased ||
      !applicantOccupation?.trim() ||
      !identificationType ||
      !identificationNumber?.trim()
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const normalizedEmail = applicantEmail.toLowerCase().trim();
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const newApplication = await Application.create({
      applicant: {
        applicantFullName,
        applicantEmail: normalizedEmail,
        applicantPhoneNumber,
        applicantAddress,
        applicantOccupation,
        relationshipToDeceased,
        identificationType,
        identificationNumber,
      },

      user: req.user.id,
    });
    return res.status(201).json({
      success: true,
      message: "Applicant information saved successfully",
      application: newApplication,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deceasedInformation = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const {
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
      pensionManger,
      pensionAccountNumber,
      landedProperty,
      addressOfProperty,
      rent,
      nameOfTenant,
      sureties,
    } = req.body;

    const application = await Application.findOne({
      _id: applicationId,
      user: req.user.id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.deceased = {
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
      pensionManger,
      pensionAccountNumber,
      landedProperty,
      addressOfProperty,
      rent,
      nameOfTenant,
      sureties,
    };

    application.currentStep = 2;

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Deceased information saved successfully",
      application,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const applicationType = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { applicationType, estate, assetDetails } = req.body;

    const application = await Application.findOne({
      _id: applicationId,
      user: req.user.id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    const cleanedEstate = Number(String(estate).replace(/,/g, ""));

    const cleanedAssetDetails = assetDetails.map((asset) => ({
      ...asset,
      value: Number(String(asset.value).replace(/,/g, "")),
    }));

    const subTotal = cleanedAssetDetails.reduce(
      (total, asset) => total + (asset.value || 0),
      0,
    );

    application.applicationType = {
      applicationType,
      estate: cleanedEstate,
      assetDetails: cleanedAssetDetails,
      subTotal,
    };

    application.currentStep = 3;

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application Type saved successfully",
      application,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const uploadDocuments = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const application = await Application.findOne({
      _id: applicationId,
      user: req.user.id,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    const folders = {
      deathCertificate: "/probate/death-certificates",
      otherDocuments: "/probate/other-documents",
      willDocument: "/probate/wills",
      affidavit: "/probate/affidavits",
    };

    const documents = {};

    for (const [field, folder] of Object.entries(folders)) {
      if (req.files?.[field]?.[0]) {
        documents[field] = await uploadToImageKit(req.files[field][0], folder);
      }
    }

    if (Object.keys(documents).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No documents uploaded.",
      });
    }

    application.documents = {
      ...application.documents,
      ...documents,
    };

    application.currentStep = 4;

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Documents uploaded successfully",
      documents: application.documents,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
