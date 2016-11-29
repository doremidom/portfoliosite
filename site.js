$(document).ready(function() {
	
    // random color generator  for links
    function randomColor() {
    	var options = [ 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    	var color = ['#']
    	var count = 0
    	while (count < 6) {
    		color.push(options[randomNumber(0, 15)]);
    		count++;
    	}
    	var string = color.join('')
    	return string
    }
    //random number generator for random color generator
    function randomNumber(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
    
    //make all links random colors
    $("a").hover(function(){
    	var new_color = randomColor();
	    $(this).css("color", new_color);
	    }
	);

    //does what it says
    function toggleDiv(identifyer, type){
        if (type == 'id'){
            var marker = '#'
        }else{
            var marker = '.'
        }

        var div = $('div' + marker + identifyer);
        if (div.css('display') == 'none'){
            div.css('display', 'inline-block')}
        else{
            div.css('display', 'none')
        }
    }


    //logic for site navigation
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 200
            }, 2000);
            return false;
          }
        }
      });
    });

    //variable that keeps track of the currently displayed div
    var current_div = ""

    //logic to show/hide divs on image mouseover
    function portfolioNav(id){
        if (current_div == id){
            return false;
        }
        else if (current_div == ""){
            toggleDiv(id, 'id');
            current_div = id;
        }
        else{
            toggleDiv(current_div, 'id')
            toggleDiv(id, 'id');
            current_div = id;
        }
    }

    //logic to make portfolio autoscroll
    function scrollGallery(direction){
        var leftPos = $('#gallery').scrollLeft();
        endofdiv = $('#gallery').outerWidth();

        if (direction == 'right'){
            if (leftPos == 492){
                return false 
            }
            var position = endofdiv
        }else{
            if (leftPos == 0){
                return false 
            }
            console.log('firing left is ' + leftPos)
            var position = 0;
        }
        $("#gallery").animate({scrollLeft: position}, 800);
    }

    //implement portfolio navigation
    $('img.desaturate').mouseover(
   function(){
        var div_to_show = $(this).attr('id')
        portfolioNav(div_to_show);
   });


    //implement scroll functions
    $('div.arrow').mouseover(
        function(){
            position = $(this).attr('id');
            scrollGallery(position);
            var new_color = randomColor();
            $(this).css("color", new_color);
        }
    );

    var thewidth = $(document).width()
    var windowwidth = $(window).width()
    $('div#width').html('<h1>doc width: '+thewidth+'</h1><br><h1>window width: ' + windowwidth + '</h1>')

    


});