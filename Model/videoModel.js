import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userId: { type: String, required: true },
  text: { type: String, required: true },
  userImg: { type: String, default: "" },
  timestamp: { type: Date, default: Date.now() },
});

const videoSchema = new mongoose.Schema({
  videoUrl: { type: String, required: true },
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  channelBanner: { type: String, default: "" },
  channelSubscribers: { type: Number, default: 0 },
  userId: { type: String, required: true },
  description: { type: String, default: "" },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now() },
  comments: { type: [commentSchema], default: [] },
  categories: { type: [String], default: [] },
});

const videoModel = mongoose.model("VideoData", videoSchema);
export default videoModel;
