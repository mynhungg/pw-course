//1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

// const animal = { name: "Mimi cat", age: 3 };

// for (const property in animal) {
//   console.log(`${property}=${animal[property]}`);
// }

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
// const jobIT = {
//   role: "frontend dev",
//   age: 20,
//   salary: 1000,
// };
// let sum = 0;
// for (const property in jobIT) {
//   if (typeof jobIT[property] === "number") {
//     sum += jobIT[property];
//   }
// }
// console.log(sum);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]

// const employeeObj = {
//   name: "Jane",
//   age: 23,
//   salary: 1500,
// };

// const employeeArr = [];
// for (const property in employeeObj) {
//   employeeArr.push(property);
// }

// console.log(employeeArr);
