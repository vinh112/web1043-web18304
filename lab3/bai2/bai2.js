// Khai báo biến giatri1, giatri2 và pt để lưu trữ các giá trị và toán tử
let giatri1 = "";
let giatri2 = "";
let pt = "";


// Hàm được gọi khi nhấn vào một nút trên bàn phím
function giatritruyenvao(buton) {
  // Lấy giá trị được hiển thị trên nút được nhấn
  const presedValue = buton.innerText;
  // Lấy phần tử input để hiển thị kết quả tính toán
  const resultInput = document.getElementById('resultInput');

  // Nếu giá trị nhấn là một toán tử
  if (isNaN(presedValue)) {
    // Nếu giá trị nhấn là nút "C" (Clear), xóa toàn bộ giá trị và trả về
    if (presedValue == 'C') {
      giatri1 = "";
      giatri2 = "";
      pt = "";
      resultInput.value = "";
      return;
    }

    // Nếu giá trị nhấn là dấu "=", tính toán kết quả và hiển thị
    if (presedValue == '=') {
      const result = preform(giatri1, giatri2, pt);
      resultInput.value = result;
      giatri1 = result;
      giatri2 = "";
      pt = "";
      return;
    }

    // Nếu giá trị nhấn là một toán tử (+, -, *, /), lưu giá trị vào biến pt
    pt = presedValue;

    // Nếu giá trị giatri1 chưa tồn tại, lưu giá trị hiện tại vào giatri1
    if (!giatri1) {
      giatri1 = resultInput.value;
      resultInput.value = "";
    }
  } else {
    
    if (!pt) {
      giatri1 += presedValue;
      resultInput.value = giatri1;
    } else {
      giatri2 += presedValue;
      resultInput.value = giatri2;
    }
  }
  // Hàm thực hiện phép tính toán
function preform(a, b, operator) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

}
