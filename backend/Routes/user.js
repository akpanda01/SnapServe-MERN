import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js"; // Importing controller functions

const router = express.Router(); // Creating an Express Router instance

router.get("/:id", getSingleUser);   // Route to get a single user by ID
router.get("/", getAllUser);         // Route to get all users
router.put("/:id", updateUser);       // Route to update a user by ID
router.delete("/:id", deleteUser);   // Route to delete a user by ID

export default router; // Exporting the configured router