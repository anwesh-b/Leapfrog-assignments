
function collisionDetectionAndGenSpeed(){
    for (let i=0 ; i<balls.length-1;i++){
        for (let j=i+1 ; j< balls.length ; j++){
            if ( distance(nextxPosition(balls[i]), nextyPosition(balls[i]), nextxPosition(balls[j]), nextyPosition(balls[j])) <= balls[i].radius + balls[j].radius  ||  distance(balls[i].coordinate.x, balls[i].coordinate.y,balls[j].coordinate.x,balls[j].coordinate.y) <= (balls[i].radius + balls[j].radius)){
                let xmove = Math.sign(balls[i].xMovement) * Math.sign(balls[j].xMovement);
                let ymove = Math.sign(balls[i].yMovement) * Math.sign(balls[j].yMovement);
                let temp1 = balls[i].xMovement;
                let temp2 = balls[j].xMovement;
                balls[i].xMovement = getSpeed(i,j,temp1,temp2) * xmove * -1;
                balls[j].xMovement = getSpeed(j,i,temp2, temp1) * xmove * -1;
                temp1 = balls[i].yMovement;
                temp2 = balls[j].yMovement;
                balls[i].yMovement = getSpeed(i,j,temp1,temp2) * ymove * -1;
                balls[j].yMovement = getSpeed(j,i,temp2, temp1) * ymove * -1;
            }
        }
    }
}

function getSpeed(i,j,temp1,temp2){
    return ((temp1 *(balls[i].mass - balls[j].mass)) + (2 * balls[j].mass * temp2)) / (balls[i].mass + balls[j].mass);
}

function distance(x1, y1, x2, y2) { 
    return Math.sqrt( (x1 - x2) ** 2 + (y1 - y2) ** 2) 
} 


function randomGenerator(min, max){
    return Math.random() * (max - min) + min;
}