const mongoose = require('mongoose')
 
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useCreateIndex : true     
})

// const Task = mongoose.model('Task', {
//      description :{
//          type : String,
//          required : true,
//          trim :true
//     },
//      completed :{
//          type : Boolean,
//          default : false
//      }
//  })

//  const myTask = new Task({
//      description : 'studying',
//  })

//  myTask.save().then(() => {
//      console.log(myTask)
//  }).catch(()=>{
//      console.log('Error!', errors)
// })