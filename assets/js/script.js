

var birdHeightPos = 50;

$(".bird").click(function(){
    let currentBird = $(this);
    
     currentBird.animate({
        bottom:birdHeightPos + 'px',
        transition:"bottom 0.2s"
     })
    
   
    if(birdHeightPos>50){
        $(this).animate(
            {bottom: birdHeightPos - 20}
        )
    }else{
        console.log("aint ggreater")
    }
    birdHeightPos+=50
    console.log(birdHeightPos)
}
)

    
