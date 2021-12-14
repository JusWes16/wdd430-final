const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const trails = [
    {
      id: "1",
      name: "Trail name",
      description:
        "khdkasf dsfha dfjhas dhf asdjfh sdafhasd fsdfh sfkah dfhdalfiu dafd uhaf",
      mountain: "mountain name",
      town: "town name",
      length: "trail length",
      time: "time to complete",
      imageUrl: "imageUrl",
    },
    {
      id: "2",
      name: "Trail name 2",
      description:
        "khdkasf dsfha dfjhas dhf asdjfh sdafhasd fsdfh sfkah dfhdalfiu dafd uhaf",
      mountain: "mountain name 2",
      town: "town name 2",
      length: "trail length 2",
      time: "time to complete 2",
      imageUrl: "imageUrl 2",
    },
    {
      id: "3",
      name: "Trail name",
      description:
        "khdkasf dsfha dfjhas dhf asdjfh sdafhasd fsdfh sfkah dfhdalfiu dafd uhaf",
      mountain: "mountain name",
      town: "town name",
      length: "trail length",
      time: "time to complete",
      imageUrl: "imageUrl",
    },
    {
      id: "4",
      name: "Trail name 2",
      description:
        "khdkasf dsfha dfjhas dhf asdjfh sdafhasd fsdfh sfkah dfhdalfiu dafd uhaf",
      mountain: "mountain name 2",
      town: "town name 2",
      length: "trail length 2",
      time: "time to complete 2",
      imageUrl: "imageUrl 2",
    },
  ];
  res.status(200).json({
    message: "success",
    trails: trails,
  });
});

router.post("/", (req, res, next) => {
  const trail = req.body;
  console.log(trail);
  res.status(201).json({
    message: "Trail was added!",
  });
});

module.exports = router;
