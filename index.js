//imports
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

const paginaRoutes = require('./routes/pagina');
const trianguloRoutes = require ('./routes/triangulo');

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/examen', trianguloRoutes);
app.use('/examen', paginaRoutes);

// Definición de la aplicación
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//Lanazar app
app.listen(8083, ()=> {  // con el puerto 8080
    console.log("Servidor en linea :)");
}) ;