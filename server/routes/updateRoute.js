const router = require("express").Router();
let User = require("../models/users_model");
//This router is used on the endpoint /signup

//gets the lists of all users. returned in json format
router.route("/")
.put((req, res) => {
  console.log("successfully reached the put route");
  User.findOneAndUpdate({username:req.body.username},{password:req.body.password},null,(err,docs)=>{
    if(docs==null){
      console.log("user does not exist")
      return res.status(400).send("User does not exist");
    } else if(err){
        console.log(err);
        res.status(409).send(err);
    } else{
        console.log("successfully updated password");
        return res.status(200).json("successfully updated password");
    }
  });

});



module.exports = router;
