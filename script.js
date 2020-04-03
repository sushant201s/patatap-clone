//function to generate a random color
function generateRandomColor() {
    var r, g, b;
    r = Math.floor((Math.random() * 255) + 1);
    g = Math.floor((Math.random() * 255) + 1);;
    b = Math.floor((Math.random() * 255) + 1);
    return [r, g, b];
}
var circleArray = new Array();
circleArray.forEach(function (myCircle) {

})

function onFrame(event) {
    for (var i = 0; i < circleArray.length; i++) {
        var circle = circleArray[i];
        circle.scale(0.9);
    }
}

//function to get the total number of circles to pop between 1 and 6
function getTotalCircles() {
    return Math.floor((Math.random() * 6) + 1);
}

//function to get the coordinates for the circle
function getCoordinatesForCircle() {
    var x, y;
    x = Math.floor((Math.random() * 1000) + 1);
    y = Math.floor((Math.random() * 1000) + 1);
    return [x, y];
}

//function to genrate the radius of the circle
function generateRadius() {
    return Math.floor((Math.random() * 150) + 1);
}

//function to generate a circle and animate it on keypress
document.querySelector("canvas").addEventListener("click", function () {
    var totalCirclesToGenerate = getTotalCircles();
    for (var i = 0; i < totalCirclesToGenerate; i++) {
        //get the coordinates for the circle to generate
        var coordinate = getCoordinatesForCircle();
        var x = coordinate[0];
        var y = coordinate[1];
        var RgbColor = generateRandomColor();
        r = RgbColor[0];
        g = RgbColor[1];
        b = RgbColor[2];

        //generate a circle at the point
        var myCircle = new Path.Circle(new Point(x, y), generateRadius());
        myCircle.fillColor = "rgb(" + r + "," + b + "," + g + ")";
        wait(1500);
        myCircle.fillColor += 1;
        await sleep(1000);
    }
})

//function to wait
function wait(time) {
    var now = new Date().getTime();
    var millisecondsToWait = time;
    while (new Date().getTime() < now + millisecondsToWait) {

    }
}