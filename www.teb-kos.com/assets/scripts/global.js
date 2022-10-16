
winHeight   = $(window).height();

$(window).scroll(function() {
    var height = $(window).scrollTop();

	if ($(window).width() > 450) {
	
    	if(height  > 90) {
    	    $('.sec-holder').addClass('slide-holder');
    	}
    	else {
    		$('.sec-holder').removeClass('slide-holder');
    	}
		
    	if(height  > 102) {
    	    $('.main').addClass('stick-main');
    	}
    	else {
    	    $('.main').removeClass('stick-main');
    	}
    
    }

});

function kredite() {
	var totalsum 	= parseFloat($('.credit-sum-js').val());
	var totalint 	= parseFloat($('.credit-int-js').val());
	var totalmons 	= parseFloat($('.credit-mon-js').val());

	var adj_totalint= (totalmons/12)*totalint;
	var newtotalint	= (adj_totalint/100);

	var monthlies 	= (totalsum/totalmons);
	var with_int 	= (monthlies+(monthlies*newtotalint));
	var total_back 	= (with_int*totalmons);

	if(isNaN(with_int)) { var with_int = 0; }
	if(isNaN(total_back)) { var total_back = 0; }

	$('.credit-payments-js').val((with_int).toFixed(2));
	$('.credit-return-js').val((total_back).toFixed(2));
}

function kursimet() {
	var kursimShuma = parseFloat($('.kursim-shuma-js').val());
	var kursimNorma = parseFloat($('.kursim-norma-js').val());
	var kursimDaily = (kursimNorma/360);

	var kursimMuaj	= parseFloat($('.kursim-mon-js').val());
	var kursimDays 	= (kursimMuaj*30);

	var kursim 		= (((kursimDays*kursimDaily)*kursimShuma)*.01);
	var kursimTatim = (kursim*.1);
	var kursimFinal = (kursim-(kursim*.1));

	if(isNaN(kursim)) { var kursim = 0; }
	if(isNaN(kursimTatim)) { var kursimTatim = 0; }
	if(isNaN(kursimFinal)) { var kursimFinal = 0; }

	$('.kursim-temp-js').val((kursim).toFixed(2));
	$('.kursim-tatim-js').val((kursimTatim).toFixed(2));
	$('.kursim-total-js').val((kursimFinal).toFixed(2));
};

$(document).ready(function(){

	//arrows
    var photo_nr    = $('.slideshow div').length;

    //Changing Images in arrow
    $('.arrows').click(function(){
        var index       = $('.slideshow div:visible').index();

		$('.slideshow div').hide();

        if($(this).hasClass('rarr')){
            index = index +1;
            // Backward
            if(index == photo_nr){
                $('.slideshow div:first').show();
            }else{
                index = index;
                $('.slideshow div:eq('+index+')').show();
            }                           
        }else{
            //Forward                                   
            if(index == 0){
                $('.slideshow div:last').show();
            }else{
                index   = index - 1;
                $('.slideshow div:eq('+index+')').show(); 
            }                               
        }
    });
    

	if ($(window).width() > 450) {

	    honeheight  = ($('.midway').height())/2;
	
	    $('.main').css('height', (winHeight-167)+'px');
	    $('.stay .main').css('height', winHeight+'px');
	    $('.content').css('min-height', (winHeight-197)+'px');
	
	    $('.midway').css('margin-top', -honeheight+'px');
	
	}

	//auto slider
    var photo_nr    = $('.slideshow-main a').length;
    var new_nr 		= photo_nr-1;	
	var checkSlide 	= $('.slide-top').length;
	
	// if(checkSlide>0) {


		(function loop() {
		
		    timeoutId = setTimeout(function(){
		    
		        var index       = $('.slide-top').index();
		        
		        if(index == new_nr){            
		    		
		    		$('.blocks a').removeClass('current');
		    		$('.blocks a:eq(0)').addClass('current'); 
		    		
		            $('.slideshow-main a').removeClass('slide-z');			
		            $('.slideshow-main a:eq(0)').addClass('slide-top slide-z'); 
		    		
		    		setTimeout(function(){
		    			$('.slideshow-main a:not(.slideshow-main a:eq(0))').removeClass('slide-top');
		    		}, 510) 
		        }else{
		            index   = index + 1;
		            
		    		$('.blocks a').removeClass('current');
		    		$('.blocks a:eq('+index+')').addClass('current'); 
		    		
		            $('.slideshow-main a').removeClass('slide-z');			
		            $('.slideshow-main a:eq('+index+')').addClass('slide-top slide-z'); 
		    		
		    		setTimeout(function(){
		    			$('.slideshow-main a:not(.slideshow-main a:eq('+index+'))').removeClass('slide-top');
		    		}, 510) 
		        }                               		    	
		    	
		    	loop();
		
		    }, 5000)
		
		}());


	// }

});

$(document)
.on('click', '.tabs span', function() {
    $(this).next('.tab-content').slideToggle(100);
})

.on('mouseover', '.slider', function() {
	clearTimeout(timeoutId);
})

.on('mouseleave', '.slider', function() {
	// restart slide
})

.on('mouseover', '.blocks a', function() {

	$('.slideshow-main a').removeClass('slide-top');
	
    var slideID = $(this).attr('id');

    $('.slide-js').removeClass('slide-z');
   	$('.slide-'+slideID).addClass('slide-click slide-fast slide-z');

    $('.blocks a').removeClass('current');
    $(this).addClass('current');

	$('.slide-js:not(.slide-'+slideID+')').removeClass('slide-click slide-fast');
    
})

.on('click', '.oferta-pagination a', function() {
    var ofertaID = $(this).attr('id');
    $('.oferta-single').hide();
    $('#oferta-'+ofertaID).show();
    $('.oferta-pagination a').removeClass('current');
    $(this).addClass('current');
})

.on('click', '.lajme-pag a', function() {
    var linkcount = $(this).index();
    $('.repeat-items').hide();
    $('.repeat-items:eq('+linkcount+')').show();
    $('.lajme-pag a').removeClass('current');
    $(this).addClass('current')
})

.on('click', '.calc-switch a', function() {
	$('.calc-switch a').removeClass('current');
	$(this).addClass('current');
	
	var calcType = $(this).attr('id');
	
	$('.calc-type').hide();
	$('.calc-'+calcType).show();
})

.on('click', '.slide-js', function() {
	$('.real-menu').toggle();
})

// Kredite
.on('keyup', '.credit-sum-js, .credit-int-js, .credit-mon-js', function() {
	kredite();
})

// Kursimet
.on('keyup', '.kursim-shuma-js, .kursim-norma-js, .kursim-mon-js', function() {
	kursimet();
})






