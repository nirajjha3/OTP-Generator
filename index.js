const btn = document.querySelector(".btn");
const mainInput = document.querySelector(".main-input");
const userInput = document.querySelector(".ask-input");
const body = document.querySelector("body");

let otp = [];
function otpAns() {
    let input = userInput.value;
    otp = [];
    for(let i = 0; i < input; i++) {
        let output = Math.floor(Math.random() * 10);
        otp.push(output);
    }
    return otp;
}

function randomBackgroundColor() {
    let background = "";
    let char = Math.floor(Math.random() * 5);
    for(let i = 0; i < 5; i++) {
        switch(char) {
            case 1:
                background = "red";
                break;
            case 2:
                background = "yellow";
                break;
            case 3:
                background = "grey";
                break;
            case 4:
                background = "lightgreen";
                break;
            case 5:
                background = "blue";
                break;
        }
    }
    return background;
}

btn.addEventListener("click", () => {
    body.style.backgroundColor = randomBackgroundColor();
    mainInput.value = otpAns().join('');
});