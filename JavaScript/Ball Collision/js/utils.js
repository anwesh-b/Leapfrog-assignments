
function collisionDetection (){
    for (let i=0 ; i<balls.length-1;i++){
        for (let j=i+1 ; j< balls.length ; j++){
            if ( distance(nextPosition(balls[i]),nextPosition(balls[j])) <= balls[i].radius + balls[j].radius  ||  distance(balls[i],balls[j]) <= balls[i].radius + balls[j].radius){
                let xmove = Math.sign(balls[i].xMovement) * Math.sign(balls[j].xMovement);
                let ymove = Math.sign(balls[i].yMovement) * Math.sign(balls[j].yMovement);
                balls[i].xMovement *= xmove;
                balls[i].yMovement *= ymove;
                balls[j].xMovement *= xmove;
                balls[j].yMovement *= ymove;
            }
        }
    }
}


function distance(a,b) { return Math.sqrt( (a.x - b.x) ** 2 + (a.y - b.y) ** 2) } 


function randomGenerator(min, max){
    return Math.random() * (max - min) + min;
}