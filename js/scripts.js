// Business Logic
var vowels = ["a", "e", "i", "o", "u"]
var consonents = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

var isVowel = function(currentLetter){
  for (i =0; i < currentLetter.length; i++){
    if (vowels[i] === sentenceArray[0]){
      return true;
    }
  }
}
var isConsonent = function(currentLetter){
  for (i = 0; i < currentLetter.length; i++){
    if (consonents[i] === sentenceArray[0]){
      return true;
    }
  }
}
if (isVowel === true){
  var test = sentenceArray.push("way")
  console.log(test);
}
//
//
// if (sentenceArray[0] === vowels || sentenceArray[0] === consonents)
//
// var startConsonent = function(){
//   for ()
// }



var translator = function(english){
}

// var findSpaces = function(letter){
//   for (i=0; i<=letter.length; i++){
//     if (letter[i] === " "){
//       collector.push(i)
//     }
//   }
// }
//
// var collector = []


// User Interface
$(document).ready(function(){
  $("form#userInput").submit(function(event){
      event.preventDefault();
      var sentence = $("#inputSentence").val();
      var sentenceArray = sentence.split("")
      var result = translator(sentenceArray);
      // console.log(sentenceArray);
      // console.log(result);





      // var spaceIndex = findSpaces(sentenceArray);
  });
});
