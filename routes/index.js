const router = require('express').Router();

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

module.exports = router;