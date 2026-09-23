import Admin from "../model/admin.js";
import Application from "../model/application.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const hodRegister = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, staffId, inviteCode } =
      req.body;

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !password ||
      !confirmPassword ||
      !staffId?.trim() ||
      !inviteCode
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check invite code
    if (inviteCode !== process.env.HOD_INVITE_CODE) {
      return res.status(401).json({
        message: "Invalid invite code",
      });
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Check if HOD already exists
    const existingHOD = await Admin.findOne({
      email: normalizedEmail,
    });

    if (existingHOD) {
      return res.status(400).json({
        message: "HOD with this email already exists",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create HOD
    const hod = await Admin.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      staffId: staffId.trim(),
      role: "hod",
    });

    return res.status(201).json({
      message: "HOD registered successfully",
      hod: {
        id: hod._id,
        fullName: hod.fullName,
        email: hod.email,
        staffId: hod.staffId,
      },
    });
  } catch (error) {
    console.error("Error during HOD registration:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const hodLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find HOD by email

    const hod = await Admin.findOne({ email: normalizedEmail });
    if (!hod) {
      return res.status(401).json({
        success: false,
        message: "invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, hod.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: hod._id, role: hod.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      hod: {
        id: hod._id,
        fullName: hod.fullName,
        email: hod.email,
        role: hod.role,
      },
    });
  } catch (error) {
    console.error("Error during HOD login:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAdmin = async (req, res) => {
  return res.status(200).json({
    success: true,
    admin: req.admin,
  });
};

export const reviewApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status, rejectionReason } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid review status",
      });
    }

    if (status === "Rejected" && !rejectionReason?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Rejection reason is required",
      });
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.status = status;

    application.rejectionReason =
      status === "Rejected" ? rejectionReason.trim() : "";

    await application.save();

    res.json({
      success: true,
      message:
        status === "Approved"
          ? "Application approved successfully"
          : "Application rejected successfully",
      application,
    });
  } catch (error) {
    console.error("Review application error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to review application",
    });
  }
};


export const staffRegister = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      staffId,
      department,
    } = req.body;

    // Check required fields
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !password ||
      !confirmPassword ||
      !staffId?.trim() ||
      !department?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    // Normalize staff ID
    const normalizedStaffId = staffId.trim();

    // Check if email or staff ID already exists
    const existingStaff = await Admin.findOne({
      $or: [
        { email: normalizedEmail },
        { staffId: normalizedStaffId },
      ],
    });

    if (existingStaff) {
      if (existingStaff.email === normalizedEmail) {
        return res.status(400).json({
          message: "Staff with this email already exists",
        });
      }

      if (existingStaff.staffId === normalizedStaffId) {
        return res.status(400).json({
          message: "Staff ID already exists",
        });
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create staff
    const staff = await Admin.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      staffId: normalizedStaffId,
      role: "staff",
      department: department.trim(),
    });

    return res.status(201).json({
      message: "Staff registered successfully",
      staff: {
        id: staff._id,
        fullName: staff.fullName,
        email: staff.email,
        staffId: staff.staffId,
        department: staff.department,
        role: staff.role,
      },
    });
  } catch (error) {
    console.error("Error during staff registration:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
