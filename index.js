const express = require('express');
const mongoose = require('mongoose')
const db = require('./database/config')
const cors = require('cors');
require('dotenv').config();
mongoose.set('strictQuery', true);

//Crear el servidor express
const app = express();

//Base de datos
db();

//CORS
app.use(cors());

//Directorio publico
app.use( express.static('public') )


//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require('./routes/auth'));
app.use("/api", require('./routes/event'));

//TODO: auth// crear, login, renew
//TODO: CRUD: Eventos





//escuchar peticiones

app.listen( process.env.MONGO_URI, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.MONGO_URI }`);
} )