
function tamGiac(){
    var canh1 = document.getElementById("inputNu1").value;
    var canh2 = document.getElementById("inputNu2").value;
    var canh3 = document.getElementById("inputNu3").value;
    var ketQua = 0;
    
    if(canh1 == canh2 && canh1 == canh3){
        ketQua ="Hình tam giác đều";
    }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        ketQua = "Hình tam giác cân";
    }else if(Math.pow(canh1,2) == Math.pow(canh2,2) + Math.pow(canh3,2) || Math.pow(canh2,2) == Math.pow(canh1,2) + Math.pow(canh3,2) || Math.pow(canh3,2) == Math.pow(canh2,2) + Math.pow(canh1,2)){
        ketQua ="Hình tam giác vuông";
    }else{
        ketQua = "Một loại tam giác nào đó";
    }

    document.getElementById("txtNum").innerHTML = ketQua;
}

document.getElementById("btnNum").onclick = tamGiac;