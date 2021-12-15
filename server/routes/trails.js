const express = require("express");
const router = express.Router();

const Trail = require("../models/trail");

router.get("/", (req, res, next) => {
  Trail.find().then((trails) => {
    console.log(trails);
    res.status(200).json({
      message: "Trails fetched successfully",
      trails: trails,
    });
  });
});

router.post("/", (req, res, next) => {
  const trail = new Trail({
    name: req.body.name,
    description: req.body.description,
    mountain: req.body.mountain,
    location: req.body.location,
    length: req.body.length,
    time: req.body.time,
    imageUrl: req.body.imageUrl
  });
  trail.save().then((result) => {
    res.status(201).json({
      message: "Trail was added!",
      trailId: result._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  Trail.findOne({ id: req.params.id })
    .then((trail) => {
      trail.name = req.body.name,
      trail.description =  req.body.description,
      trail.mountain =  req.body.mountain,
      trail.location =  req.body.location,
      trail.length =  req.body.length,
      trail.time =  req.body.time,
      trail.imageUrl =  req.body.imageUrl

      Trail.updateOne({ id: req.params.id }, trail)
        .then((result) => {
          res.status(204).json({
            message: "Trail updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Trail not found.",
        error: { document: "Trail not found" },
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Trail.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({
      message: "Trail deleted successfully",
    });
  });
});

module.exports = router;
