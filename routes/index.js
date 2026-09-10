import { Router } from "express";
import UserRoutes from "./userRoutes.js"
import PostRoutes from "./postRoutes.js"
import ProfileRoutes from "./profileRoutes.js"
const router = Router()

router.use("/api/user", UserRoutes)
router.use("/api/post", PostRoutes)
router.use("/api/profile", ProfileRoutes)

export default router