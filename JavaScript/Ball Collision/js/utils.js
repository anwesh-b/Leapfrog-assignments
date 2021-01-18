
function collisionDetection (){
    for (let i=0 ; i<balls.length-1;i++){
        for (let j=i+1 ; j< balls.length ; j++){
            if ( distance(nextPosition(balls[i]),nextPosition(balls[j])) <= balls[i].radius + balls[j].radius  ||  distance(balls[i],balls[j]) <= balls[i].radius + balls[j].radius){
                let xmove = Math.sign(balls[i].xMovement) * Math.sign(balls[j].xMovement);
                let ymove = Math.sign(balls[i].yMovement) * Math.sign(balls[j].yMovement);
                let temp1 = balls[i].xMovement;
                let temp2 = balls[j].xMovement;
                balls[i].xMovement = getSpeed(i,j,temp1,temp2) * xmove;
                balls[j].xMovement = getSpeed(j,i,temp2, temp1) * xmove;
                temp1 = balls[i].yMovement;
                temp2 = balls[j].yMovement;
                balls[i].yMovement = getSpeed(i,j,temp1,temp2) * ymove;
                balls[j].yMovement = getSpeed(j,i,temp2, temp1) * ymove;
            }
        }
    }
}


function getSpeed(i,j,temp1,temp2){
    return ((temp1 *(balls[i].mass - balls[j].mass)) + (2 * balls[j].mass * temp2)) / (balls[i].mass + balls[j].mass);
}

function distance(a,b) { return Math.sqrt( (a.x - b.x) ** 2 + (a.y - b.y) ** 2) } 


function randomGenerator(min, max){
    return Math.random() * (max - min) + min;
}