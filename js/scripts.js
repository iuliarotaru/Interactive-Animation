let startbutton = document.querySelector(".startbutton");
let man = document.getElementById("man");
let cactus = document.querySelector("#cactus");
let bird = document.getElementById("bird");
let cloud = document.querySelector("#cloud");
let mancontainer = document.querySelector("#mancontainer");
let blowingSound = document.querySelector("#blowing");
let dylanSong = document.querySelector("#bobdylan");

startbutton.addEventListener("click", storyStart);

function storyStart() {
  man.classList.remove("objectHidden");
  man.classList.add("objectDisplay");
  mancontainer.classList.remove("objectHidden");
  mancontainer.classList.add("objectDisplay");
  man.classList.add("manWalkingIn");
  mancontainer.classList.remove("manContainerMoving");
  dylanSong.play();
  startbutton.classList.add("objectHidden");
}
cactus.addEventListener("mouseover", glow);

function glow() {
  cactus.classList.add("glow");
}

cactus.addEventListener("mouseout", glowOut);

function glowOut() {
  cactus.classList.remove("glow");
}

cactus.addEventListener("click", shake);

function shake() {
  cactus.classList.remove("glow");
  cactus.classList.add("shake");
  cactus.addEventListener("animationend", birdFlyAway);
}

function birdFlyAway() {
  bird.classList.add("fly");
}

man.addEventListener("animationend", glowMan);

function glowMan() {
  man.classList.add("glow");
}

man.addEventListener("click", memeAp);

function memeAp() {
  cloud.classList.remove("objectHidden");
  cloud.classList.add("objectDisplay");
  blowingSound.play();
  blowingSound.addEventListener("ended", glowCloud);
}

function glowCloud() {
  cloud.classList.add("glow");
}

cloud.addEventListener("click", zoom);

function zoom() {
  cloud.classList.add("zoom");
  cloud.addEventListener("animationend", memorySceneDisplays);
}

let flowers = document.querySelector("#flowers");
let candy = document.querySelector("#candies");
let gift = document.querySelector("#gift");
let girl = document.querySelector("#girl");
let sheriff = document.querySelector("#sheriff");
let luke = document.querySelector("#luke");
let memoryScene = document.querySelector("#memoryscenewrapper");

function memorySceneDisplays() {
  memoryScene.classList.remove("objectHidden");
  memoryScene.classList.add("objectDisplay");
}

luke.addEventListener("animationend", girlAppears);

function girlAppears() {
  luke.classList.remove("lukeWalkingIn");
  luke.classList.add("lukeDefault");
  girl.classList.remove("objectHidden");
  girl.classList.add("objectDisplay");
  girl.classList.add("girlDefault");
  setTimeout(lukeInLove, 2000);
}

function lukeInLove() {
  luke.classList.remove("lukeDefault");
  luke.classList.add("lukeInLove");
  setTimeout(gifts, 3000);
}

function gifts() {
  flowers.classList.remove("objectHidden");
  flowers.classList.add("objectDisplay");
  flowers.classList.add("flowersClickable");
  gift.classList.remove("objectHidden");
  gift.classList.add("objectDisplay");
  candy.classList.remove("objectHidden");
  candy.classList.add("objectDisplay");
}

flowers.addEventListener("click", giveFlowersToGirl);

function giveFlowersToGirl() {
  flowers.classList.add("flowersToGirl");
  flowers.addEventListener("animationend", candiesClickable);
}
function candiesClickable() {
  candy.classList.remove("candiesNotClickable");
  candy.classList.add("candiesClickable");
}

candy.addEventListener("click", giveCandyToGirl);

function giveCandyToGirl() {
  candy.classList.add("candyToGirl");
  setTimeout(giftClickable, 1000);
}

function giftClickable() {
  gift.classList.remove("giftNotClickable");
  gift.classList.add("giftClickable");
}

gift.addEventListener("click", giveGiftToGirl);

function giveGiftToGirl() {
  gift.classList.add("giftToGirl");
  setTimeout(sheriffAppears, 4000);
}
gift.addEventListener("animationend", sheriffAppears);

function sheriffAppears() {
  sheriff.classList.remove("objectHidden");
  sheriff.classList.add("objectDisplay");
  sheriff.classList.add("sheriffDefault");
  setTimeout(girlInLove, 1000);
}

function girlInLove() {
  girl.classList.remove("girlDefault");
  girl.classList.add("girlInLove");
  setTimeout(girlAway, 1000);
}

function girlAway() {
  girl.classList.remove("girlInLove");
  girl.classList.remove("objectDisplay");
  girl.classList.add("objectHidden");
  sheriff.classList.add("sheriffWithGirl");
  setTimeout(sheriffRidesAway, 2000);
}

function sheriffRidesAway() {
  sheriff.classList.remove("sheriffWithGirl");
  sheriff.classList.add("sheriffAway");
  setTimeout(lukeHeartBroken, 1000);
}

function lukeHeartBroken() {
  luke.classList.remove("lukeInLove");
  luke.classList.add("lukeHeartBroken");
  luke.addEventListener("animationend", sunsetScenePlaying);
}

let sunsetScene = document.querySelector("#sunsetScene");
let manInSunset = document.getElementById("manInSunset");

function sunsetScenePlaying() {
  memoryscene.classList.remove("objectDisplay");
  memoryscene.classList.add("objectHidden");
  cloud.classList.add("objectHidden");
  sunsetScene.classList.remove("objectHidden");
  sunsetScene.classList.add("objectDisplay");
  setTimeout(moveOut, 1000);
}

function moveOut() {
  manInSunset.classList.add("moveOut");
}
