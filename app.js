var express = require('express');
var app = express();

app.set("view engine", 'ejs');
app.set('views', __dirname + '/views');


app.get('/', function(req, res) {
    res.render('index.ejs')
});

app.get('/api/no-delay', function(req, res) {
    res.type('json');
    res.send(JSON.stringify({
        message: 'no delay'
    }));
});


app.get('/api/five-delay', function(req, res) {
    res.type('json');
    setTimeout(() => {
        res.send(JSON.stringify({
            message: 'three delay'
        }));
    }, 5000)
});


app.get('/api/ten-delay', function(req, res) {
    res.type('json');
    setTimeout(() => {
        res.send(JSON.stringify({
            message: 'ten delay'
        }));
    }, 10000)
});

app.get('/api/fifteen-delay', function(req, res) {
    res.type('json');
    setTimeout(() => {
        res.send(JSON.stringify({
            message: 'ten delay'
        }));
    }, 15000)
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
