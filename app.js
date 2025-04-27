const colorBg = document.getElementById("color");
const btn = document.getElementById("btn");
const items = document.querySelectorAll(".info_cont > h4");
const countDownContainer = document.querySelector(".countdown")

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


let countDownDate = new Date(2026, 3, 27, 19, 56, 0).getTime()

function getCountDownTime() {
    let timeNow = new Date().getTime();


    const distinguish = countDownDate - timeNow;

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let day = Math.floor(distinguish/ oneDay);
    let hour = Math.floor((distinguish % oneDay) / oneHour)
    let minute = Math.floor((distinguish % oneHour) / oneMinute)
    let seconds = Math.floor((distinguish % oneMinute) / 1000)


    const valuesOfTime = [day, hour, minute, seconds]

    items.forEach(function (item, index){
        item.textContent = valuesOfTime[index]
    })

    if (distinguish < 0){
        clearInterval(countDownInterval)
        countDownContainer.innerHTML = '<h4> Time was run out</h4>'
    }
}

let countDownInterval= setInterval(getCountDownTime, 1000) 