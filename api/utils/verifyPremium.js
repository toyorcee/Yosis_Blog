import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyPremium = (req, res, next) => {
  const token = req.cookies.access_token; // Get the JWT token from cookies

  // If no token is present, send an unauthorized error
  if (!token) {
    return next(errorHandler(401, "Access denied. No token provided."));
  }

  try {
    // Verify the token using the secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the decoded token payload (user info) to req.user

    // Check if the user is premium
    if (!req.user.premium) {
      return next(errorHandler(403, "Access denied. Premium content only."));
    }

    // If the user is premium, allow access to the next middleware or route
    res.json({ message: "Welcome to premium content" });
    next();
  } catch (error) {
    return next(errorHandler(401, "Invalid or expired token.")); // Handle token errors
  }
};
