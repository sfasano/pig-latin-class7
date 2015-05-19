var vowels = { 
    a: true, 
    e: true, 
    i: true, 
    o: true,
    u: true 
  };

function translate ( input ) {
  // do piglatin translation

  var wordArray = input.split(' ');

  var resultArray = wordArray.map( function( element ) {
    var firstLetter = element[0];

    if ( vowels[firstLetter] ) {
      return element + "-ay";
    } else {
      return element.slice(1) + "-" + firstLetter + "ay";
    }
  });

  return resultArray.join(' ');
}

module.exports = translate;