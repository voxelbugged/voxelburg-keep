var timeWasted = 0;

function onClick() {
  timeWasted += 1;
  document.getElementById("clicks").innerHTML = timeWasted;
  if (timeWasted == 10) {
    document.getElementById("msg1").innerHTML = "Do you find this entertaining?";
  }
  if (timeWasted == 20) {
    document.getElementById("msg2").innerHTML = "Seriously now, it's just a button.";
  }
  if (timeWasted == 30) {
    document.getElementById("msg3").innerHTML = "This isn't even the game you're looking for. That one's not finished yet.";
  }
  if (timeWasted == 40) {
    document.getElementById("msg4").innerHTML = "Okay, you do you, I guess. This is my final message.";
  }
  if (timeWasted == 50) {
    alert("And this is my first alert! Do you like it? Press the button if you do.")
  }
  if (timeWasted == 51) {
    alert("Yay!! Thank you for appreciating my programming skills!! Enjoy the awesome button!!")
  }
  if (timeWasted == 100) {
    alert("Hey, is it just me or is the background really suspicious?")
  }
  if (timeWasted > 666) {
    alert("kay faraday")
  }
};
