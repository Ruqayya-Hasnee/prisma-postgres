import { Router } from "express";
import { createPost, updatePost, fetchPosts, deletePost, bulkUpdate, bulkDelete } from "../Controller/PostController.js";

const router = Router()

router.get("/", fetchPosts)
router.post("/", createPost)
router.put("/bulk-update", bulkUpdate)
router.put("/:id", updatePost)
router.delete("/bulk-delete", bulkDelete)
router.delete("/:id", deletePost)

export default router