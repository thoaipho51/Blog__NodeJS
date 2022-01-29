const express = require('express');
const app = express();

const morgan = require('morgan');
const { engine } = require('express-handlebars');

var path = require('path');
const port = 3000;

// Nhận hàm index của route
const route = require('./routes');

app.use(express.static(path.join(__dirname, '/public')));

// HTTP logger
// app.use(morgan('combined'))

//Template Engine -- Cấu hình template handlebars (Giúp cấu hình layout)
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//  Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
