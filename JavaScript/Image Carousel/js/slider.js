const fps = 1000/60;
const width = 300;

class Carousel{
    constructor(selectdiv){
        this.transitionTime = 300;
        this.sliderTime = 2000;
        
        this.carouselContainer = document.getElementsByClassName(selectdiv)[0];
        if(selectdiv!=='carousel-container'){
            this.carouselContainer.setAttribute('class',`carousel-container ${selectdiv}`);
        }

        this.container = document.createElement('div');
        this.container.setAttribute('class','image-container');
        this.container.innerHTML = this.carouselContainer.innerHTML;
        this.carouselContainer.innerHTML = '';
        this.carouselContainer.appendChild(this.container);
        this.carouselContainer.getElementsByClassName('image-container')[0];

        this.imgs = this.container.getElementsByTagName('img').length;
        this.container.style.width = width * this.imgs + 'px';

        this.position = 0;

        this.container.style.left = '0px';

        this.slide = async function (target){
            console.log(this.position)
            let currentStep = target - this.position;
            let step = fps * width * currentStep / this.transitionTime;
            var slideAnimation = setInterval(()=>{
                this.container.style.left = parseFloat(this.container.style.left.replace('px','')) - step   + 'px';
            }, fps);
            setTimeout(()=>{
                clearInterval(slideAnimation);
            },this.transitionTime);
        }

        this.defaultSlider = setInterval(()=>{
            this.slideTo(this.position+1);
        },this.sliderTime)  
        
    }    

    slideTo(target){
        if(target > this.imgs-1){
            target = 0;
        }
        if(target < 0){
            target = this.imgs - 1;
        }
        this.slide(target).then(()=>{
            this.position = target
        });
    }

}