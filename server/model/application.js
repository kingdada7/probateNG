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
  deceasedName: {
    type: String,
    trim: true,
  },

  dateOfDeath: {
    type: Date,
  },

  placeOfDeath: {
    type: String,
    trim: true,
  },

  dateOfMarriage: {
    type: Date,
  },

  spouseName: {
    type: String,
    trim: true,
  },

  occupationAndPlaceOfWork: {
    type: String,
    trim: true,
  },

  formOfMarriage: {
    type: String,
    enum: ["Statutory Marriage"],
  },

  identificationType: {
    type: String,
    trim: true,
    enum: ["NIN", "Voters Card", "International Passport", "Driver's License"],
  },

  identificationNumber: {
    type: String,
    trim: true,
    minlength: [5, "Identification number must be at least 5 characters"],
    maxlength: [50, "Identification number cannot exceed 50 characters"],
  },

  lastAddress: {
    type: String,
    trim: true,
  },

  nextOfKin: {
    name: {
      type: String,
      trim: true,
    },

    relationship: {
      type: String,
      enum: ["Parent", "Sibling", "Child", "Spouse"],
    },

    phone: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },
  },

  children: {
    type: [
      {
        name: String,
        age: Number,
        motherName: String,
        motherPhone: String,
      },
    ],
    default: [],
  },
  nameAndAgeOfMinorChildren: {
    type: String,
    trim: true,
  },
  nameAndAddressOfGuardianOfMinorChildren: {
    type: String,
    trim: true,
  },

  family: {
    father: {
      type: [{ name: String, address: String }],
    },

    mother: {
      type: [{ name: String, address: String }],
    },

    brothers: {
      type: [
        {
          name: String,
          address: String,
        },
      ],
      default: [],
    },

    sisters: {
      type: [
        {
          name: String,
          address: String,
        },
      ],
      default: [],
    },
  },

  bankAccounts: {
    type: [
      {
        bankName: String,
        accountNumber: String,
      },
    ],
    default: [],
  },
  personalChattel: {
    type: String,
    trim: true,
  },

  insurancePolicy: {
    type: String,
    trim: true,
  },
  companyShare: {
    type: String,
    trim: true,
  },

  pensionManger: {
    type: String,
    trim: true,
  },
  pensionAccountNumber: {
    type: String,
    trim: true,
  },
  landedProperty: {
    type: String,
    trim: true,
  },
  addressOfProperty: {
    type: String,
    trim: true,
  },
  rent: {
    type: String,
    trim: true,
  },
  nameOfTenant: {
    type: String,
    trim: true,
  },

  sureties: {
    type: [
      {
        name: String,
        phone: String,
        address: String,
        occupation: String,
        bankDetails: String,
        propertyValue: String,
        incomePerAnnum: String,
      },
    ],
    default: [],
  },
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
