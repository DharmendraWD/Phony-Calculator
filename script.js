// Created on: 05/23

var loadContentButton = document.querySelector('#loadContentButton');
let lockScreenImg = document.querySelector('.lockScreen img')
let totalDark = document.querySelector('.tDark img')
let partialDark = document.querySelector(".pDark img")
let screen = document.querySelector("#screen")
let claculatorSubContainer = document.querySelector(".claculatorSubContainer")

let ddm = document.querySelector(".timeAndDate p")
let liveTime = document.querySelector(".timeAndDate h1")
let liveTimeAndDateParent = document.querySelector(".timeAndDate")




loadContentButton.addEventListener('click', (e) => {
  lockScreenImg.classList.toggle("unshowOp")
  totalDark.classList.toggle("unshowOp")
  if (lockScreenImg.classList.contains("unshowOp")) {
    totalDark.classList.remove("unshowOp")
    totalDark.classList.add("showOp")
  }

  if(!lockScreenImg.classList.contains("unshowOp")){
    liveTimeAndDateParent.classList.remove("unshowOp");
    liveTimeAndDateParent.classList.add("showOp");
    liveTimeAndDateParent.style.zIndex="12"
  }
  else{
    liveTimeAndDateParent.classList.remove("showOp");
    liveTimeAndDateParent.classList.add("unshowOp");
    liveTimeAndDateParent.style.zIndex=""
  }
  partialDark.style.zIndex = '0';

  // This line is for: If lockScreen is appearing then 
  // increase it's zIndex because we have to click on 
  // Lockscreen to open calculator.
  if (totalDark.classList.contains("unshowOp")) {
    lockScreenImg.style.zIndex = '5';
  } else {
    lockScreenImg.style.zIndex = '';
  }
  if (partialDark.classList.contains("showOp")) {
    // partialDark.classList.remove("showOp") 
    partialDark.classList.add("unshowOp")
    lockScreenImg.classList.add("showOp")
    console.log("pp")
  }
  // To Hide Calculator when Power Button is pressed 
  claculatorSubContainer.classList.add("unshowOp");
})

// LockScreen Logic 
lockScreenImg.addEventListener("click", (e) => {
  lockScreenImg.classList.toggle("unshowOp")

  // TO REMOVE TIME AND DATE AFTER CLICKING ON LOCK SCREEN 
  liveTimeAndDateParent.classList.remove("showOp");
  liveTimeAndDateParent.classList.add("unshowOp");
  liveTimeAndDateParent.style.zIndex=""

  if (lockScreenImg.classList.contains("unshowOp")) {
    lockScreenImg.style.zIndex = '0';
    partialDark.style.zIndex = '4';
    partialDark.classList.remove("unshowOp")
    partialDark.classList.add("showOp")
  }
  else {
    lockScreenImg.style.zIndex = '';
  }
  claculatorSubContainer.classList.remove("unshowOp");
})

// Input show on above calculator 
function valueButton(e) {
  screen.value += e.value;
}

// FUnction for Calculator 
function calCalculate() {
  if (screen.value == '') {
    alert("Kindly Enter the Operand First.")
  }
  else if (screen.value == isNaN) {
    alert('Sorry, Needs Number to Perform ')
  }
  else
    screen.value = eval(screen.value)

}

// Clear the Result when User Press "C" 
function clearScreen() {
  screen.value = null;
}


// DATE TIME DAY | ON LOCK SCREEN
// TODAY | DATE | MONTH_NAME
const today = new Date();
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth();

// LIVE TIME ZONE
const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();


const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


ddm.innerHTML = `${dayOfWeek[day]}, ${date} ${monthOfYear[month]}`;
liveTime.innerHTML = ` ${hour}:${min}`;
