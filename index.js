const card = document.getElementById("card")

const iconTop = document.querySelector(".icon1");

const number = document.querySelector(".number");

const iconBot = document.querySelector(".icon2");

function actionCardNumber() {

    let numbersArray = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    let generateNumber = Math.floor(Math.random() * 13);

    number.textContent = numbersArray[generateNumber];
}

function actionIcon() {

    let iconString = ["♦","♥","♠","♣"];

    let generateNumber = Math.floor(Math.random() * 4);

    iconTop.textContent = iconString[generateNumber];
    iconBot.textContent = iconString[generateNumber];

    if(iconString[generateNumber] == "♥" || iconString[generateNumber] == "♦"){
        
        iconTop.style.color = "red";
        iconBot.style.color = "red";
        
    } else {
        
        iconTop.style.color = "black";
        iconBot.style.color = "black";
    }

}

card.addEventListener("click", actionCardNumber)

card.addEventListener("click", actionIcon)

card.addEventListener("load", actionCardNumber())

card.addEventListener("load", actionIcon())

