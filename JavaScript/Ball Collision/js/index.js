let balls = [];

function draw(x,minR,maxR){
    balls = [];
    for (let i = 0;i<x; i++){
        balls[i] = new Ball(minR,maxR);
    }    
}

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    balls.forEach((ball)=>{
        ball.move();
    })
    collisionDetectionAndGenSpeed();
    balls.forEach((ball)=>{
        ball.render(); 
    })
    
}

draw(100,5,20);
animation();