let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
height = canvas.height = window.innerHeight;
width = canvas.width = window.innerWidth;

const hQuater = (height / 4) + 20;
const wQuater = (width / 4) + 20;

const renderTime = 1000/60; 

const colors = [ 
        'rgba(206, 224, 75, 0.81)',
        'rgba(44, 224, 75, 0.69)',
        'rgba(253, 224, 75, 0.78)',
        'rgba(253, 40, 75, 0.62)',
        'rgba(40, 253, 75, 0.62)',
        'rgba(75, 40, 253, 0.62)',
        'rgba(75, 253, 40, 0.62)',
        'rgba(253, 40, 219, 0.41)',
        'rgba(253, 219, 40, 0.41)',
        'rgba(253, 0, 0, 0.71)',
        'rgba(37, 94, 185, 0.76)'
    ]

const xVelocity = 1;
const yVelocity = 1;
class Ball{
    constructor(maxRadius=5,minRadius=20){
        this.createBall(maxRadius,minRadius);
    }
    
    createBall = function(maxRadius,minRadius){
        this.ballColor = colors[parseInt(Math.random()*colors.length)]
        this.xMovement = randomGenerator(-2,2);
        this.yMovement = randomGenerator(-2,2);
        this.radius = randomGenerator(minRadius,maxRadius);
        this.mass = this.radius * Math.PI;
        this.coordinate = this.generateInitialPoint(this.radius);
    }

    generateInitialPoint = function(radius){
        return {
            x: randomGenerator(radius, width - radius),
            y: randomGenerator(radius, height - radius)
        }
    }

    render = function(){
        ctx.beginPath();
        ctx.arc(this.coordinate.x, this.coordinate.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.ballColor;
        ctx.fill();
        ctx.closePath();
    }

    move = function(){
        if (Math.abs( this.coordinate.x-width + this.radius) <= this.xMovement  ||  this.coordinate.x + this.xMovement - this.radius <= 0 ) this.xMovement *= -1;
        if (Math.abs(this.coordinate.y-height + this.radius) <= this.yMovement  ||  this.coordinate.y + this.yMovement - this.radius <= 0 ) this.yMovement *= -1;
        this.coordinate.x += this.xMovement;
        this.coordinate.y += this.yMovement;
    }
}

function nextxPosition(x) {return x.coordinate.x + x.xMovement} 
function nextyPosition(x) {return x.coordinate.y + x.yMovement} 
