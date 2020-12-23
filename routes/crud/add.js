var express = require('express');
var router = express.Router();
const db = require ('../../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/', async function (req, res, next) {
    const { title, resume, genre } = req.body

    const film = await db.film.findOne({where : {title: title}})
    if (film){

        res.render('add', { title: 'Express', error:'Ce film existe déjà' });
        return
        
    }
    await db.film.create( {title: req.body.title, resume: req.body.resume, genre: req.body.genre} );
    res.redirect('home')
    

});

  
module.exports = router;
