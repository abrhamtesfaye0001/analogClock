let image  = document.getElementsByTagName("img")[0]
let minuteHand = document.querySelector("#minute")
let hourHand = document.querySelector("#hour")
let imageStyle = getComputedStyle(image)
console.log(imageStyle["width"])

var x=1
// window.onresize = (e)=>{
//     imageStyle=getComputedStyle(image);
//     // console.log(imageStyle["width"]);
//     width = parseInt(imageStyle["width"])
//     var rect = image.getBoundingClientRect();
//     let centery = rect.top+width/2
//     let centerx = rect.left+width/2
//     minuteHand.style.top = `${centery}px`
//     minuteHand.style.left = `${centerx}px`
//     minuteHand.style.height = (width/2-width*0.2)+"px"
//     minuteHand.style.transform = `rotate(${15*x++}deg)`
//     minuteHand.style.transformOrigin = "top left"

// }
width = parseInt(imageStyle["width"])
var rect = image.getBoundingClientRect();
let centery = rect.top+width/2
let centerx = rect.left+width/2
minuteHand.style.top = `${centery}px`
minuteHand.style.left = `${centerx}px`

setInterval(
    (e)=>{
        
        imageStyle=getComputedStyle(image);
        // console.log(imageStyle["width"]);
        width = parseInt(imageStyle["width"])
        var rect = image.getBoundingClientRect();
        let centery = rect.top+width/2
        let centerx = rect.left+width/2
        minuteHand.style.top = `${centery}px`
        minuteHand.style.left = `${centerx}px`
        minuteHand.style.height = (width/2-width*0.2)+"px"
        
        minuteHand.style.transform = `rotate(${15*x++}deg)`
        minuteHand.style.transformOrigin = "top left"
    }
    ,1000
)