import { registerUserService, loginUserService } from "./auth.service.js";
import { apiResponse } from "../../utils/apiResponse.js";

export const registerUser = async (req, res) => {
  try {
    const user = await registerUserService(req.body);

    return apiResponse(res, 201, true, "User registered successfully", user);
  } catch (error) {
    console.error("REGISTER ERROR:", error.message);

    return apiResponse(res, 400, false, error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await loginUserService(req.body);

    return apiResponse(res, 200, true, "Login successful", user);
  } catch (error) {
    console.error("LOGIN ERROR:", error.message);

    return apiResponse(res, 400, false, error.message);
  }
};
