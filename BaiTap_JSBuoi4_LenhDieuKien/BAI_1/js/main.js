


function sapXep(){
    var num1 = document.getElementById("inputNu1").value;
    var num2 = document.getElementById("inputNu2").value;
    var num3 = document.getElementById("inputNu3").value;
    var ketQua = 0;
    
    if(num1 > num2){
        if(num2 > num3){
            ketQua = num1 + " > " + num2 + " > " + num3;
            console.log(ketQua);
        }else if(num1 > num3){
            ketQua = num1 + " >" + num3 + " > " + num2 ;
            console.log(ketQua);
        }else{
            ketQua = num3 + " > " + num1 + " > " + num2;
            console.log(ketQua);
        }
    }else if(num2 < num3){
        ketQua = num3 + " > " + num2 + " > " + num1;
        console.log(ketQua);
    } else if(num1 > num3){
        ketQua = num2 + " > " + num1 + " > " + num3;
        console.log(ketQua);
    }else{
        ketQua = num2 + " > " + num3 + " > " + num1 ;
        console.log(ketQua);
    }
    document.getElementById("txtNum").innerHTML = ketQua;
}
document.getElementById("btnNum").onclick = sapXep;
