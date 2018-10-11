/* eslint-disable global-require */
import log from './lib/logger';
import zipExtract from './lib/readzip';
import readPdf from './lib/readPdf';
import convert from './lib/convert';


export default async ( _path ) => {
  try {
    log();
    await zipExtract( _path );
    const objArr = await readPdf();
    const data = await convert( objArr );
    $log.info( 'data', JSON.stringify( data ) );
    return data;
  } catch ( error ) {
    $log.error( error );
    return false;
  }
};
