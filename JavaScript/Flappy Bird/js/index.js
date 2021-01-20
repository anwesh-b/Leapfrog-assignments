const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const preGame = document.getElementsByClassName('pre-game')[0];
const postGame = document.getElementsByClassName('post-game')[0];
const restart = document.getElementsByClassName('restart')[0];

const scoreDOM = document.getElementById('current-score');
const highscoreDOM = document.getElementById('high-score');

function gameStart(){
    preGame.style.display = 'none';
    postGame.style.display = 'none';
    restart.style.display = 'block';
    init();
}

function gameEnd(){
    if(score > highScore) {
        highScore = score;
        localStorage.setItem("flappy-bird-highscore", score);
    }
    preGame.style.display = 'none';
    postGame.style.display = 'block';
    restart.style.display = 'none';
    scoreDOM.innerHTML = score || 0;
    highscoreDOM.innerHTML = highScore || 0;
}