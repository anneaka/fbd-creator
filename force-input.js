const maxValue = 100;
const forcesList = ["A", "G", "N", "F"];

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

function reset() {
    for (i = 0; i < forcesList.length; i++) {
        document.getElementById("text"+forcesList[i]).value = 0;
        document.getElementById("angle"+forcesList[i]).value = 0;
    }

    
}


