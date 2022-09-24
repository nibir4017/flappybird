


 var birdHeightPos = 50;
 let currentBird;
 var intervalTime= 2000;
$(".bird").click(function(){
   
     currentBird = $(this);
    
     currentBird.animate({
        bottom:birdHeightPos + 'px',
        transition:"bottom 2s"
     })
    
    birdHeightPos+=50
    intervalTime+=1000
    console.log(birdHeightPos)
    console.log(intervalTime +"insideClick")
}
)
// setInterval(function(){ 
//     console.log("5 secs have passed"); 
// }, 5000/*5000 ms=5 seconds*/);

setInterval(function (){
     
        $(".bird").animate(
            {bottom: 0},1000
        )
    birdHeightPos=50
    
    console.log(intervalTime +"insideSetInterval")
},intervalTime)
  


setInterval(function(){
    var pillarHeight = parseInt(Math.random()*(500-100)+100);
   $(".pillar").css({
    "height":pillarHeight +"px"
   }
   )
   console.log(pillarHeight)
},1000);

