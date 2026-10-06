import fs from "fs";
import { toFile } from "@imagekit/nodejs";
import Application from "../model/application.js";
import { uploadFile } from "../utils/uploadFIle.js";

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
      currentStep: 2,
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

    application.currentStep = 3;

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

    application.currentStep = 4;

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
    const files = req.files;

    const application = await Application.findOne({
      _id: applicationId,
      user: req.user.id,
    });

    // Check first
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Initialize documentUpload if necessary
    if (!application.documentUpload) {
      application.documentUpload = {
        deathCertificate: "",
        otherSupporting: "",
        willDocument: "",
        affidavit: "",
      };
    }

    if (files?.deathCertificate) {
      application.documentUpload.deathCertificate = await uploadFile(
        files.deathCertificate[0]
      );
    }

    if (files?.otherSupporting) {
      application.documentUpload.otherSupporting = await uploadFile(
        files.otherSupporting[0]
      );
    }

    if (files?.willDocument) {
      application.documentUpload.willDocument = await uploadFile(
        files.willDocument[0]
      );
    }

    if (files?.affidavit) {
      application.documentUpload.affidavit = await uploadFile(
        files.affidavit[0]
      );
    }

    // Application is now submitted
    application.currentStep = 5;
    application.status = "Pending Review";

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      documents: application.documentUpload,
      status: application.status,
      currentStep: application.currentStep,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
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

export const getAllApplicationsForAdmin = async (req, res) => {
  try {
    const applications = await Application.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error("Get admin applications error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
};


const assignApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { staffId } = req.body;

    if (!staffId) {
      return res.status(400).json({
        success: false,
        message: "Staff ID is required",
      });
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    const staff = await Admin.findById(staffId);

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }

    application.assignedTo = staff._id;
    application.assignedBy = req.admin._id;
    application.assignedAt = new Date();

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application assigned successfully",
      application,
    });
  } catch (error) {
    console.error("Assign application error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to assign application",
    });
  }
};




export const getApplicationById = async (req, res) => {
  try {
    const { applicationId } = req.params;

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    console.error("Get application by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch application",
    });
  }
};




