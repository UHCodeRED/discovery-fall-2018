$(document).ready(function(){
    var width = $(window).width(),
        height = $(window).height(),
        needToRAF = true,
        mouseX = 0,
        mouseY = 0;

    function renderBigStars(){
        var numOfStars = Math.floor(Math.random() * 10) +1;
        var maxX = width + width/2;
        var maxY = height + height/2;
        $("#stars-big").empty();

        for(var i=0; i<numOfStars; i++){
            var randX = Math.floor(Math.random() * maxX);
            var randY = Math.floor(Math.random() * maxY);
    
            var style = `left:${randX}px; top: ${randY}px;`
            $("#stars-big").append(`<img class="star" src="./assets/images/Stars_big-${randStarColor()}.png" style="${style}"/>`);
        }
    }
    
    function renderMedStars(){
        var numOfStars = Math.floor(Math.random() * 15) +5;
        var maxX = width + width/4;
        var maxY = height + height/4;
        $("#stars-med").empty();

        for(var i=0; i<numOfStars; i++){
        
            var randX = Math.floor(Math.random() * maxX);
            var randY = Math.floor(Math.random() * maxY);
    
            var style = `left:${randX}px; top: ${randY}px;`
            $("#stars-med").append(`<img class="star" src="./assets/images/Stars_med-${randStarColor()}.png" style="${style}"/>`);
        }
    }
    
    function renderSmallStars(){
        var numOfStars = Math.floor(Math.random() * 20) +10;
        var maxX = width + width/10;
        var maxY = height + height/10;
        $("#stars-small").empty();

        for(var i=0; i<numOfStars; i++){
        
            var randX = Math.floor(Math.random() * maxX);
            var randY = Math.floor(Math.random() * maxY);
    
            var style = `left:${randX}px; top: ${randY}px;`
            $("#stars-small").append(`<img class="star" src="./assets/images/Stars_small-${randStarColor()}.png" style="${style}"/>`);
        }
    }

    renderBigStars();
    renderMedStars();
    renderSmallStars();

    $(window).resize(function() {
        width = $(window).width();
        height = $(window).height();
        renderBigStars();
        renderMedStars();
        renderSmallStars();
    });

    $(window).mousemove(function(e) {
        e.preventDefault();
        mouseX = -e.clientX;
        mouseY = -e.clientY;
        if(needToRAF){
            needToRAF = false;
            requestAnimationFrame(update)
        }
    });

    function update(e){
        var big = $("#stars-big")
        big.css("transform",`translate3d(${mouseX * .5}px, ${mouseY * .5}px, 0)`);

        var med = $("#stars-med");
        med.css("transform",`translate3d(${mouseX * .25}px, ${mouseY * .25}px, 0)`);

        var small = $("#stars-small");
        small.css("transform",`translate3d(${mouseX * .1}px, ${mouseY * .1}px, 0)`);

        needToRAF = true;
    }
});

function randStarColor(){
    var choice = Math.floor(Math.random() * 100) + 1;

    if(choice > 50){
        return 'red';
    }
    else if(choice > 10){
        return 'yellow';
    }
    else{
        return 'blue';
    }
}