const maxValue = 100;
const forcesList = ["A", "G", "N", "F"];

function helpme() {
    document.getElementById("vcheck").style.color = "red";
}
function valueCheck(id) {
        
        if (document.getElementById("text"+id).value < 0 || document.getElementById("text"+id).value > maxValue) {
            if (document.getElementById("text"+id).value < 0) {
                document.getElementById("text"+id).value = 0;

            }
            else {
                document.getElementById("text"+id).value = document.getElementById("text"+id).value / 10;
            }

        }



}






/*function setup() {
    let windowHeight = 180;
    let windowWidth = 360;
    createCanvas(windowWidth, windowHeight)
    background(235);

    // gravity
    inputFg = createInput(0, Number);
    inputFg.position(100, 40);
    inputFg.size(50);

}
function draw() {
    let g = inputFg.value();
    background(235);
    text(g, 50, 50);
    
}
*/

