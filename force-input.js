// initiate constants for value limits
const maxValue = 1000;
const minAngle = -360;
const maxAngle = 360;
const forcesList = ["A", "G", "N", "F"];

// set all values to 0
for(i=0; i<forcesList.length; i++){
    const angle = document.getElementById("angle" + forcesList[i]);
    const textbox = document.getElementById("text" + forcesList[i]);
    angle.value = 0;
    textbox.value = 0;
    
}

/**
 * Checks every force magnitude value to ensure they are within the given limits
 *
 * @param id id of force being checked
 */
function valueCheck(id) {
        // Checks if force value is below 0 or above maxLimit of 1000
        if (document.getElementById("text"+id).value < 0 || document.getElementById("text"+id).value > maxValue) {
            // If value is below 0, set value to 0  
            if (document.getElementById("text"+id).value < 0) {
                document.getElementById("text"+id).value = 0;

            }
            // If value is above maxLimit (1000), set value to value divided by 10
            else {
                document.getElementById("text"+id).value = document.getElementById("text"+id).value / 10;
            }

        }

}

/**
 * Checks every force angle to ensure they are within the given limits
 *
 * @param id id of force being checked
 */
function angleCheck(id) {
    // If angle is below minAngle(-360) or maxAngle(-360), set angle to angle divided by 10
    if (document.getElementById("angle"+id).value < minAngle || document.getElementById("angle"+id).value > maxAngle) {
        document.getElementById("angle"+id).value = document.getElementById("angle"+id).value / 10;
    }
}

/**
 * Resets all values to 0
 */
function reset() {
    for (i = 0; i < forcesList.length; i++) {
        document.getElementById("text"+forcesList[i]).value = 0;
        document.getElementById("angle"+forcesList[i]).value = 0;
        document.getElementById("radioboxM").value = ""
        document.getElementById("radioboxA").value = ""
    }

    
}

/**
 * Allows input in only one box depending on which radio is inputted
 */
function showRadio() {
    const radioM = document.getElementById("radioM");
    const radioboxM = document.getElementById("radioboxM");
    const radioA = document.getElementById("radioA");
    const radioboxA = document.getElementById("radioboxA");
    radioboxM.value = "";
    radioboxA.value = "";
    if (radioM.checked == true) {
        radioboxM.disabled = false;
    }  
    else {
        radioboxM.disabled = true;
    }
    if (radioA.checked == true) {
        radioboxA.disabled = false;
    }
    else {
        radioboxA.disabled = true;
    }

}
