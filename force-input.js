const maxValue = 1000;
const minAngle = -360;
const maxAngle = 360;
const forcesList = ["A", "G", "N", "F"];

for(i=0; i<forcesList.length; i++){
    const angle = document.getElementById("angle" + forcesList[i]);
    const textbox = document.getElementById("text" + forcesList[i]);
    angle.value = 0;
    textbox.value = 0;
    
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

function angleCheck(id) {
    if (document.getElementById("angle"+id).value < minAngle || document.getElementById("angle"+id).value > maxAngle) {
        document.getElementById("angle"+id).value = document.getElementById("angle"+id).value / 10;
    }
}

function reset() {
    for (i = 0; i < forcesList.length; i++) {
        document.getElementById("text"+forcesList[i]).value = 0;
        document.getElementById("angle"+forcesList[i]).value = 0;
    }

    
}


