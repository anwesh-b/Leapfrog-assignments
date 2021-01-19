
class ObstracleCar{
    constructor(top = initialObs){
        this.top = top;
        this.scored = false;
        this.lane = parseInt(Math.random()*3);
        this.isOutside = false;
    }  
    draw = function(){
        this.obsImage = new Image();
        this.obsImage.src = `./images/Car${parseInt(Math.random()*4)+1}.png`;
        this.obsImage.onload = ()=>{
            const drawObsctracle=()=>{
                this.top += speed;

                if(this.top > canvas.height){
                    this.scored = false;
                    this.obsImage.src = `./images/Car${parseInt(Math.random()*4)+1}.png`;
                    this.top = -196;
                    this.lane = parseInt(Math.random()*3);
                } 

                ctx.drawImage(this.obsImage,positionsX[this.lane],this.top,79,carHeight);
                if (gameOver) return; 
                if (this.isOutside) return;
                requestAnimationFrame(drawObsctracle);
            }
            drawObsctracle();
        }
    }
}