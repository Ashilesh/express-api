const express = require('express');
const router = express.Router();
const Joi = require("joi");

logInJson = {
    "abhishek_outlook": { username: "abhishek_outlook", password: '1234' },
    "abhishek_gmail": { username: "abhishek_gmail", password: '1234' }, "abhishek_yahoo": { username: "abhishek_yahoo", password: '1234' }
};

const validateCourse = (course) => {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        password: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

router.post("/", (req, res) => {
    const logInDetails = req.body;
    logInDetails.password = logInDetails.password.toString();
    const { error } = validateCourse(logInDetails);
    if (error) {
        return res.status(400).json.send(error.details[0].message);
    }
    const {username,password} = req.body;
    const loginDetails = logInJson[username]; 
    if (loginDetails.username === username && loginDetails.password === password){
        return res.status(200).json({ status: "ok", msg: "Welcome you have loggedin successful" }); 
    }
    res.status(400).json({ status: "ok", msg: "Please use a valid login"});
});

module.exports = router;

