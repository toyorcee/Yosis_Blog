import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  getposts,
  getPremiumPosts,
  updatepost,
} from "../controllers/post.controller.js";
import { verifyPremium } from "../utils/verifyPremium.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);
router.get("/premium-posts", verifyPremium, getPremiumPosts);

export default router;
