

function demSo(){
    var num1 = document.getElementById("inputNu1").value;
    var num2 = document.getElementById("inputNu2").value;
    var num3 = document.getElementById("inputNu3").value;
    var countSC = 0;
    var countSL = 0;
    console.log(num1, num2, num3, countSC, countSL);
    if(num1 % 2 == 0){
        countSC++;
        console.log(countSC);
    }else{
        countSL++;
        console.log(countSL);
    }
    if(num2 % 2 == 0){
        countSC++;
        console.log(countSC);
    }else{
        countSL++;
        console.log(countSL);
    }
    if(num3 % 2 == 0){
        countSC++;
        console.log(countSC);
    }else{
        countSL++;
        console.log(countSL);
    }
    document.getElementById("txtNum").innerHTML = "Có " + countSC +" số chẵn," + countSL + " số lẻ";
}

document.getElementById("btnNum").onclick = demSo;