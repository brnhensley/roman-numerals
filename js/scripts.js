$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#inputNumber").val();

    var numeralInput = parseInt(userInput);
    var arrayOutput = [];

    //This loop turns input number into all I's
    for(var i = 1; i <= numeralInput; i++) {
      arrayOutput.push("I");
    }
    var romanOutputArray = [];

    // These loops search array and writes a M for 1000 I's, D for 500, C for 100, L for 50, X for 10

    for (var index = 1; (index * 1000) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 1000);
      romanOutputArray.push("M");
    }
    for (var index = 1; (index * 900) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 900);
      romanOutputArray.push("CM");
    }
    for (var index = 1; (index * 500) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 500);
      romanOutputArray.push("D");
    }
    for (var index = 1; (index * 400) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 400);
      romanOutputArray.push("CD");
    }
    for (var index = 1; (index * 100) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 100);
      romanOutputArray.push("C");
    }
    for (var index = 1; (index * 90) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 90);
      romanOutputArray.push("XC");
    }
    for (var index = 1; (index * 50) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 50);
      romanOutputArray.push("L");
    }
    for (var index = 1; (index * 40) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 40);
      romanOutputArray.push("XL");
    }
    for (var index = 1; (index * 10) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 10);
      romanOutputArray.push("X");
    }
    for (var index = 1; (index * 9) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 9);
      romanOutputArray.push("IX");
    }
    for (var index = 1; (index * 5) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 5);
      romanOutputArray.push("V");
    }
    for (var index = 1; (index * 4) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 4);
      romanOutputArray.push("IV");
    }

// This is the output

    romanOutputArray.push(arrayOutput.join(""));
    $("#answer").show();
    $("#outputToUser").text(romanOutputArray.join(''));
  });
});

// var romanArray = ["I", "IV", "V", "IX", "X", "L", "C", "D", "M"]
// var romanArrayTrans = ["I" = 1, "V" = 5, "X" = 10, "L" = 50, "C" = 100, "D" = 500, "M" = 1000]


// IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
