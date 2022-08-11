const router = require("express").Router();
let User = require("../models/users_model");
//This router is used on the endpoint /signup

//gets the lists of all users. returned in json format
router.route("/")
.post((req, res) => {
  console.log("successfully reached the post route");
  User.findOne({username:req.body.username},(err,docs)=>{
    if(docs==null){
      console.log("user does not exist")
      return res.status(400).send("User does not exist");
    } else{
      console.log(docs);
      if(docs.password == req.body.password){
        console.log("successfully logged in");
        return res.status(200).json("successfully logged in");
      } else{
        console.log("password is wrong")
        res.status(409).send("Password is wrong");
      }
    }
  });

});



module.exports = router;
