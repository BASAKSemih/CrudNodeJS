var express = require('express');
var router = express.Router();
const db = require ('../../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', async function (req, res, next) {
    const { username, password } = req.body //  const username = req.body.username et  const password = req.body.password 

    const user = await db.User.findOne({where : {username: username}})
    if (!user){

        res.render('login', { title: 'Express', error:'Nom utilisateur incorrect' });
        return
        
    }
    console.log(user.dataValues.password, password)
    if (user.dataValues.password !== password)
    {
        res.render('login', { title: 'Express', error:'Mot de passe incorrect' });
        return
    }

    
    //await user.save()
    res.redirect('home')



});

  
module.exports = router;
