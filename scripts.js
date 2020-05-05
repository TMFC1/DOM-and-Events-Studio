function blastOff() {
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    let backgroundColor = document.getElementById("shuttleBackground");
    backgroundColor.style.background = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML += 10000;
 }
 let takeOff = document.getElementById("takeoff");
 takeOff.addEventListener("click", blastOff);