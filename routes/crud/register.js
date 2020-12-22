var express = require('express');
var router = express.Router();
const db = require ('../../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', async function (req, res, next) {
    const { username, password } = req.body //  const username = req.body.username et  const password = req.body.password 

    const user = await db.User.findOne({where : {username: username}})
    if (user){

        res.render('register', { title: 'Express', error:'Cette utilisateur existe déjà' });
        return
        
    }
    await db.User.create( {username: req.body.username, password: req.body.password} );
    res.redirect('/')
    

});

  
module.exports = router;
