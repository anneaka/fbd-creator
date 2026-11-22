let myWidth=500;
let myHeight=500;

let centerX = myWidth/2;
let centerY = myHeight/2;
const forces=[0, 0, 0, 0];

function setup() {
        
    myWidth=windowWidth;
    myHeight=windowWidth;
    createCanvas(myWidth, myHeight);


    background(255);
    drawBorder();
    
}



function windowResized() {
            
        
        myWidth=windowWidth;
        myHeight=windowWidth;
        
        createCanvas(myWidth, myHeight);
        drawBorder();
    console.log("a");
    }


function draw() {
    //resizeCanvas(myWidth, myHeight);
    scale(myWidth/500);
    centerX = myWidth/2;
    centerY = myHeight/2;
    
}

function drawBorder() {
    stroke=0;
    size = 3;
    background = 255;
    size2 = 10;
    
    //line(0, 0, myWidth, myHeight);
    fill(255);
    rect(size, size, myWidth-size, myHeight-size);
//line(0, 0, myWidth, myHeight);
  //line(myWidth, 0, 0, myHeight);
   
    fill(0);
    circle(myWidth/2, myWidth/2, 3);
}

function getForces(lengthA, lengthG, lengthN, lengthF, angleA, angleG, angleN, angleF) {
    forces[0] = [constrain(lengthA, 0, myWidth/2), angleA];
    forces[1] = [constrain(lengthG, 0, myWidth/2), angleG];
    forces[2] = [constrain(lengthN, 0, myWidth/2), angleN];
    forces[3] = [constrain(lengthF, 0, myWidth/2), angleF];

    drawLines(forces);
}

function findMax(forces) {
    let max = forces[0];
    for (i=1; i<forces.length; i++) {
        if (forces[i]>max) {
            max = forces[i];
        }
    }
}

function drawLines(forces) {
windowResized()

    fill(255);
    rect(-50, -50, myWidth+50, myHeight+50)
    
    //console.log(A);
    drawBorder();
    
    //line(centerX, centerY, centerX+A, centerY)
    angleLine(forces[0][0], forces[0][1], "A");
    angleLine(forces[1][0], forces[1][1]-90, "g");
    angleLine(forces[2][0], -1*forces[2][1]+90, "N");
    angleLine(forces[3][0], -1*forces[3][1]-180, "f");
    //line(centerX, centerY, centerX, centerY+lengthG)
    //line(centerX, centerY, centerX, centerY-lengthN)
    //line(centerX, centerY, centerX-lengthF, centerY)
    /*
    rect(-size2, -size2, myWidth+size2, 0)
    rect(-size2, -size2, 0, myHeight+size2)
    rect(myWidth, myHeight, myWidth+size2, myHeight-size2)
    rect(-size2, myHeight, myWidth+size2, myHeight+size2)
    */
    fill(0);
    circle(myWidth/2, myWidth/2, 3);

    text("+", 15, 15);
    text("+", 55, 50);
    line(20, 55, 20, 20);
    line(15, 50, 50, 50);
    triangle(20, 20, 22, 25, 18, 25);
    triangle(50, 50, 45, 48, 45, 52);

}

function constrain(length, min, max) {
    if (length<min){
        length=min;
    }
    else if (length>max) {
        length=max;
    }
}

function angleLine(l, d, str) {
    let r = Math.PI * d/180
    let x = l* Math.cos(r);
    let y = l* Math.sin(r);

    line(centerX, centerY, centerX+x, centerY-y)
    noFill();
    let tipX = centerX+x;
    let tipY = centerY-y;
    let tipSize = 10;
    let angle = 0.5;
    fill(0);
    if (l>50){
        triangle(tipX, tipY, tipX-tipSize*(Math.cos(r-angle)), tipY+tipSize*(Math.sin(r-angle)), tipX-tipSize*(Math.cos(r+angle)), tipY+tipSize*(Math.sin(r+angle)));

    }
    else {
        size = l/50;
        triangle(tipX, tipY, tipX-(tipSize*(Math.cos(r-angle)))*size, tipY+(tipSize*(Math.sin(r-angle)))*size, tipX-(tipSize*(Math.cos(r+angle)))*size, tipY+(tipSize*(Math.sin(r+angle)))*size);

    }

    if (l!= 0) {
text('F'+str, centerX+(l+15)* Math.cos(r)-5, centerY-+(l+15)* Math.sin(r)+5);
    
    }
    
}



/*
function drawLine(A, G, N, F) {
    A=Number(A);
    G=Number(G);
    N=Number(N);
    F=Number(F);
    console.log(A);
    drawBorder();
    line(centerX, centerY, centerX+A, centerY)
    line(centerX, centerY, centerX, centerY+G)
    line(centerX, centerY, centerX, centerY-N)
    line(centerX, centerY, centerX-F, centerY)
    
}
    */