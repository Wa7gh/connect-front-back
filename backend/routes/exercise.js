const express = require("express");
const router = express.Router();
let Exercise = require('../models/exercise.models')

router.get('/', (req,res)=>{
    Exercise.find().then(exercise =>{res.json(exercise)} )
    .catch(err => {res.status(400).json('Error :' + err)})});


router.get('/:id', (req,res)=>{
 Exercise.findById(req.params.id).then(exercise =>{res.json('find ')} )
.catch(err => {res.status(400).json('Error :' + err)})});

router.delete('/:id', (req,res)=>{
    Exercise.findByIdAndDelete(req.params.id).then(exercise =>{res.json('delete')} )
   .catch(err => {res.status(400).json('Error :' + err)})});


router.post('/add' , (req,res) =>{
  
    let newExercise = new Exercise ({
        username :req.body.username,
        description :req.body.description,
        duration :req.body.duration,
        date: req.body.date })

    newExercise.save().then(() => {res.json({msg: "success"})})
    .catch((err) =>{res.status(400).json('Error :' + err)})});


    router.post('/update/:id' , (req,res) =>{

        Exercise.findById(req.params.id)
  
        .then((exercise) =>{
            exercise.username =req.body.username,
            exercise.description =req.body.description,
            exercise.duration =Number(req.body.duration),
            exercise.date =Date.parse(req.body.date )
            exercise.save().then(() => {res.json({msg: "success"})})
        })
    
        
        .catch((err) =>{res.status(400).json('Error :' + err)})});


    



module.exports = router;