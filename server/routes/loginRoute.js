const router = require("express").Router();
let User = require("../models/users_model");
//This router is used on the endpoint /login

/*Find a user based on the req.body, and if user does not exist, send status 400.
If user exist and password is correctly entered, send a status of 200.
Else, if user exist and wrong password, send a status of 409. */
router.route("/")
.post((req, res) => {
  console.log("successfully reached the post route");
  User.findOne({username:req.body.username},(err,docs)=>{
    if(docs==null){
      return res.status(400).send("User does not exist");
    } else{
      if(docs.password == req.body.password){
        return res.status(200).json("successfully logged in");
      } else{
        res.status(409).send("Password is wrong");
      }
    }
  });

});



module.exports = router;
