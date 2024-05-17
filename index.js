const mongoose = require('mongoose')
const morgan = require('morgan');

mongoose.connect("mongodb://127.0.0.1:27017/userManagement")
.then(()=> {
    console.log("Working")
})
.catch((err)=>{
    console.error("Entho prashnand",err);
})

const express = require('express')
const app = express();

app.use(morgan('dev'))

const path = require('path')
app.use('/static',express.static(path.join(__dirname,'public')))

const usrRoute = require('./routes/userRoutes')
app.use("/",usrRoute)


const adminRoute = require('./routes/adminRoutes');
app.use("/admin",adminRoute)

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(500).send('Something borke');

})

app.listen(3130, ()=> {
    console.log(`Server is running ar http://localhost:3130`);
})

