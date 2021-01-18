let totalAnt = 20;
let ants = [];

function draw(x){
    for (let i = 0;i<x; i++){
        ants[i] = new Ant();
    }    
}

function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ants.forEach((ant)=>{
        ant.autoMove();
    })
}

canvas.addEventListener('click',(click)=>{
    let x = click.x;
    let y = click.y;
    for (let i = 0; i<ants.length; i++){
        if ( distance(x,y,ants[i].coordinate.x,ants[i].coordinate.y) < ants[i].radius){
            ants = ants.filter(item => item!== ants[i]);
        }
    }
})

draw(totalAnt);
animation();