//Calculate Program
let display = document.getElementById("display")


function appendtoDiplay(input){
    display.value += input ;
}



function clearDisplay() {
    display.value = "" ;
}

function caclulate() {
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error" ;
    }
}