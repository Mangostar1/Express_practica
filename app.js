const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000; //se accede al valor del puerto almacenado en la variable de entorno del host o sino accede al puerto 3000

//coneccion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@test.gsep6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; //url de coneccion

mongoose.connect(uri)
    .then(() => {console.log('Base de datos conectada')})
    .catch((e) => {console.log(e)})


//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))//este metodo configura la careta public como los recursos

//rutas website

app.use('/', require('./router/RutasWeb'))

app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next) => { //este metodo esta reciviendo cualquier error en la escritura de la url de la pagina
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`server escuchando en el puerto ${port}`);
})



