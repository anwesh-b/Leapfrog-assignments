let totalBall =100;
const balls = [];

function draw(x){
    for (let i = 0;i<x; i++){
        balls[i] = new Ball();
    }    
}

draw(totalBall);

setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    balls.forEach((ball)=>{
        ball.render();
    })
},10)