const Review = require("./models/review");
const { calculateInterval } = require("./path-to-your-calculateInterval-file");

exports.completeReview = async (req, res) => {
  const { reviewId } = req.body;

  // 復習項目を取得
  const review = await Review.findById(reviewId);

  // 復習回数をインクリメント
  review.reviewCount += 1;

  // 最終復習日を更新
  review.lastReviewed = new Date();

  // 次の復習日を計算（ここで忘却曲線のロジックを適用）
  const interval = calculateInterval(review.reviewCount); // この関数は忘却曲線のロジックに基づいて間隔を計算します
  review.nextReviewDate = new Date(Date.now() + interval);

  // データベースを更新
  await review.save();

  res.status(200).send(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ nextReviewDate: { $lte: new Date() } });
  res.status(200).send(reviews);
};

// 他の関連するコントローラー関数もここに定義する
