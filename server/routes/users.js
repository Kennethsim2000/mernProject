const router = require("express").Router();
let User = require("../models/users_model");
//This router is used on the endpoint /signup


//Doing a post request on the /signup route. Made it such that you cannot have two people of the same username
router.route("/")
.post((req, res) => {
  console.log("Successfully reach the post route");
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  } 
  const user=new User({
    fullname:req.body.fullname,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
  })

 User.findOne({username:req.body.username}, function( err, user){
  if(err){
    return console.log(err);
  } else if (user){
    console.log("oldUser exists");
    console.log(user);
    return res.status(409).send("User already exist. Please Login");
  }
 });

   
  // });
  
  user.save(user)
  .then(data=>{
    res.send(data)
    console.log(data);
    //res.redirect('/login')
    console.log("Successfully posted");
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send({
    message:err.message||"Some error occurred while creating a create operation"
  });
  });
});

module.exports = router;
