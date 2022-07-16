// const rand = Math.floor(Math.random() * 10 +1);
// console.log(rand);

const number = document.querySelector(".number")
const btn = document.querySelector(".generate")

const generateNumber = () => {
    // generate number btn to 100
    const randomNumber =  Math.floor(Math.random() * 50 + 1);
    number.innerHTML = randomNumber;

};

btn.addEventListener("click", generateNumber);


generateNumber();

