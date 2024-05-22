const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const imageFour = document.querySelector(".image-4");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
//const termsBox = document.querySelector(".terms-box");
const textOne = document.querySelector(".terms-text");
const btnAcc = document.querySelector(".acc-btn");
const btnDec = document.querySelector(".dec-btn");
const blank = document.querySelector(".blank");


function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  btnYes.classList.add("hide");
  imageOne.classList.add(" hide");
  imageTwo.classList.remove("hide");
  imageThree.classList.remove("hide");
  imageFour.classList.remove("hide");
  termsBox.classList.remove("hide");
  blank.classList.add("hide");
  textOne.classList.remove("hidden");
  textOne.classList.add("shown");
  btnAcc.classList.remove("hide");
  btnDec.classList.remove("hide");

});
