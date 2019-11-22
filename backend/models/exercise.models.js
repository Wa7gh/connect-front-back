const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const exerciseShema = new Schema ({

usermane :{ type:String },
description :{ type: String },
duration : {type: Number  },
date : {type: Date  }
},{timestamps: true})

const Exercise = mongoose.model('Exercise', exerciseShema )
module.exports = Exercise;