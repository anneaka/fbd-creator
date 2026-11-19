let myWidth=400;
let myHeight=400;

let centerX = myWidth/2;
let centerY = myHeight/2;
const forces=[0, 0, 0, 0];

function setup() {
        
    if (windowWidth/400 < (windowHeight)/400){
        myWidth=windowWidth;
        myHeight=400*windowWidth/400;
    }
    else {
        myWidth=400*(windowHeight)/400;
        myHeight=windowHeight;
    }
    createCanvas(myWidth, myHeight);


    background(205);
    drawBorder();
    
}



function windowResized() {
            
    if (windowWidth/400 < (windowHeight)/400){
        myWidth=windowWidth;
        myHeight=400*windowWidth/400;
    }
    else {
        myWidth=400*(windowHeight)/400;
        myHeight=windowHeight;
    }
        resizeCanvas(myWidth, myHeight);
}

function draw() {
    scale(myWidth/400);
    centerX = myWidth/2;
    centerY = myHeight/2;
    
    //circle(mouseX, mouseY, 20);
    //drawLine(88, 88, 0, 0);
}

function drawBorder() {
    stroke=0;
    size = 3;
    background = 200;
    size2 = 10;
    color = 255;
    rect(size, size, myWidth-size, myHeight-size);
}

function getForces(A, G, N, F) {
    forces[0] = A;
    forces[1] = G;
    forces[2] = N;
    forces[3] = F;

    drawLines(forces);
}

function drawLines(forces) {
    A=forces[0];
    G=forces[1];
    N=forces[2];
    F=forces[3];
    console.log(A);
    drawBorder();
    //line(centerX, centerY, centerX+A, centerY)
    angleLine(A, 30);
    line(centerX, centerY, centerX, centerY+G)
    line(centerX, centerY, centerX, centerY-N)
    line(centerX, centerY, centerX-F, centerY)

    rect(-size2, -size2, myWidth+size2, 0)
    rect(-size2, -size2, 0, myHeight+size2)
    rect(myWidth, myHeight, myWidth+size2, myHeight-size2)
    rect(-size2, myHeight, myWidth+size2, myHeight+size2)
    
}

function angleLine(l, d) {
    let r = Math.PI * d/180
    let x = l* Math.cos(r);
    let y = l* Math.sin(r);

    line(centerX, centerY, centerX+x, centerY-y)
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