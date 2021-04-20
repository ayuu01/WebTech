const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://ayushi:webtech_01@cluster0.wb5xe.mongodb.net/mini2?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
})
.then(() =>{
    console.log("Connection Successfull...!!");
})
.catch(() => {
    console.log("Error, Not Connected");
});
