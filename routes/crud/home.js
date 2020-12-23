var express = require('express');
var router = express.Router();
const db = require ('../../models/index')

/* GET home page. */
router.get('/', async function (req, res, next) {

    const films = await db.film.findAll()


 
   res.render('home', { title: 'Express', films: films });

});



  
module.exports = router;
