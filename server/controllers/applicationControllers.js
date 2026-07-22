import Application from "../model/application";

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
