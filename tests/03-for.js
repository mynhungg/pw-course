// 1. Tính tổng từ 1 đến 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9.
// for (let i = 2; i <= 9; i++) {
//   console.log(`The multiplication table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j}  = ${i * j}`);
//   }
// }

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
// const oddArr = [];
// for (let i = 1; i <= 99; i++) {
//   if (i % 2 != 0) {
//     oddArr.push(i);
//   }
// }
// oddArr.forEach((item) => console.log(item));

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
// let username = "Nhung";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${username}${i}@example.com`);
// }

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
const revenue = [
  { month: 1, total: 842 },
  { month: 2, total: 673 },
  { month: 3, total: 1054 },
  { month: 4, total: 912 },
  { month: 5, total: 787 },
  { month: 6, total: 1163 },
  { month: 7, total: 934 },
  { month: 8, total: 1201 },
  { month: 9, total: 856 },
  { month: 10, total: 998 },
  { month: 11, total: 1107 },
  { month: 12, total: 947 },
];

let totalRevenue = 0;
revenue.forEach((item) => (totalRevenue += item.total));
console.log(`Total revenue for 12 months: ${totalRevenue}`);
