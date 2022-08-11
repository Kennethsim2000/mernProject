const router = require("express").Router();
let Dish = require("../models/dishes_model");

//gets the lists of all dishes. returned in json format
router.route("/").get((req, res) => {
  Dish.find()
    .then((dish) => res.json(dish))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new dish
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const price = req.body.price;
  const featured = req.body.featured;

  const newDish = new Dish({ name, description, category, price, featured });

  newDish
    .save()
    .then(() => res.json("Dish added!"))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find dish by id
router.route("/:id").get((req, res) => {
  Dish.findById(req.params.id)
    .then((dish) => res.json(dish))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find dish by id and delete
router.route("/:id").delete((req, res) => {
  Dish.findByIdAndDelete(req.params.id)
    .then((dish) => res.json(dish))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find dish by id and update
router.route("/:id").post((req, res) => {
  Dish.findByIdAndUpdate(req.params.id)
    .then((dish) => {
      dish.name = req.body.name;
      dish.description = req.body.description;
      dish.category = req.body.category;
      dish.price = req.body.price;
      dish.featured = req.body.featured;
      dish
        .save()
        .then(() => res.json("Dish Updated"))
        .catch((err) => res.status(400).json(`Error ` + err));
    })
    .catch((err) => res.status.apply(400).json(`Error ` + err));
});

module.exports = router;
