import express from "express";
import {
  getcategory,
  deleteCategory,
  addcategory,
  addVideo,
  getVideo,
} from "../controllers/video.js";

const router = express.Router();

router.get("/", getVideo);
router.get("/search", getcategory);
router.post("/addcategory", addcategory);
router.post("/:categoryid", addVideo);

router.delete("/:id", deleteCategory);

// router.get("/find/:id", getVideo);

export default router;
