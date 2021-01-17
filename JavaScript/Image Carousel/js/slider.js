const fps = 1000/60;
const width = 300;

class Carousel{
    constructor(selectdiv){
        this.transitionTime = 300;
        this.sliderTime = 2000;
        this.height = 200;
        this.position = 0;
        
        this.carouselContainer = document.getElementsByClassName(selectdiv)[0];
        if(selectdiv!=='carousel-container'){
            this.carouselContainer.setAttribute('class',`carousel-container ${selectdiv}`);
        }

        this.createImageContainer = function(){
            this.container = document.createElement('div');
            this.container.setAttribute('class','image-container');
            this.container.innerHTML = this.carouselContainer.innerHTML;
            this.carouselContainer.innerHTML = '';
            this.carouselContainer.appendChild(this.container);
        }



        this.createButtons = function(){
            this.buttonContainer = document.createElement('div');
            this.buttonContainer.setAttribute('class','buttoncontainer');

            this.buttonContainer.style.left = (width - ((14 + 3 + 3) * this.imgs))/2 + 'px';
            this.buttonContainer.style.width = (14+3+3)*this.imgs + 'px';
            this.carouselContainer.appendChild(this.buttonContainer);
            this.button = [];
            console.log(this.imgs);
            for(let i = 0; i<this.imgs ; i++){
                this.button[i] = document.createElement('div');
                this.button[i].setAttribute('class','carousel-button');
                this.buttonContainer.appendChild(this.button[i]);

                this.button[i].addEventListener('click',()=>{
                    this.slideTo(i);
                })

            }
            this.button[0].setAttribute('class','carousel-button active');

        }

        this.createControls = function(){
            this.leftControl = document.createElement('div');
            this.leftControl.setAttribute('class','carousel-left-control');
            this.leftControl.innerHTML = '<';
            this.leftControl.addEventListener('click',()=>{
                this.slideTo(this.position - 1);
            })

            this.rightControl = document.createElement('div');
            this.rightControl.setAttribute('class','carousel-right-control');
            this.rightControl.innerHTML = '>';
            this.rightControl.addEventListener('click',()=>{
                this.slideTo(this.position + 1);
            })

            this.leftControl.style.top = this.rightControl.style.top = (this.height - 40) / 2 + 'px';
            
            this.carouselContainer.appendChild(this.leftControl);
            this.carouselContainer.appendChild(this.rightControl);
            
        }

        this.createImageContainer();
        
        this.carouselContainer.getElementsByClassName('image-container')[0];
        this.container.style.width = width * this.imgs + 'px';
        this.container.style.left = '0px';
        this.imgs = this.container.getElementsByTagName('img').length;

        this.container.style.width = width * this.imgs + 'px';

        this.createButtons();
        this.createControls();

        this.slide = async function (target){
            // console.log(this.position)
            let currentStep = target - this.position;
            let step = fps * width * currentStep / this.transitionTime;
            var slideAnimation = setInterval(()=>{
                this.container.style.left = parseFloat(this.container.style.left.replace('px','')) - step   + 'px';
                console.log(this.container.style.left)
                if(parseInt(this.container.style.left.replace('px','')) == target*width*-1){
                    console.log('Ok');
                    clearInterval(slideAnimation);
                }
            }, fps);
        }

        this.defaultSlider = setInterval(()=>{
            this.slideTo(this.position+1);
        },this.sliderTime)  
        
    }    

    slideTo(target){
        this.button[this.position].setAttribute('class','carousel-button');
        if(target > this.imgs-1){
            target = 0;
        }
        if(target < 0){
            target = this.imgs - 1;
        }
        this.slide(target).then(()=>{
            this.position = target
            this.button[this.position].setAttribute('class','carousel-button active');
        });
    }

}