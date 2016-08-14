//if browser does not support the imageobject, exit.
var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "../src/BUBC LOGO.png" // set image src property to image path, preloading image in the process
slideimages[1] = new Image()
slideimages[1].src = "../src/cues.jpg"
slideimages[2] = new Image()
slideimages[2].src = "../src/genMeeting.jpg"
slideimages[3] = new Image()
slideimages[3].src = "../src/splash.jpg"
slideimages[4] = new Image()
slideimages[4].src = "../src/winterSux.jpg"

//variable that will increment through the images
var step=0

function playSlides(){

        if (!document.images){
            return;
        }
        document.getElementById("slide").src = slideimages[step].src;
        if (step<4){
            step++;
        }else{
            step=0;
        }
    
    setTimeout(function(){playSlides()},2500);
    
}

function wtf(){

}

