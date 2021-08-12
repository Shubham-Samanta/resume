// import dependencies
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000
const homepage = require("./Routes/homepage")

//middlewares
app.use(cors())
app.use(express.json())

//connect to DB
const uri = process.env.ATLAS_URI

const gendb=mongoose.connect(uri, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true
}).then(() => { console.log("databse is connected") },
err=>{console.log(err);}
)

const connection = mongoose.connection
connection.once('open', ()=> {
     console.log("mongoDB connection established sucessfully")
})

//route  middleware
app.use('/portfolio',homepage)


app.listen(port, () => {
     console.log(`listening to port : ${port}`)
})