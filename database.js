const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://djaramillo:dj123@cluster0.kc13fni.mongodb.net/appCreditos', {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false
    
})
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));