// initiate variables regarding canvase size
let myWidth=500;
let myHeight=500;
let centerX = myWidth/2;
let centerY = myHeight/2;

// initiate scaling variables
let scaling = 1;
let scaleAdjust = 1.3;

// initiate arrays holding input and display vector values
const forces=[0, 0, 0, 0, 0, 0];
const forceVis=[0, 0, 0, 0, 0, 0];

/**
 * Creates and redraws canvas when window is resized
 *
 */
function windowResized() {
            
        // reassign window width and height variables to current window size
        myWidth=windowWidth;
        myHeight=windowWidth;
        centerX = myWidth/2;
        centerY = myHeight/2;
        
        // create canvas for p5.js
        createCanvas(myWidth, myHeight);

        // draws background and border of sketch
        drawBackground();
    }

/**
 * Runs continuously, and readjusts canvas scale
 */
function draw() {
    // scales size of sketch based on window size
    scale(myWidth/500);
    centerX = myWidth/2;
    centerY = myHeight/2;
    
}

/**
 * Draws background of sketch
 */
function drawBackground() {

    // set parameters for easy modification
    let size = 3;
    let background = 255;
    let size2 = 10;
    
    // draw rectangle for backgound
    stroke(0);
    fill(255);
    rect(size, size, myWidth-size, myHeight-size);

    // draws guides representing positive directions
    fill(0);
    text("+", 15, 15);
    text("+", 55, 50);
    line(20, 55, 20, 20);
    line(15, 50, 50, 50);
    triangle(20, 20, 22, 25, 18, 25);
    triangle(50, 50, 45, 48, 45, 52);
   
    // draw circle representing center of mass of object in free body diagram
    fill(0);
    circle(myWidth/2, myWidth/2, 3);

    // draw dashed perpendicular guidelines 
    stroke(100);
    for(i=50; i<=myWidth-50; i=i+10) {
        line(i, centerX, i+5, centerY);
    }
    for(i=50; i<=myHeight-50; i=i+10) {
        line(centerY, i, centerX, i+5);
    }

    // draw visual scale
    noStroke();
    fill(255);
    rect(centerX-110, myHeight-22, 100, 15);
    
    
    // draws scale 
    fill(0);
    stroke(90);
    line(centerX, myHeight-22, myWidth-77, myHeight-22);
    noStroke();
    textSize(10);
    text('0N', myWidth/2-5, myHeight-5);
    if (scaling == 4.44444*scaleAdjust) {
        text('1000N', myWidth-80, myHeight-5);

        stroke(0);
        line(myWidth-77, myHeight-26, myWidth-77, myHeight-18);
        for (i=myWidth/2; i<myWidth-77; i+=((myWidth/2)-77)/5)
        {
            line(i, myHeight-26, i, myHeight-18);
        }
    }
    else if (scaling == 2.88888*scaleAdjust) {
        text('650N', myWidth-80, myHeight-5);

        stroke(0);
        line(myWidth-77, myHeight-26, myWidth-77, myHeight-18);
        for (i=myWidth/2; i<myWidth-25; i+=((myWidth/2)-25)/6.5)
        {
            line(i, myHeight-26, i, myHeight-18);
        }
    }
    else if (scaling == 2*scaleAdjust) {
        text('450N', myWidth-80, myHeight-5);
    
        stroke(0);
        line(myWidth-77, myHeight-26, myWidth-77, myHeight-18);
        for (i=myWidth/2; i<myWidth-77; i+=((myWidth/2)-77)/4.5)
        {
            line(i, myHeight-26, i, myHeight-18);
        }
    }
    else if (scaling == scaleAdjust) {
        text('250N', myWidth-80, myHeight-5);
    
        stroke(0);
        for (i=myWidth/2; i<myWidth-77; i+=((myWidth/2)-77)/5.1)
        {
            line(i, myHeight-26, i, myHeight-18);
        }
    }
    else {
        text('50N', myWidth-80, myHeight-5);
        
        stroke(0);
        line(myWidth-77, myHeight-26, myWidth-77, myHeight-18);
        for (i=myWidth/2; i<myWidth-77; i+=((myWidth/2)-77)/5)
        {
            line(i, myHeight-26, i, myHeight-18);
        }
    }

    stroke(0);

}

/**
 * Takes in forces and angles user inputed and puts them into an array for future use
 *
 * @param force array containing force magnitudes
 * @param angle array containing force angles
 */
function getForces(force, angle) {
    // force values for numerical calculations
    forces[0] = [constrain(force[0], 0, 1000), Math.PI * angle[0]/180];
    forces[1] = [constrain(force[1], 0, 1000), Math.PI * (angle[1]-90)/180];
    forces[2] = [constrain(force[2], 0, 1000), -1*Math.PI * (angle[2]-90)/180];
    forces[3] = [constrain(force[3], 0, 1000), -1*Math.PI * (angle[3]-180)/180];
    forces[4] = [constrain(force[4], 0, 1000), Math.PI * angle[4]/180];
    forces[5] = [constrain(force[5], 0, 1000), Math.PI * angle[5]/180];
    

    // force values displayed on diagram
    if (force[0] > 650 || force[1] > 650 || force[2] > 650 || force[3] > 650 || force[4] > 650 || force[5] > 650 || (findNetForce() > 650)) {
        scaling = 4.44444;
    }
    else if (force[0] > 450 || force[1] > 450 || force[2] > 450 || force[3] > 450 || force[4] > 450 || force[5] > 450 || (findNetForce() > 450)){
        scaling = 2.88888;
    }
    else if (force[0] > 250 || force[1] > 250 || force[2] > 250 || force[3] > 250 || force[4] > 250 || force[5] > 250 || (findNetForce() > 250)){
        scaling = 2;
    }
    else if (force[0] > 50 || force[1] > 50 || force[2] > 50 || force[3] > 50 || force[4] > 50 || force[5] > 50 || (findNetForce() > 50)){
        scaling = 1;
    }
    else {
        scaling = 0.22;
    }

    // adjust scaling
    scaling=scaling*scaleAdjust;

    for(i=0; i<forces.length; i++){
        forceVis[i] = [Number(forces[i][0]/scaling), Number(forces[i][1])];
    }

    stroke(0);
    drawLines(forceVis);

}


/**
 * Uses array of force vectors to calculate net force and its direction
 *
 */
function findNetForce() {

    // get x component values
    let Ax = forces[0][0]*Math.cos(forces[0][1]);
    let Gx = forces[1][0]*Math.cos(forces[1][1]);
    let Nx = forces[2][0]*Math.cos(forces[2][1]);
    let Fx = forces[3][0]*Math.cos(forces[3][1]);
    let Tx = forces[4][0]*Math.cos(forces[4][1]);
    let Sx = forces[5][0]*Math.cos(forces[5][1]);
    // find net x force
    let totalX = Ax+Gx+Nx+Fx+Tx+Sx;
    
    // get y component values
    let Ay = forces[0][0]*Math.sin(forces[0][1]);
    let Gy = forces[1][0]*Math.sin(forces[1][1]);
    let Ny = forces[2][0]*Math.sin(forces[2][1]);
    let Fy = forces[3][0]*Math.sin(forces[3][1]);
    let Ty = forces[4][0]*Math.sin(forces[4][1]);
    let Sy = forces[5][0]*Math.sin(forces[5][1]);
    /// find net y force
    let totalY = Ay+Gy+Ny+Fy+Ty+Sy;

    // calculates magnitude of net force
    let netForce = Math.sqrt(totalX*totalX + totalY*totalY)
    // calculates angle of net force relative to horizontal axis
    let theta = Math.atan(Math.abs(totalY)/Math.abs(totalX));
    
    // initialize directions in the default positive direction
    let posX = "→";
    let posY = "↑";

    // changes direction based on sign of net x and y force components
    if (totalX<0){
        posX = "←";
    }
    else if (myRound(totalX, 3)==0){
        posX = "";
    }
    if (totalY<0) {
        posY = "↓";
    }
    else if (myRound(totalY, 3)==0){
        posY = "";
    }
    
    // returns array containing magnitude of net force, angle of net force, and direction in x and y 
    return [myRound(netForce, 3), myRound(theta, 3), posX, posY];
    
}


/**
 * Rounds number to a given decimal place
 *
 * @param value number to round
 * @param decimals number of decimal places
 */
function myRound (value, decimals) {
    return (Math.round(value*Math.pow(10, decimals)))/Math.pow(10, decimals);
}

/**
 * shows net force vector on sketch diagram
 *
 * @param netForce magnitude of net force
 * @param theta direction of net force
 */
function showNetForce(netForce, theta) {
    stroke(20, 0, 200);
    fill(20, 0, 200);
    angleLine(netForce/scaling, theta, "ɴᴇᴛ");
    stroke(0, 0, 0);
}

/**
 * draws force vectors on sketch diagram
 *
 * @param forces array containing force vectors' magnitude and direction
 */
function drawLines(forces) {

    // make sure sketch size fits window size
    windowResized()

    // draws rectangle to cover previous iteration of diagram
    fill(255);
    rect(-50, -50, myWidth+50, myHeight+50)
    
    // draws background
    drawBackground();
    
    // draws force vectors
    angleLine(forces[0][0], forces[0][1], "ᴀ");
    angleLine(forces[1][0], forces[1][1], "ᵍ");
    angleLine(forces[2][0], forces[2][1], "ɴ");
    angleLine(forces[3][0], forces[3][1], "ᶠ");
    angleLine(forces[4][0], forces[4][1], "ᴛ");
    angleLine(forces[5][0], forces[5][1], "ₛₚ");

    // draws circle representing center of mass of object in free body diagram
    fill(0);
    circle(myWidth/2, myWidth/2, 3);

}

/**
 * constrains values within a range 
 *
 * @param length the value to constrain
 * @param min minimum value length can be
 * @param max maximum value length can be
 */
function constrain(length, min, max) {
    if (length<min){
        length=min;
    }
    else if (length>max) {
        length=max;
    }
}

/**
 * draws a line from the center of sketch from a given length and magnitude, and adds a label
 *
 * @param length length of line
 * @param radian angle to draw line at in radians
 * @param str label to go along with force vector
 */
function angleLine(length, radian, str) {
    
    // find x and y coordinates of line relative to 0, 0
    let x = length* Math.cos(radian);
    let y = length* Math.sin(radian);

    // draw line
    line(centerX, centerY, centerX+x, centerY-y)
    
    // initialize tip parameters
    let tipX = centerX+x;
    let tipY = centerY-y;
    let tipSize = 10;
    let angle = 0.5;
    
    // draws tip of vector
    if (length>50){
        triangle(tipX, tipY, tipX-tipSize*(Math.cos(radian-angle)), tipY+tipSize*(Math.sin(radian-angle)), tipX-tipSize*(Math.cos(radian+angle)), tipY+tipSize*(Math.sin(radian+angle)));
    }
    else {
        size = length/50;
        triangle(tipX, tipY, tipX-(tipSize*(Math.cos(radian-angle)))*size, tipY+(tipSize*(Math.sin(radian-angle)))*size, tipX-(tipSize*(Math.cos(radian+angle)))*size, tipY+(tipSize*(Math.sin(radian+angle)))*size);
    }

    // draws label of force vector if magnitude isn't 0
    if (length!= 0) {
        text('F'+str, centerX+(length+15)* Math.cos(radian)-5, centerY-+(length+15)* Math.sin(radian)+5);
    }
    
}
