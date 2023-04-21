//console.log('Prueba exitosa1');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars'); //motor de plantillas
const methodOverride = require('method-override');
const session = require('express-session');
const { dirname } = require('path');
const flash = require('connect-flash');
const passport = require('passport');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')





//Nuestra aplicación
const app = express();
//Configuramos puerto
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //asignamos la carpeta views dentro de src
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', //propiedades de handlerbars //crear carpeta views/layouts/main.hbs
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'), //partes como formulario
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs' //extensión de los archivos
}));
app.set('view engine', '.hbs'); //motor de vistas en hbs


app.get('/', (req,res)=>{
    //res.send("Este es el Index");
    res.render('index');
});

app.get('/signin', (req,res)=>{
    res.send("Aquí va el formulario de inicio de sesión");
});

//Lanzar el servidor
app.listen(app.get('port'), function(){
    console.log('Servidor corriendo en localhost:3000')
});
