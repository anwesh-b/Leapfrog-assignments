//Game Constants
const height = 600;
const width = 800;
const ACCELERATION_DUE_TO_GRAVITY = 9.8;
const playableHeight = 500

//Bird Constants
const birdHeight = 40;
const birdWidth = 40;
const birdX = 100;

//Obsctravle Constants
const maxGap = 192;
const minGap = 100;
const obstraclePositions = [400, 625, 850, 1075];

canvas.height = height;
canvas.width = width;

//
let xSpeed = 2;
let gameOver = false;
let birdY = height /2;
const obs = []
let score;

function loadBird(){
    let birdNo = 0;
    const birdImg = new Image();
    function drawBird(){
        setInterval(()=>{
            birdNo = (birdNo + 1) % 3;
            birdImg.src = `./images/bird${birdNo}.png`;
    
        },100)
    
        birdImg.onload = ()=>{
            const birdAimation = ()=>{
                ctx.drawImage(birdImg,birdX,birdY,birdWidth,birdHeight);
                requestAnimationFrame(birdAimation);
            }
            birdAimation();
        }
    }

    function setMovements(){
        window.addEventListener('keydown',(x)=>{
            if(x.key == 'ArrowUp' || x.key == 'w') birdY -= 10;
            if(x.key == 'ArrowDown' || x.key == 's') birdY += 10;
        })
    }

    // function collisionDetection(){
    //     if(x.)
    // }

    setMovements();
    drawBird();
    // collisionDetection();
}

function loadBackground(){
    const bG = [new Image(),new Image(),new Image()]
    for (let i=0; i<bG.length; i++){
        bG[i].left = i * width / 2;
        bG[i].src = './images/bg.png';
        bG[i].onload = ()=>{
            const bgAnimate = ()=>{
                bG[i].left -=xSpeed/2;
                if(bG[i].left<= -1 * width / 2) bG[i].left = width;
                ctx.drawImage(bG[i],bG[i].left,0,width/2,height);
                requestAnimationFrame(bgAnimate);
            }
        bgAnimate();       
        }
    }
}

function loadBorders(){
    const borderHeight = (height - playableHeight) /2;
    const bordersTop = [new Image(),new Image(), new Image()]
    const bordersBot = [new Image(),new Image(), new Image()]
    for (let i=0; i<bordersTop.length; i++){
        bordersTop[i].left = i*width/2;
        bordersTop[i].src = './images/borderBot.png';
        bordersTop[i].onload = ()=>{
            const borderAnimate = ()=>{
                bordersTop[i].left -=xSpeed;
                if(bordersTop[i].left<= -1 * width / 2) bordersTop[i].left = width;
                ctx.drawImage(bordersTop[i],bordersTop[i].left,0,width/2,borderHeight);
                requestAnimationFrame(borderAnimate);
            }
            borderAnimate();       
        }
    }

    for (let i=0; i<bordersBot.length; i++){
        bordersBot[i].left = i*width/2;
        bordersBot[i].src = './images/borderTop.png';
        bordersBot[i].onload = ()=>{
            const borderAnimate = ()=>{
                bordersBot[i].left -=xSpeed;
                if(bordersBot[i].left<= -1 * width / 2) bordersBot[i].left = width;
                ctx.drawImage(bordersBot[i],bordersBot[i].left,borderHeight+playableHeight,width/2,borderHeight);
                requestAnimationFrame(borderAnimate);
            }
            borderAnimate();       
        }
    }
}

function loadAllAssets(){
    for (let i = 0; i<obstraclePositions.length; i++){
        obs[i] = new Obstracle(obstraclePositions[i]);          
    }
    loadBackground();
    loadBird();
    for (let i = 0; i<obstraclePositions.length; i++){
        obs[i].draw();          
    }
    loadBorders();
}


function calculateScore(){
    for (let checkobs of obs){
        if (!checkobs.isScored && checkobs.left < birdX - 40 ){
            checkobs.isScored = true;
            score++;
        }
    }
    requestAnimationFrame(calculateScore)
}

function init(){
    loadAllAssets();
    score = 0;
    calculateScore();
}

init();
