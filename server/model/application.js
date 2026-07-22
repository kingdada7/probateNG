import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  applicantFullName: String,
  applicantEmail: String,
  applicantPhoneNumber: String,
  applicantAddress: String,
  applicantOccupation: String,
  relationshipToDeceased: {
    type: String,
    enum: ["Spouse", "Child", "Parent", "Sibling"],
  },
  identificationType: {
    type: String,
    enum: ["NIN", "Voters Card", "International Passport", "Driver's License"],
  },
  identificationNumber: String,
});

const deceasedSchema = new mongoose.Schema({
  fullName: String,
  gender: String,
  dateOfBirth: Date,
  dateOfDeath: Date,
  placeOfDeath: String,
  lastResidentialAddress: String,
  maritalStatus: String,
  occupation: String,
});

const applicationTypeSchema = new mongoose.Schema({
  applicationType: {
    type: String,
    enum: ["Letters of Administration", "Probate", "Will Annexed"],
  },
  hasWill: Boolean,
  executorName: String,
});

const documentSchema = new mongoose.Schema({
  deathCertificate: String,
  passportPhotograph: String,
  validId: String,
  willDocument: String,
  affidavit: String,
});

const applicationSchema = new mongoose.Schema(
  {
    applicant: applicantSchema,

    deceased: deceasedSchema,

    applicationType: applicationTypeSchema,

    documents: documentSchema,

    status: {
      type: String,
      enum: ["Draft", "Pending Review", "Approved", "Rejected"],
      default: "Draft",
    },

    currentStep: {
      type: Number,
      default: 1,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Application", applicationSchema);
