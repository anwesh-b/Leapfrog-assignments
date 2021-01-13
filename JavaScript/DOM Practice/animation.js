var animateBox = document.getElementById('animate');

var animationBall = document.createElement('div');
animationBall.setAttribute('class','animation-ball');

animateBox.appendChild(animationBall);

var position = 0
var down = true
var speed = 1

var running = setInterval(play,1000/60)

var playing = true;
var buttons = document.getElementById('playpause');
var inc = document.getElementById('inc');
var dec = document.getElementById('dec');

buttons.addEventListener('click',function(){
    if(playing){
        window.clearInterval(running);
        buttons.innerHTML = 'Play';
        playing = false;
    }else{
        console.log('Ok');
        running = setInterval(play,1000/60);
        buttons.innerHTML = 'Pause';
        playing = true;
    }
})  


inc.addEventListener( 'click', function(){
    speed +=1;
})

dec.addEventListener( 'click', function(){
    speed -=1;
})




function play(){
    position = (down == true)? position + speed:position - speed;
    animationBall.style.top = position + 'px';
    down = (position >= 210)? down : !down;
    down = (position <= 0)? down : !down;
}