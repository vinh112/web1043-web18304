//nhập a b c
let a = parseInt(prompt("Mời nhập a"));
let b = parseInt(prompt("Mời nhập b"));
let c = parseInt(prompt("Mời nhập c"));


//chuyển đổi kiểu dữ liêuj sang kiểu số
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

//kiêm tra và in ra
if (a + b > c && b + c > a && a + c > b) {
    if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
        document.write('Đây là 1 tam giác vuông');

    } else if (a == b && b == c) {
        document.write("Đây là  1 tam giác cân");
    } else {
        document.write("Đây là 1 tam giác thường");
    }

} else {
    document.write("3 cạnh a,b,c không phải là ba cạnh của một tam giác!");

}
