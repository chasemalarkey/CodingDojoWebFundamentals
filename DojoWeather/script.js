function pickTemp(element){
    // var x = document.getElementById("temp").value;
    // console.log(x);
    // console.log(valNum2.innerHTML);
    for(var i = 1; i < 9; i++){
        var valNum2 = document.getElementById("temp" + i);
        console.log(valNum2);
        if(element.value === "F"){
            console.log("Here in the F statement");
            var tempMath = _math(valNum2.innerHTML);
            valNum2.innerHTML = tempMath + "&#8457";
        }
        else if(element.value === "C"){ 
            console.log("Here in the C statement");
            var tempMath2 = _math2(valNum2.innerHTML) 
            valNum2.innerHTML = tempMath2 + "&#8451"
            }
    }
    
}

function _math(valNum){
    var tempF =  (9/5 * (parseInt(valNum))) +32;
    // console.log(tempF, "_math");
    return Math.round(tempF);
} 

function _math2(valNum){
    var tempC = (((parseInt(valNum))) -32) * 5/9;
    // console.log(tempC, "_math2");
    return Math.round(tempC);
}
function removeCookie(){
    var element = document.getElementById("cookie");
    element.remove();
}
function _alert(){
    alert("Loading weather report...");
}