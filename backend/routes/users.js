const express = require("express");
const router = express.Router();
let User = require('../models/user.models')

router.get('/', (req,res)=>{

    User.find()
    .then(users =>res.json(users))
    .catch(err => res.status(400).json('Error :' + err))

});

router.post('/add' , (req,res)=>{
    const username =req.body.username;
    console.log(username)
    const newUser = new User ({ username:username })
    console.log(newUser)

    newUser.save().then(() =>res.json('Ueser Add !'))
    .catch(err => res.status(400).json('Error :' + err))
})



module.exports = router;