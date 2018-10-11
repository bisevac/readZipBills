/* eslint no-underscore-dangle: 0 */
import winston from 'winston';

export default () => {
  const transports = [
    new winston.transports.Console( {
      level                           : 'debug',
      handleExceptions                : true,
      colorize                        : true,
      humanReadableUnhandledException : true,
      prettyPrint                     : true,
    } ),
  ];


  const logger = new winston.Logger( {
    transports,
    exitOnError : true,
  } );

  logger.stream = {
    write ( message ) {
      logger.info( message );
    },
  };

  global.$log = logger;
};
