
/*Bird Stuff*/ 
document.addEventListener('DOMContentLoaded' , () => {
  let bird =  $(".bird") 
 let birdLeft = 50;
 let birdBottom = 100;
 let gravity = 2

function startGame(){
    birdBottom -= gravity;
    bird.css({
        "bottom": birdBottom +"px",
        "left": birdLeft + "px"

    })
}
let timerId = setInterval(startGame,20)

function jump(){
   if(birdBottom<400) birdBottom += 50;
    bird.animate({
        "bottom": birdBottom + "px"
    },5)
}
document.addEventListener('click',jump)


})
// setInterval(function(){ 
//     console.log("5 secs have passed"); 
// }, 5000/*5000 ms=5 seconds*/);




 setInterval(function(){
     var pillarHeight = parseInt(Math.random()*(500-100)+100);
    $(".pillar").css({
    "height":pillarHeight +"px"
   }
    )
  console.log(pillarHeight)
 },1000);

