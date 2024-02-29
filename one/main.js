document.getElementById("Other links").onclick = function () {
  document.getElementById("mega").style.animation = "popup var(--main-transition) forwards";
}
// document.onclick = function () {
//   document.getElementById("mega").style.animation = "";
// }
var megaVisible = true; // Initial state

document.getElementById("Other links").onclick = function () {
  var megaElement = document.getElementById("mega");

  if (megaVisible) {
    megaElement.style.animation = "popup var(--main-transition) forwards";;
  } else {
    megaElement.style.animation = "";;
  }

  megaVisible = !megaVisible; // Toggle the state
}

        // Set the date we're counting down to
        var countDownDate = new Date("Mar 11, 2024 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function() {

            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the remaining time
            var distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("min").innerHTML = minutes;
            document.getElementById("sec").innerHTML = seconds;

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    
