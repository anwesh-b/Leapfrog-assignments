let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
height = canvas.height = window.innerHeight;
width = canvas.width = window.innerWidth;

const image = new Image();
image.src = './image/Ant.png';
// image.onload = function(){
//     canvas.width = 16;
//     canvas.height = 16;
// }
class Ant{
    constructor(){
        this.createAnt();
    }
    
    createAnt = function(){
        this.xMovement = randomGenerator(-4,4);
        this.yMovement = randomGenerator(-4,4);
        this.radius = 20;
        this.mass = this.radius * Math.PI;
        this.coordinate = this.generateInitialPoint(this.radius);
    }

    generateInitialPoint = function(radius){
        return {
            x: randomGenerator(this.radius, width - this.radius),
            y: randomGenerator(this.radius, height - this.radius)
        }
    }
    
    render = function(){
        // ctx.rotate(25*Math.PI/180);
        ctx.drawImage(image,this.coordinate.x - this.radius ,this.coordinate.y - this.radius);
    }

    move = function(){
        if (Math.abs( this.coordinate.x-width + (1 * this.radius) ) <= this.xMovement ||  this.coordinate.x + this.xMovement <= this.radius ) this.xMovement *= -1;
        if (Math.abs(this.coordinate.y-height + (1 * this.radius )) <=  this.yMovement ||  this.coordinate.y + this.yMovement <= this.radius ) this.yMovement *= -1;
        this.coordinate.x += this.xMovement;
        this.coordinate.y += this.yMovement;
    }

    autoMove = function(){
        this.move();
        collisionDetectionAndGenSpeed();
        this.render();   
    }
}

function nextxPosition(x) {return x.coordinate.x + x.xMovement} 
function nextyPosition(x) {return x.coordinate.y + x.yMovement} 
