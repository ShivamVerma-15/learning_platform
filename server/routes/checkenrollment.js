const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const CourseEnrollment = mongoose.model("CourseEnrollment");

router.get("/checkenrollment", requireLogin, (req, res) => {
  const { userid, courseid } = req.body;
  CourseEnrollment.findOne({ userid, courseid })
    .then((course) => {
      if (course) {
        res.json({
          status: "true",
        });
      } else {
        res.json({
          status: "false",
        });
      }
    })
    .catch((e) => {
      res.json({
        status: "false",
      });
    });
});
module.exports = router;
