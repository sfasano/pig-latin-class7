$( 'button' ).on( 'click', function(){
  
  var request = {
    text: $( '#toTranslate' ).val()
  };

  var URL = this.id === "first-button" ? "translatepig": "translateswap";

  $.post( URL, request, function(response) {
    $("#translated").text(response.text);
  });

  return false;

});