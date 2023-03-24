
// Tính điểm trung bình bằng lệnh if else
function ifelse() {
  //nhập điểm
    let toan = parseFloat(prompt("Nhập điểm toán: "));
    let ly = parseFloat(prompt("Điểm môn Lý: "));
    let hoa = parseFloat(prompt("Điểm môn Hóa: "));
    let sinh = parseFloat(prompt("Điểm môn Sinh: "));
  //kiểm tra điểm đã hợp lý/
    if (toan < 0 || toan > 10 || 
      ly < 0 || ly > 10 || 
      hoa < 0 || hoa > 10 || 
      sinh < 0 || sinh > 10) {
      
        console.log("Đã nhập sai điểm");
      return;
    }
  
    let diemTrungBinh = (toan + ly + hoa + sinh) / 4.0;
    console.log("Diem trung binh la: " + diemTrungBinh);
  
    if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
      console.log("Xep loai: Gioi");
    } else if (diemTrungBinh >= 7 && diemTrungBinh < 9) {
      console.log("Xep loai: Kha");
    } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
      console.log("Xep loai: Trung binh");
    } else {
      console.log("Xep loai: Yeu");
    }
  }
  //  Tính điểm trung bình bằng lệnh swichcase
  function swichcase() {
    //nhập điểm
    let toan = parseFloat(prompt("Nhập điểm toán: "));
    let ly = parseFloat(prompt("Điểm môn Lý: "));
    let hoa = parseFloat(prompt("Điểm môn Hóa: "));
    let sinh = parseFloat(prompt("Điểm môn Sinh: "));
  //kiểm tra điểm đã hợp lý/
    if (toan < 0 || toan > 10 || 
      ly < 0 || ly > 10 || 
      hoa < 0 || hoa > 10 || 
      sinh < 0 || sinh > 10) {
      
        console.log("Đã nhập sai điểm");
      return;
    }
  
    let diemTrungBinh = (toan + ly + hoa + sinh) / 4.0;
    console.log("Diểm trung bình là: " + diemTrungBinh);
    
    switch (true) {
      
      case diemTrungBinh >= 9 && diemTrungBinh <= 10:
        console.log("Xếp loại Học Lực : Giỏi");
        break;
      case diemTrungBinh >= 7 && diemTrungBinh < 9:
        console.log("Xếp loại Học Lực: Khá");
        break;
      case diemTrungBinh >= 5 && diemTrungBinh < 7:
        console.log("Xếp loại Học Lực: Trung Bình");
        break;
      default:
        console.log("Xếp loại Học Lực: Yếu");
        break;
    }
  }
  