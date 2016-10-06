var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Greetings from New Haven!');
});

app.listen(process.env.PORT || 4000);