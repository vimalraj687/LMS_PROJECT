import { getRounds } from "bcryptjs";
import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/user.controllers";

const route = Router();

// Routing
Router.post("/register", register);
Router.post("/login", login);
Router.post("/logout", logout);
Router.post("/me", getProfile);

export default Router;
