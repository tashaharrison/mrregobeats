(function ($) {

/* Drupal.behaviors.stickyMenu = {
	attach: function() {
		$(document).ready(function(){
			var sticky_container = $('#block-views-kpi-block-block');

			sticky_container.waypoint(function(direction) {
				sticky_container.toggleClass("sticky",direction==='down');
			});
		});
	}
}; */


Drupal.behaviors.commerce_add_to_cart_confirmation_overlay = {
attach:function (context, settings) {
  if ($('.messages--commerce-add-to-cart-confirmation').length > 0) {
	// Add the background overlay.
	$('body').append("<div class=\"commerce_add_to_cart_confirmation_overlay\"></div>");

	// Enable the close link.
	$('.commerce-add-to-cart-confirmation-close').live('click touchend', function(e) {
	  e.preventDefault();
	  $('.messages--commerce-add-to-cart-confirmation').remove();
	  $('.commerce_add_to_cart_confirmation_overlay').remove();
	});
  }
}
};

Drupal.behaviors.buybuttonHome = {
	attach: function(context, settings) {
		
		// Add classes for matching later
		$('.jp-playlist').children('ul').addClass('jp-playlist-wrapper');
		$('.jp-playlist-wrapper').children('li').each(function (i) {
			i = i+1;
			$(this).addClass('views-row-' + i);
			$(this).addClass('jp-item');
			$(this).children('a').addClass('jp-link');
		});
		
		// Variables for matching
		
		//Insert the button into the playlist
		$('.views-row-1.buy-button').insertAfter('.views-row-1.jp-item .jp-link');
		$('.views-row-2.buy-button').insertAfter('.views-row-2.jp-item .jp-link');
		$('.views-row-3.buy-button').insertAfter('.views-row-3.jp-item .jp-link');
		$('.views-row-4.buy-button').insertAfter('.views-row-4.jp-item .jp-link');
		$('.views-row-5.buy-button').insertAfter('.views-row-5.jp-item .jp-link');
		$('.views-row-6.buy-button').insertAfter('.views-row-6.jp-item .jp-link');
		$('.views-row-7.buy-button').insertAfter('.views-row-7.jp-item .jp-link');
		$('.views-row-8.buy-button').insertAfter('.views-row-8.jp-item .jp-link');
		$('.views-row-9.buy-button').insertAfter('.views-row-9.jp-item .jp-link');
		$('.views-row-10.buy-button').insertAfter('.views-row-10.jp-item .jp-link');
		$('.views-row-11.buy-button').insertAfter('.views-row-11.jp-item .jp-link');
		$('.views-row-12.buy-button').insertAfter('.views-row-12.jp-item .jp-link');
		$('.views-row-13.buy-button').insertAfter('.views-row-13.jp-item .jp-link');
		$('.views-row-14.buy-button').insertAfter('.views-row-14.jp-item .jp-link');
		$('.views-row-15.buy-button').insertAfter('.views-row-15.jp-item .jp-link');
		$('.views-row-16.buy-button').insertAfter('.views-row-16.jp-item .jp-link');
		$('.views-row-17.buy-button').insertAfter('.views-row-17.jp-item .jp-link');
		$('.views-row-18.buy-button').insertAfter('.views-row-18.jp-item .jp-link');
		$('.views-row-19.buy-button').insertAfter('.views-row-19.jp-item .jp-link');
		$('.views-row-20.buy-button').insertAfter('.views-row-20.jp-item .jp-link');
		
		
	}
};


/**
 * Responsive menu
 */	  
Drupal.behaviors.menuRespond = {
	attach: function() {
		$('#block-system-main-menu').once('menuRespond', function () {
			var widthSmallMobile = window.matchMedia('only screen and (max-width: 44em)');
				
			if (widthSmallMobile.matches == true) {
				$('.menu li').hide();
				
				$('#block-system-main-menu').prepend('<div class="menu-icon close"><div class="menu-button">Menu</div></div>');

				$('.menu-icon').click(function() {
					$('.menu li').slideToggle('slow');
					$('.menu-icon').toggleClass('open');	
					$('.menu-icon').toggleClass('close');
				});
			}
		});
	}
};

/**
 * Homepage Banner
 */	  
Drupal.behaviors.homeBanner = {
	attach: function() {
	
		$('.slide2').hide();
		$('.slide3').hide();
		$('.slide4').hide();
		$('#block-views-kpi-block-block-1').hide();
		
		$.fn.typeOut = function( options ){
    
        return this.each(function() {
            
            var el = $(this),
                tags = /(<\/?\w+(?:(?:\s+\w+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/gim,
                entities = /(&#?[a-z0-9]+;)/gim,
                settings = $.extend( {
                    delay : 120,
                    preserve : false,
                    marker : '_'
                }, options),
                html = (function(){
                    var temp = el.html().trim().split(tags),
                        html = [],
                        x = 0;
                    temp.map(function(v,i){
                        if(v.indexOf('<') < 0){
                           temp[i] = v.split(entities);
                           temp[i].map(function(v,i){
                               if(v.indexOf('&') < 0){
                                   v = v.split('');
                                   v.map(function(v){
                                       if(v != '')
                                           html.push(v);
                                   });
                               } else {
                                   html.push(v);
                               }                           
                           });
                        } else {
                            if(temp[i] != '')
                                html.push(temp[i]);
                        }
                    });
                    return html;
                })(),
                step = function(num){
                    el.html(el.html().slice(0,-1)+html[num]+settings.marker);
                    num = num + 1;
                    if(num < html.length){
                        setTimeout(function(){
                           step(num);
                        }, settings.delay);
                    } else {
                        el.html(el.html().slice(0,-1));
                    }
                };
			 settings.marker = (settings.marker != '') ? settings.marker : ' '; 
					html = (settings.preserve) ? html : el.text().split('');
					el.html('');
					if(html.length >= 1)
						step(0);
        
		});
		};
		(function($){
			$.fn.showdelay = function(){
					var delay = 0;
					return this.each(function(){
					 $(this).delay(delay).fadeIn(400);
					 delay += 400;
				});
			};
		})(jQuery);
		function textPrint(callback) {
			setTimeout(function(){$('.text2').typeOut();}, 100);
			setTimeout(function(){$('.slide1').fadeOut(800);}, 6000);
			setTimeout(function(){$('.slide2').fadeIn();
			$('.slide2').children('img').addClass('active');
			$('.slide2').children('img').addClass('delay');
			}, 6000);
			setTimeout(function(){$('.delay').showdelay();}, 6000);
			setTimeout(function(){$('.slide2').fadeOut(800);}, 15000);
			setTimeout(function(){$('.slide3').fadeIn(800);
			$('.mrbman').hide();
			$('.pptext ').hide();
			$('.pplogo').hide();
			}, 16000);
			setTimeout(function(){$('.mrbman').fadeIn(800);}, 17000);
			setTimeout(function(){$('.pptext').show().typeOut();}, 18000);
			setTimeout(function(){$('.pplogo').fadeIn(800);}, 27000);
			setTimeout(function(){$('.slide3').fadeOut(800);}, 29000);
			setTimeout(function(){$('.slide4').fadeIn(800);
			$('.badges').children('img').addClass('active');
			$('.badges').children('img').addClass('delay');
			$('.xpintro').hide();
			$('.xppoints').hide();
			}, 30000);
			setTimeout(function(){$('.delay').showdelay();}, 30100);
			setTimeout(function(){$('.xpintro').show().typeOut();}, 32000);
			setTimeout(function(){$('.xppoints').fadeIn(800);}, 38000);
			setTimeout(function(){$('.slide4').fadeOut(1000);}, 40000);
			setTimeout(function(){$('#block-block-1').hide();}, 41000);
			setTimeout(function(){$('#block-views-kpi-block-block-1').fadeIn(800);}, 41000);
		}
		textPrint();
	}
};

})(jQuery);
