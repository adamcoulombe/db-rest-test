var app = require('express')()
  , server = require('http').createServer(app)
  , db_url = process.env.MONGOHQ_URL   // heroku does this automatically. Locally, use bash command: export MONGOHQ_URL=mongodb://user:pass@server.mongohq.com/db_name
  , db = require('mongoose').createConnection(db_url);


var port = process.env.PORT || 80;


server.listen(port, function() {
 // console.log("Express server listening on port");
});


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');

	


});

