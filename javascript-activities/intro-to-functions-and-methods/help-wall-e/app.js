const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var addPixel = 50
function moveRobot() {
    //add code here
    
    robot.style.left = addPixel + "px";
    addPixel = addPixel + 50;
}
robot.addEventListener('click', moveRobot)