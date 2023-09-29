const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  lastReviewed: Date,
  reviewCount: Number,
  nextReviewDate: Date,
});

module.exports = mongoose.model("Review", reviewSchema);
