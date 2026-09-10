import { Router } from "express";
import { createProfile, updateProfile, fetchProfiles, deleteProfile } from "../Controller/ProfileController.js";

const router = Router()

router.get("/", fetchProfiles)
router.post("/", createProfile)
router.put("/:id", updateProfile)
router.delete("/:id", deleteProfile)

export default router
