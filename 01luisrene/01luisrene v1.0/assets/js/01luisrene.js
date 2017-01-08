'use strict';
var alegre = 'fa-smile-o',
	serio = 'fa-meh-o',
	triste= 'fa-frown-o',
	alto_ventana = $( window ).height(),
	agente = navigator.userAgent.toLowerCase();

var cerounoluisrene = (function ($) {

    var

    userAgentInit = function() {
        document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    },
    // script para que el menu sea statico
    menuFixed = function(){
    	var menu = $('body.template-no-home #js-site-header');
    	//http://bigspotteddog.github.io/ScrollToFixed/
    	$('body.template-no-home #js-site-header').scrollToFixed();

    	$(window).on('scroll', function() {
	      if($(window).scrollTop() > 1) {
	        menu.addClass('menu-fixed');
	      } else {
	        menu.removeClass('menu-fixed');
	      }
  		});
    },
    displayMenu = function(){
    	$('#js-menu-icon').on('click', function(e) {
    		e.preventDefault();
    		$('.trigger').slideToggle();
    	});
    	$(window).resize(function(){
		    var w = $(window).width();
		    if(w>320 && $('.trigger').is(':hidden')){
		      $('.trigger').removeAttr('style');     
		    }
		  });
    },
    //altura de la web
    heightHome = function(){
    	var navInfo = window.navigator.appVersion.toLowerCase(),
    	so = null;
			if(navInfo.indexOf('win') != -1)
			{
				so = 'Windows';
			}
			else if(navInfo.indexOf('linux') != -1)
			{
				so = 'Linux';
			}
			else if(navInfo.indexOf('mac') != -1)
			{
				so = 'Macintosh';
			}

			if(so == 'Windows' || so == 'Linux' || so == 'Macintosh'){
				$('#contenedor_front_main').css({
					height: 606
				});
			}

			if(alto_ventana >= 240){
				$('#contenedor_front_main').css({
					height: alto_ventana - 38
				});
			}else{
				$('#contenedor_front_main').css({
					height: 202 // 240 - 38
				});
		 	}
    	
		$(window).resize(function() {
			var alto_ventana = $(this).height();
			if(alto_ventana >= 240){
				$('#contenedor_front_main').css({
					height: alto_ventana - 38
				});
			}else{
				$('#contenedor_front_main').css({
					height: 202 // 240 - 38
				});
		 	}
		});
    },
    estado01luisrene = function(){
    	// función para cargar estado de animo
		$('#img_estado .fa').addClass(alegre);
    },
    //script para num cel
    numerosContacto = function(){
    	//código para mis números de celulares
		var movistar = $('#movistar').text();
		$('#movistar').hover(function(){
	    	$(this).addClass('movistar');
			var replace = movistar.replace(movistar,'Movistar');
			$(this).text(replace);
	    }, function() {
	    	$(this).removeClass('movistar');
	    	var replace = movistar.replace('Movistar', movistar);
			$(this).text(replace);
	  	});
		var claro = $('#claro').text();
	  	$('#claro').hover(function(){
	    	$(this).addClass('claro');
	    	var replace = claro.replace(claro, 'Claro');
			$(this).text(replace);
	    }, function() {
	    	$(this).removeClass('claro');
	    	var replace = claro.replace('Claro', claro);
			$(this).text(replace);
	  	});
    },
    //slider
    slider01luisrene = function(){
    	var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index, value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');

					if(index+1 < size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');
						return false;
					}
				}
		});
    },
 // 01luisrene javascripts initialization
    init = function () {
        userAgentInit();
        menuFixed();
        displayMenu();
        heightHome();
        estado01luisrene();
        numerosContacto();
        setInterval(function(){ slider01luisrene() }, 10000);
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    cerounoluisrene.init();
})();