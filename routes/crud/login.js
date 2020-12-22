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

        res.render('login', { title: 'Express', error:'sa existe pas sale iecnh' });
        return
        
    }
    console.log(user.dataValues.password, password)
    if (user.dataValues.password !== password)
    {
        res.render('login', { title: 'Express', error:'password il é faux' });
        return
    }

    user.username = 'azerty'
    await user.save()
    res.redirect('/')



});

  
module.exports = router;
