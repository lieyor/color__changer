const colorBg = document.getElementById("color");
const btn = document.getElementById("btn");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", () => {
    let hexColor = generateColor()
    document.body.style.backgroundColor = hexColor
    colorBg.textContent = hexColor
});

function generateColor() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    return hexColor
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}