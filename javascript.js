// I/p elements
// take input buttons

let rulePopUpElement = document.getElementById('rule-popup');
// button elements
const rockBtnElement = document.getElementById('rock');
const paperBtnElement = document.getElementById('paper');
const scissorsBtnElement = document.getElementById('scissors');
const userSelectedButton = document.getElementById('user-choice-btn');
const userSelectedButtonImage = document.getElementById('user-choice-btn-img');
const computerSelectedButton = document.getElementById('comp-choice-btn');
const computerSelectedButtonImage = document.getElementById('comp-choice-btn-img');
const playagainBtn = document.querySelector('.play-again');
//result container
let userchoiceElement = document.querySelector('#user-choice-btn');
let computerchoiceElement = document.querySelector('#comp-choice-btn');
let resultElement = document.querySelector('.result-content');
console.log(paperBtnElement);
//containers to display
const playgroundElement = document.querySelector('.playground');
const resultContainerElement = document.querySelector('.result-container');
const scoreValueElement = document.querySelector('.score-value');

//global variable
let weaponsArray = ['rock','paper','scissors'];
let computerGeneratedValue;
let resultContent;
let winContent = `YOU WIN`;
let lossContent = `YOU LOSE`;
let drawContent = `MATCH DRAW`;
let score = 0;


// function to open and close
function openpopup(){
  rulePopUpElement.style.display = 'block';
}

function closepopup(){
  rulePopUpElement.style.display = 'none';
}

// logic
/* Steps to solve it!!!
1. I/p from user.
2. Computer generated random o/p. -->done
3. Compare user vs comp.
4. Results
*/


// 1. I/p from user.

// 2. comp generated random o/p
const compGenerated = function(){
  let randomNumber = Math.trunc(Math.random()*3);
  return(weaponsArray[randomNumber]);
}
computerGeneratedValue = compGenerated();
console.log(computerGeneratedValue);


// 3. user vs computer
const result = function(val){
  computerGeneratedValue = compGenerated();
  if(val === 'rock'){
    if(computerGeneratedValue === 'scissors'){
      resultContent = winContent;
      score++;
    }else if(computerGeneratedValue === 'rock'){
      resultContent = drawContent;
    }else{
      resultContent = lossContent;
    }
  }else if(val === 'paper'){
    if(computerGeneratedValue === 'scissors'){
      resultContent = lossContent;
    }else if(computerGeneratedValue === 'rock'){
      resultContent = winContent;
      score++;
    }else{
      resultContent = drawContent;
    }
  }else{
    if(computerGeneratedValue === 'scissors'){
      resultContent = drawContent;
    }else if(computerGeneratedValue === 'rock'){
      resultContent = lossContent;
    }else{
      resultContent = winContent;
      score++;
    }
  }
  console.log(`user generated is ${val} comp is ${computerGeneratedValue} result is ${resultContent}`);
  displayResult(val,computerGeneratedValue,score);

}

// result
function displayResult(userValue,computerValue,score){
  playgroundElement.style.display = "none";
  resultContainerElement.style.display = 'flex';
  resultElement.innerText = resultContent;
  scoreValueElement.innerText = score;
  userImageBtn(userValue);
  computerImageBtn(computerValue);
}

function computerImageBtn(computerValue){
  const computerSelectedBtnList = computerSelectedButton.classList;
  if(computerValue === 'rock'){
    if(computerSelectedBtnList.contains("resultWeaponScissors")){
      computerSelectedButton.classList.remove("resultWeaponScissors");
    }else if(computerSelectedBtnList.contains("resultWeaponPaper")){
      computerSelectedButton.classList.remove("resultWeaponPaper");
    }
    computerSelectedButton.classList.add('resultWeaponRock');
    computerSelectedButtonImage.src = './images/icon-rock.svg';
    console.log(computerSelectedButton)
  }else if(computerValue === 'scissors'){
    if(computerSelectedBtnList.contains("resultWeaponRock")){
      computerSelectedButton.classList.remove("resultWeaponRock");
    }else if(computerSelectedBtnList.contains("resultWeaponPaper")){
      computerSelectedButton.classList.remove("resultWeaponPaper");
    }
    computerSelectedButton.classList.add('resultWeaponScissors');
    computerSelectedButtonImage.src = './images/icon-scissors.svg';
    console.log(computerSelectedButtonImage);
    console.log(computerSelectedButton);
  }else{
    if(computerSelectedBtnList.contains("resultWeaponRock")){
      computerSelectedButton.classList.remove("resultWeaponRock");
    }else if(computerSelectedBtnList.contains("resultWeaponScissors")){
      computerSelectedButton.classList.remove("resultWeaponScissors");
    }
    computerSelectedButton.classList.add('resultWeaponPaper');
    computerSelectedButtonImage.src = './images/icon-paper.svg';
    console.log(computerSelectedButtonImage);
    console.log(computerSelectedButton);
  }
}

function userImageBtn(userValue){
  const userSelectedBtnList = userSelectedButton.classList;
  if(userValue === 'rock'){
    if(userSelectedBtnList.contains("resultWeaponScissors")){
      userSelectedButton.classList.remove("resultWeaponScissors");
    }else if(userSelectedBtnList.contains("resultWeaponPaper")){
      userSelectedButton.classList.remove("resultWeaponPaper");
    }
    userSelectedButton.classList.add('resultWeaponRock');
    userSelectedButtonImage.src = './images/icon-rock.svg';
    console.log(userSelectedButtonImage);
  }else if(userValue === 'scissors'){
    if(userSelectedBtnList.contains("resultWeaponRock")){
      userSelectedButton.classList.remove("resultWeaponRock");
    }else if(userSelectedBtnList.contains("resultWeaponPaper")){
      userSelectedButton.classList.remove("resultWeaponPaper");
    }
    userSelectedButton.classList.add('resultWeaponScissors');
    userSelectedButtonImage.src = './images/icon-scissors.svg';
    console.log(userSelectedButtonImage);
  }else if(userValue === 'paper'){
    if(userSelectedBtnList.contains("resultWeaponRock")){
      userSelectedButton.classList.remove("resultWeaponRock");
    }else if(userSelectedBtnList.contains("resultWeaponScissors")){
      userSelectedButton.classList.remove("resultWeaponScissors");
    }
    userSelectedButton.classList.add('resultWeaponPaper');
    userSelectedButtonImage.src = './images/icon-paper.svg';
    console.log(userSelectedButton);
  }
}

// event listeners for playagain
playagainBtn.addEventListener('click',()=>{
  playgroundElement.style.display = "flex";
  resultContainerElement.style.display = 'none';
})
