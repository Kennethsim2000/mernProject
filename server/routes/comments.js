const router = require("express").Router();
let Comment = require("../models/comments_model");

//gets the lists of all Commentes. returned in json format
router.route("/").get((req, res) => {
  Comment.find()
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new Comment
router.route("/add").post((req, res) => {
  const rating = req.body.rating;
  const comment = req.body.comment;
  const author = req.body.author;

  const newComment = new Comment({ rating, comment, author });

  newComment
    .save()
    .then(() => res.json("Comment added!"))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find Comment by id
router.route("/:id").get((req, res) => {
  Comment.findById(req.params.id)
    .then((Comment) => res.json(Comment))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find Comment by id and delete
router.route("/:id").delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((Comment) => res.json(Comment))
    .catch((err) => res.status(400).json(`Error ` + err));
});

//find Comment by id and update
router.route("/:id").post((req, res) => {
  Comment.findByIdAndUpdate(req.params.id)
    .then((Comment) => {
      Comment.rating = req.body.rating;
      Comment.comment = req.body.comment;
      Comment.author = req.body.author;
      Comment.save()
        .then(() => res.json("Comment Updated"))
        .catch((err) => res.status(400).json(`Error ` + err));
    })
    .catch((err) => res.status.apply(400).json(`Error ` + err));
});

module.exports = router;
