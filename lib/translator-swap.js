function translate ( input ) {
  // do swap translation

  var wordArray = input.split(' ');

  var resultArray = wordArray.map( function( element ) {
    var firstHalf = element.slice(0, element.length / 2);
    var secondHalf = element.slice(element.length / 2);

    return secondHalf + '-' + firstHalf;

  });

  return resultArray.join(' ');
}

module.exports = translate;