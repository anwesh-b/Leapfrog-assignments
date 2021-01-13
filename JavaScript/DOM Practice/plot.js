var points = [
    {x: 15, y:200},
    {x: 50, y:124},
    {x: 240, y:187},
    {x: 126, y:80},
    {x: 223, y:150},
    {x: 238, y:30},
    {x: 75, y:10},
    {x: 123, y:210}
]

var plotArea = document.getElementById('plot');
var plot = [];

for(var i = 0; i< points.length;i++){
    createPlot(i,points[i].x,points[i].y);
}

var reset = document.getElementById('reset');

reset.addEventListener('click',function(){
    while(plotArea.lastChild){
        plotArea.removeChild(plotArea.lastChild)
    }
    plot.forEach(function(x){
        plotArea.appendChild(x);
    })
})


var add = document.getElementById('add-form');

add.addEventListener('submit',function(x){
    x.preventDefault();
    createPlot(plot.length,x.target.x.value,x.target.y.value);
})

function createPlot(pos,x,y){
    plot[pos] = document.createElement('div');
    plot[pos].setAttribute('class','plot-point');
    plot[pos].style.bottom = x - 2 + 'px';
    plot[pos].style.left = y -2 + 'px';
    plotArea.appendChild(plot[pos]);
    plot[pos].addEventListener('click',function(x){
        plotArea.removeChild(x.target);
    })
}