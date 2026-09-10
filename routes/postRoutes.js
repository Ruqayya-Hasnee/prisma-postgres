import { Router } from "express";
import { createPost, updatePost, fetchPosts, deletePost, bulkUpdate } from "../Controller/PostController.js";

const router = Router()

router.get("/", fetchPosts)
router.post("/", createPost)
router.put("/bulk-update", bulkUpdate)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router