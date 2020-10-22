const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

const server = http.createServer(( req, res ) => {
    console.log(req.url);
    const filename = req.url;
    fs.readFile( path.join( __dirname, filename ), 'utf8', ( err, contents ) => {
        if( err ) {
            console.error( err.message );
            return;
        }
    
        console.log( contents );
    });
});

const port = 3000;

server.listen(port, () => {
    console.log( `Server started on http://localhost:${port}` );
});