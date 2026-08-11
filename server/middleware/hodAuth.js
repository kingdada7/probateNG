import jwt from "jsonwebtoken";
import Admin from "../model/admin.js";

const hodAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hod = await Admin.findById(decoded.id).select("-password");

    if (!hod) {
      return res.status(401).json({
        success: false,
        message: "HOD not found",
      });
    }

    req.admin = hod;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default hodAuth;
