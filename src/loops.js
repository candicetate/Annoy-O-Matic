// Ask the user, are we there yet?

var answer = prompt("Are we there yet?");

// Keep asking until they say yes or yeah

while (answer.indexOf("yes") === -1 && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}

// Alert yay we made it
alert("Woo hoo!");
