const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ayushi01:webtech_01@mini2.jf9or.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>{
    console.log("Connection Successfull...!!");
})
.catch(() => {
    console.log("Error, Not Connected");
});
