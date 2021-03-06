// import dependencies
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookie_parser = require("cookie-parser")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5001
const homepage = require("./Routes/homepage")
const admin = require("./Routes/admin")
const auth = require('./Routes/Auth')

//middlewares
app.use(cors({
     origin: 'http://localhost:3000',
credentials: true}))
app.use(express.json())
app.use(cookie_parser())

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
app.use('/auth', auth)
app.use('/admin', admin)

app.listen(port, () => {
     console.log(`listening to port : ${port}`)
})