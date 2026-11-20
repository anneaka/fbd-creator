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

function getForces(A, G, N, F) {
    forces[0] = A;
    forces[1] = G;
    forces[2] = N;
    forces[3] = F;

    drawLines(forces);
}

function drawLines(forces) {
windowResized()

    fill(255);
    rect(-50, -50, myWidth+50, myHeight+50)
    
    A=constrain(forces[0], 0, myWidth/2);
    G=constrain(Number(forces[1]), 0, myWidth/2);
    N=constrain(forces[2], 0, myWidth/2);
    F=constrain(forces[3], 0, myWidth/2);
    console.log(A);
    drawBorder();
    
    //line(centerX, centerY, centerX+A, centerY)
    angleLine(A, 30);
    line(centerX, centerY, centerX, centerY+G)
    line(centerX, centerY, centerX, centerY-N)
    line(centerX, centerY, centerX-F, centerY)
    /*
    rect(-size2, -size2, myWidth+size2, 0)
    rect(-size2, -size2, 0, myHeight+size2)
    rect(myWidth, myHeight, myWidth+size2, myHeight-size2)
    rect(-size2, myHeight, myWidth+size2, myHeight+size2)
    */
    fill(0);
    circle(myWidth/2, myWidth/2, 3);

}

function constrain(length, min, max) {
    if (length<min){
        length=min;
    }
    else if (length>max) {
        length=max;
    }
}

function angleLine(l, d) {
    let r = Math.PI * d/180
    let x = l* Math.cos(r);
    let y = l* Math.sin(r);

    line(centerX, centerY, centerX+x, centerY-y)
    noFill();
    triangle(centerX+x, centerY-y, centerX+(l-15)*Math.cos((r)-(r/l)), centerY-(l-15)*Math.sin(r-(r/l)), centerX+(l-15)*Math.cos(r+0.1), centerY-(l-15)*Math.sin(r+0.1));
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