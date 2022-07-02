const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url,(err)=>{
    if(err){
      console.log("Db connection err")
    } else{
          console.log("Db connected")
    }


  })
}

module.exports = {connectDB}
