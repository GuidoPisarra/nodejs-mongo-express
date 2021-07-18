const express= require('express');
const morgan = require('morgan');

const app= express();
const routesApi = require ('./routes-api');
//settings

app.set('appName','miprimerserver');
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

//rutas
const rutas = require('./routes');
app.use(rutas);

// midlewares
app.use(morgan('combined'));
app.use('/api',routesApi);

app.get('*',(req,res)=>{
    res.end("no existe");
})
   
app.listen(3000,()=>{
    console.log("alta server");
    console.log('nombre de la app: '+ app.get('appName'));
});


