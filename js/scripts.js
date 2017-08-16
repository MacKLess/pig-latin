// Business Logic
var translator = function(english){
  return false;
}





// User Interface
$(document).ready(function(){
  $("form#userInput").submit(function(event){
      event.preventDefault();
      var sentence = $("#inputSentence").val();
      var result = translator(sentence);
      console.log(result);

  });
});
