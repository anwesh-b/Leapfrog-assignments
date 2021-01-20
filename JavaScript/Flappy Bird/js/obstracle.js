const obsHeight = 308;
const obsWidth = 50;


class Obstracle{
    constructor(left){
        this.left = left;
        this.Gap = randomGenerator(minGap,maxGap);
        this.top = randomGenerator(-166,50);
        this.isScored = false;
        this.botTop = this.top +obsHeight+this.Gap;
        console.log(this.top,this.botTop);
    }
    draw(){
        const obsTop = new Image();
        const obsBot = new Image();
        obsTop.src = './images/obstracleTop.png'
        obsBot.src = './images/obstracleBottom.png'
        obsTop.onload = ()=>{  
            const obsAimation = ()=>{
                ctx.drawImage(obsTop,this.left,this.top,obsWidth,obsHeight);
                this.left-=xSpeed;
                if(this.left < -50) {
                    this.left = width + 50;
                    this.top = randomGenerator(-166,50);
                    this.Gap = randomGenerator(minGap,maxGap);
                    this.botTop = this.top +obsHeight+this.Gap;
                    this.isScored = false;
                }
                requestAnimationFrame(obsAimation);
            }
            obsAimation();
        }
        obsBot.onload = ()=>{
            const obsAimation = ()=>{
                ctx.drawImage(obsBot,this.left,this.botTop,obsWidth,obsHeight);
                requestAnimationFrame(obsAimation);
            }
            obsAimation();
        };
    }
}