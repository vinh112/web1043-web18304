
//nhập tên vs gới tính
let hvt = prompt(' Họ và tên:');
let gt = prompt(' Giới tính (nam / nữ):');


//tách thành phần tên
let arr = hvt.split(" ");

let ho = arr[0];
let tenDem = arr.slice(1, arr.length - 1).join(" ");
let ten = arr[arr.length - 1];

//in ra 
console.log('Họ:' + ho);
console.log('Tên đệm :' + tenDem);
console.log('Tên: ' + ten);


//Thay đổi tên theo giới tính
let tenMoi;
if (gt === "nam") {
    arr.splice(1, 1, "Văn");
    tenMoi = "Văn";

} else if (gt === "nữ") {
    arr.splice(1, 1, "Vẽ");
    tenMoi = "Vẽ";
} else {
    console.log("Không xác định giới tính ");
}

//in tên mới
console.log("Tên mới:" + ho + " " + tenMoi + " " + ten);