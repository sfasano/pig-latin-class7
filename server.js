var express = require( 'express' ),
    app = express(),
    bodyparser = require( 'body-parser'),
    translatorpig = require( './lib/translator-pig' ),
    translatorswap = require( './lib/translator-swap' ),
    path = require( 'path' ),
    public = path.join( __dirname, 'public' ),
    port = 3000;

app.use( express.static( public ) );
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( { extended: true } ) );

app.listen(port, function() {
  console.log('app server started on port', port);
});

app.post( '/translatepig', function( req, res ) {
  var translated = translatorpig ( req.body.text );
  res.json( { text: translated } );
});

app.post( '/translateswap', function( req, res ) {
  var translated = translatorswap ( req.body.text ); //translator ( req.body.text );
  res.json( { text: translated } );
});