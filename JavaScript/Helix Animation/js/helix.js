import { GAME_INNER_HTML, MAX_ANGLE, OFFSET, TIMER, BG_COLOR, BALL_COLOR } from './constant.js';
import toRadian from './utils.js';

export class Helix{
    constructor(container, x,y,radius){
        this.container = document.getElementById(container);
        this.container.innerHTML = GAME_INNER_HTML;
        this.canvas = this.container.getElementsByTagName('canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = x*radius*2;
        this.canvas.height = (2*OFFSET)+(y*2*radius);
        this.w = x;
        this.h = y;
        this.radius = radius;
        this.timer = 2*this.radius;
        this.ball=[];
        this.speed = 0.05;
        this.angle = 0;
        this.angleOffset = MAX_ANGLE / this.w;
    }

    draw(){
        this.ctx.fillStyle = BG_COLOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        for(let i=0; i<this.w;i++){
            for(let j=0; j< this.h; j++){
                let currentAngleOffset = i*this.angleOffset;
                let xCenter = i*this.radius*2 + this.radius;
                let yCenterOffset = OFFSET + this.radius + 2*this.radius*j;
                this.ctx.beginPath();
                this.ctx.arc(xCenter, yCenterOffset + OFFSET*Math.sin(toRadian(180+this.angle+currentAngleOffset)), this.radius/2 * (1+Math.cos(toRadian(180+this.angle+currentAngleOffset))), 0, MAX_ANGLE);
                this.ctx.fillStyle = BALL_COLOR;
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(xCenter, yCenterOffset + OFFSET*Math.sin(toRadian(this.angle+currentAngleOffset)), this.radius/2 * (1+Math.cos(toRadian(this.angle+currentAngleOffset))), 0, MAX_ANGLE);
                this.ctx.fillStyle = BALL_COLOR;
                this.ctx.fill();
            }
        }

        this.angle = (this.angle+1)%MAX_ANGLE;
    }

    animate(){
        setInterval(this.draw.bind(this),TIMER);
    }
}


