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
    var firstLetter = element[0].toLowerCase();

    var i = 0;
    while ( !vowels[element[i]] ) {
      i++;
    }

    var numberLeadingConsonants = i;

    switch (numberLeadingConsonants) {
      case 0:
        return element + "-ay";
        break;
      case 1:
        return element[1].toUpperCase() + element.slice(2) + "-" + firstLetter + "ay";
        break;
      case 2:
        return element[2].toUpperCase() + element.slice(3) + "-" + firstLetter + element[1] + "ay";
        break;
      case 3:
      default:
        return element[3].toUpperCase() + element.slice(4) + "-" + firstLetter + element[1] + element[2] + "ay";
    }

  });

  return resultArray.join(' ');
}

module.exports = translate;