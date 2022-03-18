const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'Mi titulo dinamico'});
})

router.get('/servicios', (req, res) => {
    res.render(`servicios`, {tituloSV: 'Pagina de servicios'});
})

module.exports = router;