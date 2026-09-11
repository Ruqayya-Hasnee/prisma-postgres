import { Router } from "express";
import { createPost, updatePost, fetchPosts, deletePost, bulkUpdate, bulkDelete, filterAndSortPosts, countPosts } from "../Controller/PostController.js";

const router = Router()

router.get("/", fetchPosts)
router.post("/", createPost)
router.put("/bulk-update", bulkUpdate)
router.put("/:id", updatePost)
router.delete("/bulk-delete", bulkDelete)
router.delete("/:id", deletePost)
router.get("/filter-sort", filterAndSortPosts)
router.get("/totalPosts", countPosts)

export default router