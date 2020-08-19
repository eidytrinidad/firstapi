const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

//Middlewares

app.use(bodyParser.json());
app.use(cors())

//import Routes

const postRoute = require('./routes/post');


app.use('/posts',postRoute)
// Routes

app.get('/',(req,res)=>{
    res.send("We are on home")
})



//Start listening to the server
app.listen(4000)

//COnnect to DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("Connected to DB")
})


// mongoose.connect("mongodb+srv://Eidy:19931993@cluster0.xivur.gcp.mongodb.net/Prueba?retryWrites=true&w=majority",
// {useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
//     console.log("La Cone se hizo ")

//     // Crear servidor y escuchar peticiones


//     app.listen(()=>{
//         console.log(`Servidor corriendo http://localhost:4000`);
//     })


// })