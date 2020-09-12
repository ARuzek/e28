const startDialog = document.querySelector("#start");
const endDialog = document.querySelector("#end");
const imDoneWithThisGame = document.getElementById("imDone");
const iWantToPlayAgain = document.getElementById("playAgain");

const firstTree = document.getElementById("tree1");
const secondTree = document.getElementById("tree2");
const thirdTree = document.getElementById("tree3");
const fourthTree = document.getElementById("tree4");
const person = document.getElementById("person");

const nature = document.querySelector("span");
let natureCount = 0;

window.onload = function () {
  startDialog.showModal();
};
startDialog.addEventListener("click", startGame);
imDoneWithThisGame.addEventListener("submit", endGame);
iWantToPlayAgain.addEventListener("submit", startGame);

function startGame() {
  preventDefault();
  if (endDialog.open) {
    location.reload();
    startDialog.close();
  } else {
    startDialog.close();
  }
}

function endGame() {
  preventDefault();
  endDialog.showModal();
}

document.addEventListener("keyup", movePerson);
let personLocation = 0;
function movePerson() {
  if (key == "ArrowLeft") {
    personLocation = personLocation - 20;
    person.style.left = personLocation + "px";
    console.log(person.x);
  } else if (key == "ArrowRight") {
    personLocation = personLocation + 20;
    person.style.left = personLocation + "px";
    console.log(person.x);
  } else if (code === "Space") {
    discover(firstTree);
    discover(secondTree);
    discover(thirdTree);
    discover(fourthTree);
  } else {
    return;
  }
}

function discover(tree) {
  let treeLocation = tree.x;
  let personLocation = person.x;
  if (personLocation < treeLocation + 100 && personLocation > treeLocation) {
    shakeTree(tree);
  }
}

function shakeTree(tree) {
  tree.classList.add("treeShake");
  natureCount++;
  nature.innerHTML = natureCount;
  setTimeout(function stopShaking() {
    tree.classList.remove("treeShake");
  }, 3000);
}
