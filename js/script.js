firstColumnID = document.getElementById("first-column");
secondColumnID = document.getElementById("second-column");
thirdColumnID = document.getElementById("third-column");
fourthColumnID = document.getElementById("fourth-column");
var firstMessage = "";
var secondMessage = "";
var thirdMessage = "";
var fourthMessage = "";
var partialMessage;

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0 && i % 5 == 0) {
            partialMessage = "<li>FizzBuzz</li>";
        } else if (i % 3 == 0) {
            partialMessage = "<li>Fizz</li>";
        } else {
            partialMessage = "<li>Buzz</li>";
        }
    } else {
        partialMessage = "<li>" + i + "</li>";
    }

    if (i <= 25) {
        firstMessage += partialMessage;
    } else if (i <= 50) {
        secondMessage += partialMessage;
    } else if (i <= 75) {
        thirdMessage += partialMessage;
    } else {
        fourthMessage += partialMessage;
    }
}

firstColumnID.innerHTML = firstMessage;
secondColumnID.innerHTML = secondMessage;
thirdColumnID.innerHTML = thirdMessage;
fourthColumnID.innerHTML = fourthMessage;