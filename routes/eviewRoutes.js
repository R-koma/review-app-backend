const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/reviews/complete", reviewController.completeReview);
router.get("/reviews", reviewController.getReviews);

module.exports = router;
