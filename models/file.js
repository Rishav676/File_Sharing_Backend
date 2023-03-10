const mongoose=require('mongoose')

const Schema =mongoose.Schema;


const fileSchema= new Schema({
  filename: {type: String, required: true  },
  path:{ type :String ,required:true},
  size:{type:Number,required:true},
  uuid:{type :String,requird :true},
  sender:{type :String,requird :false},
  receiver:{type :String,requird :false},
},{ timestamps :true});

module.exports =mongoose.model('File',fileSchema);