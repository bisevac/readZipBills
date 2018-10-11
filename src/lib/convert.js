
export default ( values ) => {
  const arr = [];
  const regExETTN = new RegExp( /(?<=ETTN: )(.\s*)(\S+)/ );
  const regExDescription = new RegExp( /(?<=Tutarı {2}1)(.*)(?=Adet)/ );
  const regExTotal =  new RegExp( /(?<=Hizmet Toplam Tutarı )(.*)(?= Toplam İskonto)/ );
  values.forEach( ( item ) => {
    const ETTN = regExETTN.exec( item.text );
    const description = regExDescription.exec( item.text );
    const total = regExTotal.exec( item.text );
    arr.push( {
      ETTN        : ETTN ? ETTN[ '0' ] : '',
      fileName    : item.fileName,
      description : description ? description[ '0' ].trim() : '',
      amount      : total ? total[ '0' ] : '0 TL',
    } );
  } );
  return arr;
};
