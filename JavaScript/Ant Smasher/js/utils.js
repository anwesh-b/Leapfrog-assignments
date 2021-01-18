
function collisionDetectionAndGenSpeed(){
    for (let i=0 ; i<ants.length-1;i++){
        for (let j=i+1 ; j< ants.length ; j++){
            if ( distance(nextxPosition(ants[i]), nextyPosition(ants[i]), nextxPosition(ants[j]), nextyPosition(ants[j])) <= ants[i].radius + ants[j].radius  ||  distance(ants[i].coordinate.x, ants[i].coordinate.y,ants[j].coordinate.x,ants[j].coordinate.y) <= (ants[i].radius + ants[j].radius)){
                let xmove = Math.sign(ants[i].xMovement) * Math.sign(ants[j].xMovement);
                let ymove = Math.sign(ants[i].yMovement) * Math.sign(ants[j].yMovement);
                let temp1 = ants[i].xMovement;
                let temp2 = ants[j].xMovement;
                ants[i].xMovement = getSpeed(i,j,temp1,temp2) * xmove * -1;
                ants[j].xMovement = getSpeed(j,i,temp2, temp1) * xmove * -1;
                temp1 = ants[i].yMovement;
                temp2 = ants[j].yMovement;
                ants[i].yMovement = getSpeed(i,j,temp1,temp2) * ymove * -1;
                ants[j].yMovement = getSpeed(j,i,temp2, temp1) * ymove * -1;
            }
        }
    }
}

function getSpeed(i,j,temp1,temp2){
    return ((temp1 *(ants[i].mass - ants[j].mass)) + (2 * ants[j].mass * temp2)) / (ants[i].mass + ants[j].mass);
}

function distance(x1, y1, x2, y2) { 
    return Math.sqrt( (x1 - x2) ** 2 + (y1 - y2) ** 2) 
} 


function randomGenerator(min, max){
    return Math.random() * (max - min) + min;
}