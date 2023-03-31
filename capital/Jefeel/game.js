import countryList from './capital.js';

//먼저 선언할 변수들

let arr = [];
let copyArr = [];
let randomNumber;
let count=0;
let correct=document.querySelector('#correct');
let quizAnswerCheck = document.querySelector('.quizAnswerCheck')
let openAnswer = document.querySelector('#openAnswer');

const $quizCountry = document.querySelector('.country');
const $answer = document.querySelector('#answerText');
const $button = document.querySelector('#answerCheck');
const $nextButton = document.querySelector('#nextQuiz');
let quizCapital;

function random(){
  //arr 배열에 countryList의 길이만큼의 숫자를 저장
  for(let i=0;i<countryList.length;i++){
    arr[i] = i;
  }
    // console.log(arr);
  while (copyArr.length < 10) { //copyArr 길이가 10이면 추가를 멈춤
    randomNumber = Math.floor(Math.random() * countryList.length);
    if (copyArr.includes(randomNumber)) continue; //
    copyArr.push(arr[randomNumber]); 
  }

  // console.log(copyArr);
  //인덱스로 쓰일 숫자들이 copyArr에 저장됨
}

//문제 설정
function setQuestion() {
  
  console.log(count);
  if(count>9){
    $button.disabled=true;
    $nextButton.disabled=true;
    openAnswer.classList.add('bg');
    openAnswer.classList.add('end');
    return openAnswer.innerHTML=`게임 끝!<br>다시 하려면<br> [다시] 버튼을 눌러주세요`;
  }
  count++;
  const quizIdx = copyArr[copyArr.length - 1]; 
  const quiz = countryList[quizIdx];
  $quizCountry.textContent = quiz.country;

  quizCapital = quiz.capital;
  console.log(quizCapital);
}



//확인 버튼 누를때
function answerCheck(){
  quizAnswerCheck.classList.add('out');
  quizAnswerCheck.classList.add('bg');
  $nextButton.style.display="block";
  $button.disabled=true;

  if ($answer.value === quizCapital) {
    // alert("정답~~");
    openAnswer.innerHTML = `정답~~`;
    correct.textContent++;
  } else {
    // alert("땡!!\n정답은 " + quizCapital);
    openAnswer.innerHTML= `땡! 정답은&nbsp;<span style="color: red">${quizCapital}</span>`;  
    // console.log("땡!!\n정답은 "+ quizCapital);
  }
  
  copyArr.pop();
  // console.log(quizCapital);   
};


function showAnswer(){
  quizAnswerCheck.classList.remove('out');
  quizAnswerCheck.classList.remove('bg');
  $nextButton.style.display="none";

  $button.disabled=false;
  openAnswer.innerHTML='';
  setQuestion();  
  $answer.value = '';
  $answer.focus();
  
  }

  //다음 문제 넘어가는 함수, button 누르면 out 속성 해제



  random();
  setQuestion();
  
  $button.addEventListener('click', answerCheck);
  $nextButton.addEventListener('click', showAnswer);

  