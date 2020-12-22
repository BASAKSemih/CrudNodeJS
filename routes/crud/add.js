var express = require('express');
var router = express.Router();
const db = require ('../../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/', async function (req, res, next) {
    const { title, resume, genre } = req.body //  const username = req.body.username et  const password = req.body.password 

    const film = await db.film.findOne({where : {title: title}})
    if (film){

        res.render('register', { title: 'Express', error:'Ce film existe déjà' });
        return
        
    }
    await db.film.create( {title: req.body.title, resume: req.body.resume, genre: req.body.genre} );
    //res.redirect('login', {title: 'Vous pouvez vous connecter à présent'});
    res.render('home', { title: 'Express', error:'Film ajouter avec succès ' });
    

});

  
module.exports = router;