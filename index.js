let express = require('express');
let app = express();

let webRoutes = require('./routes/web');


let appConfigs =  require('./configs/app');

let methodOverride = require('method-override')
// sobreescribe el método POST
app.use(methodOverride('_method'))

app.use('/', webRoutes);
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



let exphbs = require('express-handlebars');
const extNamehbs = 'hbs';
let hbs = exphbs.create({extname: extNamehbs});
app.engine(extNamehbs, hbs.engine);
app.set('view engine', extNamehbs);



app.listen(appConfigs.express_port, function(){
    console.log('The app is running on port ' + appConfigs.express_port);
});



