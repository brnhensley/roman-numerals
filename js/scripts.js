




function roman(userInput) {
    var numeralInput = parseInt(userInput);
    var arrayOutput = [];

    //This loop turns input number into all I's
    for(var i = 1; i <= numeralInput; i++) {
      arrayOutput.push("I");
    }
    var romanOutputArray = [];

    // These loops search array and writes a M for 1000 I's, D for 500, C for 100, L for 50, X for 10

    for (var index = 1; 1000 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 1000);
      romanOutputArray.push("M");
    }
    for (var index = 1; 900 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 900);
      romanOutputArray.push("CM");
    }
    for (var index = 1; 500 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 500);
      romanOutputArray.push("D");
    }
    for (var index = 1; 400 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 400);
      romanOutputArray.push("CD");
    }
    for (var index = 1; 100 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 100);
      romanOutputArray.push("C");
    }
    for (var index = 1; 90 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 90);
      romanOutputArray.push("XC");
    }
    for (var index = 1; 50 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 50);
      romanOutputArray.push("L");
    }
    for (var index = 1; 40 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 40);
      romanOutputArray.push("XL");
    }
    for (var index = 1; 10 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 10);
      romanOutputArray.push("X");
    }
    for (var index = 1; 9 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 9);
      romanOutputArray.push("IX");
    }
    for (var index = 1; 5 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 5);
      romanOutputArray.push("V");
    }
    for (var index = 1; 4 <= arrayOutput.length; index) {
      arrayOutput.splice(0, 4);
      romanOutputArray.push("IV");
    }

// This is the output

    romanOutputArray.push(arrayOutput.join(""));
    console.log(romanOutputArray);

  return romanOutputArray.join('');
}

$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#inputNumber").val();

    var output = roman(userInput);

    $("#answer").show();
    $("#outputToUser").text(output);
  });
});
