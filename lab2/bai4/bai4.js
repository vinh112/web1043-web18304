let daysOfWeek = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới vào mảng
daysOfWeek.push("Mon", "Wed", "Fri", "Sun");

// Tìm index của phần tử "Nine" và xóa nó
let index = daysOfWeek.indexOf("Nine");
if (index !== -1) {
  daysOfWeek.splice(index, 1);
}

// Sắp xếp mảng theo thứ tự đúng
daysOfWeek.sort(function(a, b) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.indexOf(a) - days.indexOf(b);
});

console.log(daysOfWeek); // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
document.write(daysOfWeek)