const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require("dotenv/config");
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const exerciseRouter = require('./routes/exercise')
const port = process.env.PORT || 4000

app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/users',usersRouter);
app.use('/exercise',exerciseRouter);



mongoose.connect( process.env.DEV_DB,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
app.listen(port, ()=>{
    console.log(`server is running on port : ${port} `)
})