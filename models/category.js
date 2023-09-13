import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 500,
    },
    link: {
      type: String,
      max: 500,
    },
    cor: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    link_extra: {
      text: String,
      url: String,
    },
    videos: [
      {
        title: String,
        url: String,
        img: String,
        category: String,
        // category: {
        //   type: String,
        //   max: 500,
        //   required: true,
        // },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
