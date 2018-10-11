import path from 'path';
import app from '../src/index';


const init = async ( _path ) => {
  const resolvedPath = path.resolve( __dirname, _path );
  await app( resolvedPath );
};

init( './ArchiveKoc.zip' );
