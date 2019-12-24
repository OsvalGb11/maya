$(document).ready(function(){
    //LARGE
    if ($(window).width() >= 1024) {        
    var flag = false;
    var scroll;
    $(window).scroll(function(){
        scroll = $(window).scrollTop()
        if(scroll > 100){
            if(!flag){
                $(".img").css({
                    "margin-top":"1vh",
                    "width":"8vh",
                    "height":"8vh",
                    "margin-left": "55vh"
                });
                $(".prueba").css({
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
                    $(".img").css({
                        "width": "299px",
                        "height": "343px",
                        "margin-left": "42vh",
                        "margin-top": "20vh"
                    });
                    $(".prueba").css({
                        "background": "red",
                        "position":"relative"
                    })
                    flag=false;
                }

            }
        });
     }
     //FIN LARGE

    // MÓVIL
     if($(window).width() <= 719){
        $(".img").css({
            "float":"left",
            "width":"8vh",
            "margin-left": "8vh",
            "margin-top": "1vh",
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
     }else{
        if(flag){
            $(".img").css({
                "width": "299px",
                "height": "343px",
                "margin-left": "42vh",
                "margin-top": "20vh"
            });
            $(".prueba").css({
                "background": "red",
                "position":"relative"
            })
            flag=false;
        }

    }

    // FIN MÓVIL
    //MEDIANO
     if($(window).width()>=720 && $(window).width() <= 1023){
        var flag = false;
        var scroll;
        $(window).scroll(function(){
            scroll = $(window).scrollTop()
            if(scroll > 100){
                if(!flag){
                    $(".img").css({
                        "margin-top":"0",
                        "height":"10vh",
                        "margin-left": "7vh"
                    });
                    $(".prueba").css({
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
                        $(".img").css({
                            "height": "15vh",
                            "margin-left": "6vh",
                            "margin-top": "20vh"
                        });
                        $(".prueba").css({
                            "background": "red",
                            "position":"relative"
                        })
                        flag=false;
                    }
    
                }
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


