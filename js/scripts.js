$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#inputNumber").val();

    var numeralInput = parseInt(userInput);
    var arrayOutput = [];

    //This loop turns it into all I's
    for(var i = 1; i <= numeralInput; i++) {
      arrayOutput.push("I");
    }
    var romanOutputArray = [];

    // These loops search array and writes a M for every 1000 I's

    for (var index = 1; (index * 1000) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 1000);
      romanOutputArray.push("M");
    }

    //These loops search array and writes a D for every 500 I's

    for (var index = 1; (index * 500) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 500);
      romanOutputArray.push("D");
    }

    for (var index = 1; (index * 100) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 100);
      romanOutputArray.push("C");
    }
    for (var index = 1; (index * 50) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 50);
      romanOutputArray.push("L");
    }
    for (var index = 1; (index * 10) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 10);
      romanOutputArray.push("X");
    }
    for (var index = 1; (index * 5) <= arrayOutput.length; index) {
      arrayOutput.splice(0, 5);
      romanOutputArray.push("V");
    }

    romanOutputArray.push(arrayOutput.join(""));

    $("#answer").show();
    $("#outputToUser").text(romanOutputArray.join(''));
  });
});

// var romanArray = ["I", "IV", "V", "IX", "X", "L", "C", "D", "M"]
// var romanArrayTrans = ["I" = 1, "V" = 5, "X" = 10, "L" = 50, "C" = 100, "D" = 500, "M" = 1000]


// IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
