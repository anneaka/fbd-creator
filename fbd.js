let myWidth = 300;
let myHeight = 300;


function setup() {

                myWidth = windowWidth;
                myHeight = windowWidth;
                createCanvas(myWidth, myHeight);
                background(205);
                const forces=[0, 0];
            }

            function windowResized() {
                    myWidth=windowWidth;

                    myHeight=windowWidth;

                
                    resizeCanvas(myWidth, myHeight);
                }


            function draw() {
                scale(myWidth/300);
                //circle(mouseX, mouseY, 20);
                //drawLine(88, 88, 0, 0);
            }

            function getForces(A, G, N, F) {
                forces[0] = A;
                forces[1] = G;
                forces[2] = N;
                forces[3] = F;

                drawLine(forces);
            }

            function drawLine(A, G, N, F) {
                A=Number(A);
                G=Number(G);
                N=Number(N);
                F=Number(F);
                console.log(A);
                rect(-1, -1, myWidth, myHeight);
                line(myWidth/2, myHeight/2, myWidth/2+A, myHeight/2)
                line(myWidth/2, myHeight/2, myWidth/2, myHeight/2+G)
                line(myWidth/2, myHeight/2, myWidth/2, myHeight/2-N)
                line(myWidth/2, myHeight/2, myWidth/2-F, myHeight/2)
                
            }