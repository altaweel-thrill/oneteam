const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Ahmad"
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio");
});


router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/test", (req, res) => {
  res.render("test");
});

router.get("/project01", (req, res) => {
  res.render("project01");
});

router.get("/project02", (req, res) => {
  res.render("project02");
});
router.get("/project03", (req, res) => {
  res.render("project03");
});

module.exports = router;