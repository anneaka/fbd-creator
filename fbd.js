function setup() {

                myWidth = 300;
                myHeight = 300
                createCanvas(myWidth, myHeight);
                background(205);
                const forces=[0, 0];
            }

            function draw() {
                //circle(mouseX, mouseY, 20);
                //drawLine(8);
            }

            function getForces(A, G) {
                forces[0] = A;
                forces[1] = G;

                drawLine(forces);
            }

            function drawLine(A, G) {
                A=Number(A);
                G=Number(G);
                console.log(A);
                rect(0, 0, myWidth, myHeight);
                line(myWidth/2, myHeight/2, myWidth/2+A, myHeight/2)
                line(myWidth/2, myHeight/2, myWidth/2, myHeight/2+G)
                
            }