// 1. Khởi động tàu vũ trụ
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ E101";
let crew = [
  "An Nguyen",
  "Thúy Ngân",
  "Mỹ Nhung",
  "Huy Hoàng",
  "Hải Yến",
  "Huy Vo",
  "Lâm Phượng",
  "Nam Nguyen",
  "Ngoc Le",
  "Nguyễn Hiền",
  "Phan Thu",
  "Rachel Le",
];

function launchShip(crew) {
  console.log("Chuẩn bị khởi động! Phi hành đoàn gồm:");
  crew.forEach((element) => {
    console.log(element);
  });

  console.log(`sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}.`);
}
launchShip(crew);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  return speed * time;
}

let speed = 1000;
let time = 24;
let caculatedDistance = calculateDistance(speed, time);

console.log("Khoảng cách đến hành tinh bí ẩn là " + caculatedDistance);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexadecimalNumber = time.toString(16);
  return hexadecimalNumber;
}

let timeDecimal = 120;
let timeHexadecimal = convertTimeToHex(timeDecimal);
console.log("Thời gian trên hành tinh là ", timeHexadecimal);

//4. Khám phá kho báu
function decryptCode(code) {
  let decrypted = "";
  for (let character of code) {
    if (character === character.toLowerCase()) {
      decrypted += character.toUpperCase();
    } else {
      decrypted += character.toLowerCase();
    }
  }
  return decrypted;
}

let decryptText = "E101 Challenge";
let decryptedCode = decryptCode(decryptText);
console.log(`Mật mã của kho báu là ${decryptedCode}`);

//5. Trở về Trái Đất
function returnToEarth() {
  console.log(`Chuẩn bị trở về ${departurePlanet}!`);
}

returnToEarth();
