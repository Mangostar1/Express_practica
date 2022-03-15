/* const {frutas, dinero} = require('./frutas.js');
const cowsay = require('cowsay');

frutas.forEach(item => {
    console.log(item);
});

console.log(dinero);

console.log(cowsay.say({
    text: 'Holam, soy una vaca',
    e: 'oO',
    T: 'U'
})); */

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))//este metodo configura la careta public como los recursos

app.get('/', (req, res) => {
    res.render('index', {titulo: 'Mi titulo dinamico'});
})

app.get('/servicios', (req, res) => {
    res.render(`servicios`, {tituloSV: 'Pagina de servicios'});
})

app.use((req, res, next) => { //este metodo esta reciviendo cualquier error en la escritura de la url de la pagina
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`server escuchando en el puerto ${port}`);
})



