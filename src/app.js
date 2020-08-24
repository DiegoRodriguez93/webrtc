let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let path = require( 'path' );

let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );

let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/components', express.static( path.join( __dirname, 'components' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );

io.of( '/stream' ).on( 'connection', stream );

server.listen( 3000 );





