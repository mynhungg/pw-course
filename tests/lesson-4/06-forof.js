// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.

// const inputArr = [1, 2, 3, 4, 3, 55, 23];
// const inputval = 3;

// for (const [index, value] of inputArr.entries()) {
//   if (value === inputval) {
//     console.log(inputArr[index - 1], inputArr[index + 1]);
//   }
// }

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”] => dua vao bai tap for

// const str = "Playwright";

// const strReverse = [];
// for (const char of str) {
//   strReverse.unshift(char);
// }

// console.log(strReverse);

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
// 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]

// const inputArr = [1, 2, 3, 4, 3, 55, 3, 23, 1];
// const uniqueArr = [];

// for (const value of inputArr) {
//   let count = 0;

//   for (const check of inputArr) {
//     if (check === value) {
//       count++;
//     }
//   }

//   if (count === 1) {
//     uniqueArr.push(value);
//   }
// }

// console.log(uniqueArr);
