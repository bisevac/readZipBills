const extract = require( 'extract-zip' );


export default path => new Promise( ( resolve, reject ) => {
  $log.info( `${path} Zip file Extract Starting` );
  extract( path, { dir : `${__dirname}./../../files` }, ( err ) => {
    if ( err ) {
      reject( err );
    } else {
      $log.info( 'Zip file Extract Done' );
      resolve();
    }
  } );
} );
