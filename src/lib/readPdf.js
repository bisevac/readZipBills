import path from 'path';
import fs from 'fs';
import { PdfReader } from 'pdfreader';

export default async () => new Promise( ( resolve, reject ) => {
  $log.info( 'Starting Read Pdf File' );
  const pdfFolder = path.resolve( __dirname, './../../files' );
  const pdfFiles = fs.readdirSync( pdfFolder ).filter( item => /.pdf+$/ig.test( item ) );
  const Promises = [];


  pdfFiles.forEach( ( item ) => {
    $log.info( `${item}..reading` );
    Promises.push( new Promise( ( _resolve, _reject ) => {
      const obj = { text : '', fileName : '' };
      fs.readFile( `${pdfFolder}/${item}`, ( err, pdfBuffer ) => {
        obj.fileName = item;
        if ( err ) _reject( err );
        new PdfReader().parseBuffer( pdfBuffer, ( errParse, data ) => {
          if ( errParse ) _reject( errParse );
          else if ( !data ) _resolve( obj );
          else if ( data.text ) {
            obj.text += `${data.text} `;
          }
        } );
      } );
    } ) );
  } );


  Promise.all( Promises ).then( ( values ) => {
    resolve( values );
  } ).catch( ( err ) => {
    $log.error( err );
    reject( err );
  } );
} );
