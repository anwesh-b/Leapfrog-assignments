const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.height = 600;
canvas.width = 500;

const preGame = document.getElementsByClassName('pre-game')[0];
const postGame = document.getElementsByClassName('post-game')[0];
const playBtn = document.getElementsByClassName('play');

const currentScore = document.getElementById('points current');
const highScore = document.getElementById('points highest');

const bulletAvailable = document.getElementsByClassName("bullet")[0];
const scoreCard = document.getElementsByClassName('score')[0];
const scoreCardValue = document.getElementById('score points');

if (localStorage.getItem("car-game-highscore")) highScore.innerHTML = localStorage.getItem("car-game-highscore");

for (let btn of playBtn){
    btn.addEventListener('click',()=>{
        preGame.style.display = 'none';
        postGame.style.display = 'none';
        canvas.style.display = 'block';
        initGame();
    })
}