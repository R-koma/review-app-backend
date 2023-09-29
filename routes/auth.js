const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//新規登録
router.post("/register", async (req, res) => {
  try {
    //パスワードをハッシュ化する。
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, //ハッシュ化されたパスワード
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//ログイン
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //パスワードの比較
    const vailedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!user || !vailedPassword)
      return res.status(400).json("メールアドレスまたはパスワードが違います。");

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
