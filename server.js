var express = require( 'express' ),
    app = express(),
    bodyparser = require( 'body-parser'),
    translator = require( './lib/translator' ),
    path = require( 'path' ),
    public = path.join( __dirname, 'public' ),
    port = 3000;

app.use( express.static( public ) );
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( { extended: true } ) );

app.listen(port, function() {
  console.log('app server started on port', port);
});

app.post( '/translate', function( req, res ) {
  var translated = translator ( req.body.text );
  res.json( { piglatin: translated } );
});