import videoModel from "../Model/videoModel.js";

export async function addVideo(req, res) {
  try {
    const {
      videoUrl,
      thumbnailUrl,
      title,
      channelId,
      userId,
      description,
      views,
      likes,
      dislikes,
      uploadDate,
      comments,
      categories,
    } = req.body;

    // channnel data from req
    const {
      channelName,
      channelBanner,
      subscribers: channelSubscribers,
    } = req.Data;

    const newVideo = await videoModel.create({
      videoUrl,
      thumbnailUrl,
      title,
      channelId,
      channelName,
      channelBanner,
      userId,
      description,
      views,
      likes,
      dislikes,
      uploadDate,
      comments,
      categories,
      channelSubscribers,
    });

    res
      .status(201)
      .json({ message: "new video uploaded", newVideoData: newVideo });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

export async function getAllVideo(req, res) {
  try {
    const allVideos = await videoModel.find();
    res.status(200).send(allVideos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

export async function getVideoById(req, res) {
  try {
    const videoId = req.params.id;
    const videoData = await videoModel.findById(videoId);
    if (!videoData) {
      return res.status(400).json({ message: "Video Not Found" });
    }
    res.status(200).json(videoData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

export async function getVideoByUserId(req, res) {
  try {
    const userId = req.params.id;
    const videos = await videoModel.find({ userId });
    if (!videos) {
      return res
        .status(404)
        .json({ message: "No videos available", statusCode: 404 });
    }
    res.status(200).send(videos);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Issue",
      error: err.message,
      statusbar: 500,
    });
  }
}

export async function deleteVideoById(req, res) {
  try {
    const videoId = req.params.id;
    const deletedVideo = await videoModel.findByIdAndDelete(videoId);
    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json({ message: "Video deleted", deletedVideo });
  } catch (err) {
    res.status(500).json({ message: "Could not delete dur server issue" });
  }
}

export async function addCommentByVideoId(req, res) {
  try {
    const videoId = req.params.id;
    const { userId, text, userImg, userName } = req.body;
    const videoData = await videoModel.findById(videoId);

    if (!videoData) {
      return res.status(404).json("Could not connect with video data");
    }

    videoData.comments.push({ userId, text, userName, userImg });
    const updatedVideoData = await videoData.save();
    res.status(201).json({ message: "Comment added", updatedVideoData });
  } catch (err) {
    res.status(500).json({
      message: "Could not add comment due to server issue",
      error: err.message,
    });
  }
}

export async function editComment(req, res) {
  try {
    const { text, videoId, commentId } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const video = await videoModel.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const comment = video.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Update the comment text and timestamp
    comment.text = text;
    comment.timestamp = new Date();

    const updatedVideo = await video.save();

    res
      .status(200)
      .json({ message: "Comment updated successfully", updatedVideo });
  } catch (err) {
    console.error("Error editing comment:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteComment(req, res) {
  try {
    const { videoId, commentId } = req.body;

    const video = await videoModel.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const commentIndex = video.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Remove the comment from the array
    video.comments.splice(commentIndex, 1);
    await video.save(); // Save the updated video document

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
