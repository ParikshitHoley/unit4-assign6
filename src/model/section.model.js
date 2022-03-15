const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    
    id:{type:Number,required:true,unique:true},
    sectionName : {type:String,required:true}
},{
    versionKey:false,
    timestamps : true
})

const Section = mongoose.model('section',sectionSchema)
module.exports = Section;