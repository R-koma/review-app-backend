//忘却曲線のアルゴリズムを構築予定。
export function calculateInterval(reviewCount) {
  // これは単純な例で、実際には忘却曲線のロジックに基づいて間隔を計算する必要があります。
  return 86400000 * Math.pow(2, reviewCount); // 1日、2日、4日、8日、...と復習間隔が増えていく単純な例
}
