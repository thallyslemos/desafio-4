//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url; 

        this._interval;   
        this._sequence;   
        this._size;   
    }

    static Start(arr){
        if(typeof arr == "object" ){ 

            if(arr.length > 0){ 
                this._sequence = 0;
                this._size = arr.length;
                Carousel.Next(arr); //start
                this._interval = setInterval(function(){ Carousel.Next(arr); },5000);
                                        
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(arr){ 

        if(Carousel._sequence<Carousel._size){
            let CarouseObject = arr[Carousel._sequence]; 

            let divCarouselmage = document.getElementById("carousel");
            divCarouselmage.innerHTML = `<a href=${CarouseObject.url}><img src=${CarouseObject.image} width="60%"></a>`;

            let divCarouselTitle = document.getElementById("carousel-title");
            divCarouselTitle.innerHTML = `<a href=${CarouseObject.url}> ${CarouseObject.title} </a>`

            Carousel._sequence += 1;
            if(Carousel._sequence>=Carousel._size){
                Carousel._sequence = 0;
            }
        }
    }
};


