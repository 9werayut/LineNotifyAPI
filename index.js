var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//route
var route = require("./routes/line-notify");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
});

app.use('/api/v1/linenotify', route);

app.listen(port, function() {
    console.log('Starting LineNotify API on port ' + port);
});
