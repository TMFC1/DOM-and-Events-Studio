function inIt() {
    let launch = document.getElementById("takeoff");
    launch.addEventListener("click", blastOff);
    let land = document.getElementById("landing");
    land.addEventListener("click", landIt);
    let shutDown = document.getElementById("missionAbort");
    shutDown.addEventListener("click", abortNow);
    let moveUp = document.getElementById("up");
    moveUp.addEventListener("click", rise);
    let moveDown = document.getElementById("down");
    moveDown.addEventListener("click", descend);
    let moveRight = document.getElementById("right");
    moveRight.addEventListener("click", turnRight);
    let moveLeft = document.getElementById("left");
    moveLeft.addEventListener("click", turnLeft);
}
function blastOff() {
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    let backgroundColor = document.getElementById("shuttleBackground");
    backgroundColor.style.background = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML = 10000;
 }
     
 function landIt() {
     window.alert("The shuttle is landing. Landing gear engaged.");
     document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
     let backgroundColor = document.getElementById("shuttleBackground");
     backgroundColor.style.background = "green";
     document.getElementById("spaceShuttleHeight").innerHTML = 0;
 }
function abortNow() {
    let confirmation = window.confirm("Confirm that you want to abort the mission.");
    document.getElementById("flightStatus").innerHTML = "Mission aborted.";
    let backgroundColor = document.getElementById("shuttleBackground");
    backgroundColor.style.background = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
}
function rise() {
    let placement = document.getElementById("rocket");
    Number(placement.height) += 10;
    Number(document.getElementById("spaceShuttleHeight").innerHTML) += 10000;
}
function descend() {
    let placement = document.getElementById("rocket");
    Number(placement.height) -= 10;
    Number(document.getElementById("spaceShuttleHeight").innerHTML) -= 10000;
}
function turnRight() {
    let placement = document.getElementById("rocket");
    Number(placement.width) += 10;
}
function turnLeft() {
    let placement = document.getElementById("rocket");
    Number(placement.width) -= 10;
}
 window.onload = inIt;