let daysOfWeek = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử vào mảng
daysOfWeek.unshift("Mon");
daysOfWeek.splice(2, 0, "We");
daysOfWeek.splice(5, 0, "Fri", "Sun");

// Xóa phần tử "Nine" khỏi mảng
daysOfWeek.splice(3, 1);

console.log(daysOfWeek); // Kết quả: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
