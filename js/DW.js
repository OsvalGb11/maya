$(document).ready(function(){
    if ($(window).width() >= 1024) {        
    var flag = false;
    var scroll;
    $(window).scroll(function(){
        scroll = $(window).scrollTop()
        if(scroll > 50){
            if(!flag){
                $("#img").css({
                    "margin-top":"1vh",
                    "margin-left":"15vh",
                    "width":"8vh",
                    "height":"8vh"
                });
                $("header").css({
                    "background": "rgba(145,232,66,1)",
                    "background": "-moz-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
                    "background": "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(145,232,66,1)), color-stop(100%, rgba(210,255,82,0.49)))",
                    "background": "-webkit-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
                    "background": "-o-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
                    "background": "-ms-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
                    "background": "linear-gradient(to bottom, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
                    "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#91e842', endColorstr='#d2ff52', GradientType=0 )",
                    "position":"fixed", "top":"0px",
                });
                flag=true;
            }

            }else{
                if(flag){
                    $("#img").css({
                        "margin-top":"20vh",
                        "width": "299px",
                        "height": "343px",
                        "margin-left":"10vh",
                    });
                    $("header").css({
                        "background": "red",
                        "position":"relative"
                    })
                    flag=false;
                }

            }
        });
     }
     else {
        $("#img").css({
            "float":"left",
            "width":"8vh",
            "height":"8vh"
        });
        $("header").css({
            "background": "rgba(145,232,66,1)",
            "background": "-moz-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
            "background": "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(145,232,66,1)), color-stop(100%, rgba(210,255,82,0.49)))",
            "background": "-webkit-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
            "background": "-o-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
            "background": "-ms-linear-gradient(top, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
            "background": "linear-gradient(to bottom, rgba(145,232,66,1) 0%, rgba(210,255,82,0.49) 100%)",
            "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#91e842', endColorstr='#d2ff52', GradientType=0 )",
            "position":"relative", "top":"0px"
        });
     }

    //  SLIDER
	var imgItems = $('.slider li').length;
	var imgPos = 1;
	$('.slider li').hide();
	$('.slider li:first').show(); 
	setInterval(function(){
		nextSlider();
	}, 4000);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.slider li').hide(); 
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); 

    }


});


