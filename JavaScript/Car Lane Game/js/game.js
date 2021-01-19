const playerTop = 427;
const carHeight = 146;
const initialObs = -196;
const positionsX = [38,208,375]

let obs = [];
let gameOver = false;
let score = 0
let speed = 2;
let playerPosition = 1;

function drawRoad(){
    const road = new Image();
    road.src = './images/road.png';
    road.onload = ()=>{
        let y = 0-canvas.height;
        const autoMoveRoad =()=>{
            ctx.drawImage(road,0,y,canvas.width,canvas.height*2);
            y += speed;
            if (y>=0) y = 0-canvas.height;
            if (gameOver) return; 
            requestAnimationFrame(autoMoveRoad);
        }
        autoMoveRoad();
    }
}

function drawPlayerCar(){
    const playerCar = new Image();
    playerCar.src = './images/playerCar.png';
    playerCar.onload = ()=>{
        const renderPlayerCar = ()=>{
            ctx.drawImage(playerCar,positionsX[playerPosition]-13,playerTop,105,carHeight);
            if (gameOver) return; 
            requestAnimationFrame(renderPlayerCar);
        }
        renderPlayerCar();
    }
}

function updateScore(){
    currentScore.innerHTML = score;
    if (score > highScore.innerHTML) {
        localStorage.setItem("car-game-highscore", score);
        highScore.innerHTML = score
    };
    score = 0;
}

function moveEventLisener(x,leftKey,rightKey){
    // if(x.code === `Key${leftKey.toUpperCase()}`) if(playerPosition > 0 ) playerPosition -=1;
    // if(x.code === `Key${rightKey.toUpperCase()}`) if(playerPosition < positionsX.length-1 ) playerPosition +=1
    if(x.code === 'KeyA') if(playerPosition > 0 ) playerPosition -=1;
    if(x.code === 'KeyD') if(playerPosition < positionsX.length-1 ) playerPosition +=1
}

function setMoveEvents(){window.addEventListener('keydown',moveEventLisener)}

function manageSpeed(){
    speed *= 1.001;
    requestAnimationFrame(manageSpeed);
}

function calculateScore(){
    function scoreCalc(){
        for (obstracle of obs){
            if (obstracle.top > 572 && !obstracle.scored) {
                score++;
                obstracle.scored = true;
            }
        }
        if(gameOver) clearInterval(scoreCalc);
        requestAnimationFrame(scoreCalc);
    }
    scoreCalc();
}

function gameOverFunct(){
    window.removeEventListener('keydown',moveEventLisener);
    gameOver = true;
    updateScore();
    canvas.style.display = 'none';
    postGame.style.display = 'block';
}

function checkCollision(){
    for (obstracle of obs) 
        if(Math.abs(playerTop - obstracle.top) < carHeight && obstracle.lane === playerPosition)  gameOverFunct();
    if (gameOver) return;
    requestAnimationFrame(checkCollision);
}

function initGame(){
    obs = [];
    const obs1 = new ObstracleCar(-166);
    const obs2 = new ObstracleCar(-538);
    const obs3 = new ObstracleCar(-910);
    obs.push(obs1);
    obs.push(obs2);
    obs.push(obs3);
    drawRoad();
    drawPlayerCar();
    obs1.draw();
    obs2.draw();
    obs3.draw();
    gameOver = false;
    speed = 2;
    setMoveEvents('a','d');
    manageSpeed();
    calculateScore();
    checkCollision();
}