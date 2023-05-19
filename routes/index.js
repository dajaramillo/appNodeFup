const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req,res)=>{
    //res.send("Este es el Index");
    res.render('index');
});

router.get('/about', (req,res)=>{
    //res.send("Este es el Index");
    res.render('about');
});

router.get('/login', (req,res)=>{
    //res.send("Este es el Index");
    res.render('login/login');
});

router.post('/login', (req,res)=>{
    //res.send("Este es el Index");
    console.log("Estoy en el método post");
});


router.get('/register', (req,res)=>{
    //res.send("Este es el Index");
    res.render('login/register');
});

router.post('/register', async (req,res)=>{
    //res.send("Este es el Index");
    console.log('Estoy en el método post register');
    const { name, email, password, password2, dir } = req.body;
    const newUser = new User({name, email, password, dir});
    await newUser.save();

});

module.exports = router;