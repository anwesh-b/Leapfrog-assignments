class ObstracleCar{
    constructor(top = initialObs){
        this.top = top;
        this.scored = false;
        this.lane = parseInt(Math.random()*3);
    }  

    draw = function(){
        this.obsImage = new Image();
        this.obsImage.src = `./images/Car${parseInt(Math.random()*4)+1}.png`;
        this.obsImage.onload = ()=>{
            const drawObsctracle=()=>{
                if(this.top > canvas.height){
                    this.scored = false;
                    this.obsImage.src = `./images/Car${parseInt(Math.random()*4)+1}.png`;
                    this.top = -516;
                    this.lane = parseInt(Math.random()*3);
                    return
                }
                ctx.drawImage(this.obsImage,positionsX[this.lane],this.top,79,carHeight);
                this.top += 1.5*speed;
                if (gameOver) return; 
                requestAnimationFrame(drawObsctracle);
            }
            drawObsctracle();
        }
    }
}