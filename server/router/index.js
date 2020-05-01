const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  res.end(JSON.stringify({
    value: 'hello'
  }))
})

module.exports = router;