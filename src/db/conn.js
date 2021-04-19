const mongoose = require("mongoose");

const DB= process.env.DATABASE;
mongoose.connect(DB,{
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
