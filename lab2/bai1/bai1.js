
let a = prompt("Nhập giá trị của a:");
let b = prompt("Nhập giá trị của b:");
let c = prompt("Nhập giá trị của c:");

// Chuyển đổi kiểu dữ liệu của a, b, c từ chuỗi sang số
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

// Tính delta
const delta = b * b - 4 * a * c;

// Kiểm tra và in kết quả
if (delta < 0) {
  document.write("Phương trình vô nghiệm");
} else if (delta === 0) {
  const x = -b / (2 * a);
  document.write("Phương trình có nghiệm kép x = " + x);
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  document.write("Phương trình có hai nghiệm phân biệt:<br>");
  document.write("x1 = " + x1 + "<br>");
  document.write("x2 = " + x2);
}