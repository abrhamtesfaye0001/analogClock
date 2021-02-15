let image  = document.getElementsByTagName("img")[0]
let minuteHand = document.querySelector("#minute")
let hourHand = document.querySelector("#hour")
let secondHand = document.querySelector("#second")
let center = document.querySelector("#center")
let imageStyle = getComputedStyle(image)
console.log(imageStyle["width"])


window.onresize = (e)=>{
    
placeObjects()
}

width = parseInt(imageStyle["width"])
var rect = image.getBoundingClientRect();
let centery = rect.top+width/2
let centerx = rect.left+width/2

function placeObjects(){
    imageStyle=getComputedStyle(image);
    // console.log(imageStyle["width"]);
    width = parseInt(imageStyle["width"])
    var rect = image.getBoundingClientRect();
    let centery = rect.top+width/2
    let centerx = rect.left+width/2
    minuteHand.style.top = `${centery}px`
    minuteHand.style.left = `${centerx}px`
    minuteHand.style.height = (width/2-width*0.25)+"px"
    hourHand.style.top = `${centery}px`
    hourHand.style.left = `${centerx}px`
    hourHand.style.height = (width/2-width*0.3)+"px"
    secondHand.style.top = `${centery}px`
    secondHand.style.left = `${centerx}px`
    secondHand.style.height = (width/2-width*0.2)+"px"
    center.style.top = `${centery-5}px`
    center.style.left = `${centerx-5}px`
}

placeObjects()


function hourCount() {
    
    var today = new Date();
    var h = today.getHours();    
    h = h % 12 || 12;
    
    
    placeObjects()
    hourHand.style.transform = `rotate(${30*h}deg)`
    hourHand.style.transformOrigin = "top left"
    
    
    setTimeout(hourCount, 1800000);
}





