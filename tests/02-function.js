// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
//--------------------------------------

// function calculateBMI(height, weight) {
//   let resultBMI = weight / (height * height);

//   if (resultBMI < 18.5) {
//     console.log("Underweight");
//   } else if (resultBMI >= 18.5 && resultBMI < 25) {
//     console.log("Normal");
//   } else if (resultBMI >= 25 && resultBMI < 30) {
//     console.log("Overweight");
//   } else {
//     console.log("Obese");
//   }
// }

// calculateBMI(1.7, 60); // Normal
// calculateBMI(1.7, 80); // Overweight
// calculateBMI(1.7, 100); // Obese

//===================================================
// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:

// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
//--------------------------------------

// function convertTemp(temp, type) {
//   if (type === "C") {
//     let fConverted = (temp * 9) / 5 + 32;
//     return `${temp}°C = ${fConverted}°F`;
//   } else if (type === "F") {
//     let cConverted = ((temp - 32) * 5) / 9;
//     return `${temp}°F = ${cConverted}°C`;
//   } else {
//     return "Invalid temperature type. Use 'C' or 'F'.";
//   }
// }

// console.log(convertTemp(25, "C"));
// console.log(convertTemp(77, "F"));

//===================================================
// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.
//--------------------------------------
// const numArr = [1, 2, 3];
// let sum = 0;
// numArr.forEach((item) => (sum += item));
// console.log(`Sum of array is ${sum}`);

//===================================================
// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
//--------------------------------------

// function isDivide(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function checkPrime() {
//   const primeArr = inputArr.filter(isDivide);
//   console.log(`Prime number in input array is: `);
//   primeArr.forEach((item) => console.log(item));
// }

// const inputArr = [-5, -2, 0, 1, 2, 3, 4, 5, 10, 11, 20, 23, 29, 30, 121, 97];
// checkPrime();

//===================================================
// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail
//--------------------------------------
// const userInfo = [
//   {
//     name: "Nhung",
//     email: "mynhung@gmail.com",
//   },
//   {
//     name: "Thao",
//     email: "thao@gmail.com",
//   },
// ];

// function updateEmail(name, newEmail) {
//   for (let i = 0; i < userInfo.length; i++) {
//     if (userInfo[i].name === name) {
//       userInfo[i].email = newEmail;
//     }
//   }
// }

// updateEmail("Thao", "thaotran@gmail.com");
// userInfo.forEach((item) => console.log(item));

//===================================================
// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
//--------------------------------------

// const studentScore = [
//   {
//     name: "Alex",
//     score: 85,
//   },

//   {
//     name: "Nhung",
//     score: 95,
//   },
//   {
//     name: "An",
//     score: 0,
//   },
// ];

// function caculateAvg() {
//   let sum = 0;
//   for (let i = 0; i < studentScore.length; i++) {
//     sum += studentScore[i].score;
//   }
//   let avgScore = sum / studentScore.length;
//   return avgScore;
// }

// console.log(`Student average score is: ${caculateAvg()}`);

//===================================================
//7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }
//--------------------------------------

// const productInfo = [
//   {
//     name: "banana",
//     price: 11,
//   },

//   {
//     name: "apple",
//     price: 0,
//   },
//   {
//     name: "apple meo meo",
//     price: 155.5,
//   },
// ];

// function checkGreater(item) {
//   return item.price > 0;
// }

// let isGreater = productInfo.every(checkGreater);
// if (isGreater) {
//   console.log("All products have a price greater than 0");
// } else {
//   console.log("There is at least one product with a price of 0");
// }

//===================================================
// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.
//--------------------------------------

// function isOpen(hour) {
//   if (hour < 9 || hour >= 21) {
//     return false;
//   }
//   return true;
// }

// let hourInput = 21;

// if (isOpen(hourInput)) {
//   console.log("The store is open.");
// } else {
//   console.log("The store was closed.");
// }

//===================================================
// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
//--------------------------------------

// function priceByAge(age) {
//   if (age <= 5) {
//     console.log("It's free for " + age + " years old");
//   } else if (age >= 18) {
//     console.log("The price is 100.000 VND for " + age + " years old");
//   } else {
//     console.log("The price is 50.000 VND for " + age + " years old");
//   }
// }

// priceByAge(5);
// priceByAge(18);
// priceByAge(17);

//===================================================
// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.
//--------------------------------------

// function convertMonth(month) {
//   switch (month) {
//     case 1:
//       return "January";
//     case 2:
//       return "February";
//     case 3:
//       return "March";
//     case 4:
//       return "April";
//     case 5:
//       return "May";
//     case 6:
//       return "June";
//     case 7:
//       return "July";
//     case 8:
//       return "August";
//     case 9:
//       return "September";
//     case 10:
//       return "October";
//     case 11:
//       return "November";
//     case 12:
//       return "December";
//     default:
//       return "Invalid input";
//   }
// }
// const prompt = require("prompt-sync")();

// let monthInput = Number(prompt("Input month: "));
// console.log(convertMonth(monthInput));

//===================================================
// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
// 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
//--------------------------------------

// function classifyScore(score) {
//   if (score >= 8) {
//     return "Very good";
//   } else if (score >= 6.5 && score < 8) {
//     return "Good";
//   } else if (score >= 5 && score < 6.5) {
//     return "Ordinary";
//   } else if (score < 5) {
//     return "Weak";
//   } else {
//     return "Invalid input score";
//   }
// }

// const prompt = require("prompt-sync")();
// let scoreInput = Number(prompt("Input score: "));
// console.log(`Student is classified as ${classifyScore(scoreInput)}`);

//===================================================
// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
//--------------------------------------

// function notifyWeather(temp) {
//   if (temp >= 30) {
//     return "It's hot";
//   } else if (temp >= 20 && temp < 30) {
//     return "It's cool";
//   } else if (temp < 20) {
//     return "It's cold";
//   } else {
//     return "Invalid input temperance";
//   }
// }

// const prompt = require("prompt-sync")();
// let tempInput = Number(prompt("Input temperance: "));
// console.log(`${notifyWeather(tempInput)}`);
