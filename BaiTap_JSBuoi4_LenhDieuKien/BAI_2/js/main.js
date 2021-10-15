

function chaoHoi(){
    var danhSach = document.getElementById("thanhVien").value;
    var ketQua =0;
    if(danhSach == "member"){
        ketQua = "Người lạ ơi";
    } else if(danhSach == "dad"){
        ketQua = "Bố";
    } else if(danhSach == "mom"){
        ketQua = "Mẹ";
    } else if(danhSach =="brother"){
        ketQua = "Anh trai";
    } else{
        ketQua = "Em gái";
    }

    document.getElementById("txtMember").innerHTML = "Xin chào " + ketQua + "!";
}

document.getElementById("btnMember").onclick = chaoHoi;