import express from "express";
import {
  updateProvider,
  deleteProvider,
  getAllProvider,
  getSingleProvider,
} from "../Controllers/providerController.js";

const router = express.Router(); // Creating an Express Router instance

router.get("/:id", getSingleProvider);  
router.get("/", getAllProvider);      
router.put("/:id", updateProvider);      
router.delete("/:id", deleteProvider);   

export default router;