// Khai báo biến giatri1, giatri2 và pt để lưu trữ các giá trị và toán tử
let giatri1;
let giatri2;

let pt;
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
     
      resultInput.value = "";
      return;
    }

    // Nếu giá trị nhấn là dấu "=", tính toán kết quả và hiển thị
    if (presedValue == '=') {
      const result = preform(giatri1, giatri2, pt);
      resultInput.value = result;
      giatri1 = "";
      giatri2 = "";
     
    } else {
      // Nếu giá trị nhấn là một toán tử khác, lưu vào biến pt
      pt = presedValue;
    }
  } else {
    // Nếu giá trị nhấn là một số
    if (pt) {
      // Nếu biến pt có giá trị, lưu giá trị vào biến giatri2
      giatri2 += presedValue;
      resultInput.value = giatri2;
    } else {
      // Nếu biến pt chưa có giá trị, lưu giá trị vào biến giatri1
      giatri1 += presedValue;
      resultInput.value = giatri1;
    }
  }
}

// Hàm thực hiện phép tính dựa trên các giá trị và toán tử được lưu trữ trong giatri1, giatri2 và pt
function preform(giatri1, giatri2, otor) {
  // Chuyển đổi giá trị giatri1 và giatri2 thành kiểu số
  number1 =Number(giatri1);
   number2 = Number(giatri2);

  // Nếu giá trị của giatri1 hoặc giatri2 không phải là số, trả về NaN
  

  // Thực hiện phép tính dựa trên toán tử và hai giá trị
  switch (otor) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
  }
}