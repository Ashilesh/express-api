const express = require('express');
const router = express.Router();
const Ajv = require("ajv");
const ajv = new Ajv();

// test user details
let userDetailsdb = [
    { username: "soumyadip", password: 'test123' },
    { username: "arghyadip", password: 'test234' },
    { username: "bipradip", password: 'test345' },
    { username: "subhadip", password: 'test456' },
    { username: "sankhadip", password: 'test567' }
];

//user schema
const userSchema = {
  type: "object",
  properties: {
    username: {type: "string"},
    password: {type: "string"}
  },
  required: ["username","password"],
  additionalProperties: false
}

const validate = ajv.compile(userSchema);


router.post("/", (req, res) => {
    const userDetails = req.body;
    const valid = validate(userDetails);
    if (!valid) {
    	//console.log(validate.errors);
        return res.status(400).json({message: validate.errors[0].message});
    }
    // searching user details from user array
    for (var userObj in userDetailsdb) {
      if (userDetailsdb[userObj].username === userDetails.username) {

       	if (userDetailsdb[userObj].password === userDetails.password) {
          return res.status(200).json({message: `${userDetails.username} logged in successfully` });
        }
        else {
          return res.status(401).json({message: "Incorrect password" });
        }
      }
    } 
    res.status(401).json({message: "Invalid credentials"});
});

module.exports = router;