import express from "express";
import {
  getcategory,
  updateCategory,
  addcategory,
  addVideo,
  getVideo,
} from "../controllers/video.js";

const router = express.Router();

router.get("/", getVideo);
// router.post("/:idCateagory", addVideo);
router.get("/search", getcategory);
router.post("/addcategory", addcategory);
router.post("/:categoryid", addVideo);
router.put("/:id", updateCategory);

// router.put("/:id", addVideo);

// router.delete("/:id", addVideo);

// router.get("/find/:id", getVideo);

export default router;
