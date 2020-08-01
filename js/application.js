// JavaScript Document for Nevermind Template
// Powered by Designing Media Team

!function(i){function e(i){return i.timeInterval=setInterval(function(){i.callbackFunction(i)},i.blinkInterval),i.timeInterval}function t(t,n,l,o){if(t.mftTitleBlink[o]){var r,a,c,s={},d=(new Date).getTime();switch(t.mftTitleAltText[o]){case"none":s=n.mftTitleAltText[o];break;case"":s=n.mftTitleAltText[o];break;default:s=t.mftTitleAltText[o]}c=function(e){i(document).prop("title")==e.oldTitle?i(document).prop("title",e.newTitle):i(document).prop("title",e.oldTitle)},l[o]={oldTitle:i(document).prop("title"),newTitle:s,blinkInterval:t.mftTitleBlinkInterval[o],timeInterval:0,now:a,then:d,delta:r,callbackFunction:c},l[o].timeInterval=e(l[o])}}function n(i,e,t){i.mftTitleBlink[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}function l(t,n,l,o){if(t.mftFaviconBlink[o]){var r,a,c,s={},d={"apple-touch-icon-precomposed":i('link[rel="apple-touch-icon-precomposed"]').attr("href"),icon:i('link[rel="icon"]').attr("href"),"shortcut icon":i('link[rel="shortcut icon"]').attr("href")},f=(new Date).getTime();switch(t.mftFaviconAltIcon[o]){case"none":s=n.mftFaviconAltIcon[o];break;case"":s=n.mftFaviconAltIcon[o];break;default:s=t.mftFaviconAltIcon[o]}c=function(e){if(Object.keys(e.oldFavicon).length>0)for(var t in e.oldFavicon)e.oldFavicon.hasOwnProperty(t)&&(i('link[rel="'+t+'"]').attr("href")==e.oldFavicon[t]?i('link[rel="'+t+'"]').attr("href",e.newFavicon[t]):i('link[rel="'+t+'"]').attr("href")==e.newFavicon[t]&&i('link[rel="'+t+'"]').attr("href",e.oldFavicon[t]))},l[o]={oldFavicon:d,newFavicon:s,blinkInterval:t.mftFaviconBlinkInterval[o],timeInterval:0,now:a,then:f,delta:r,callbackFunction:c},l[o].timeInterval=e(l[o])}}function o(i,e,t){i.mftFaviconBlink[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}function r(t,n,l,o){if(t.mftTitleMarquee[o]){var r,a,c,s,d=(new Date).getTime(),f=i(document).prop("title").split("");switch(f.push(" "),t.mftTitleMarqueeDir[o]){case"left":r=function(i){i.push(i.shift())};break;case"right":r=function(i){i.unshift(i.pop())}}s=function(e){e.shifted(e.myText),i(document).prop("title",e.myText.join(""))},l[o]={shifted:r,blinkInterval:t.mftTitleMarqueeDelay[o],timeInterval:0,myText:f,now:c,then:d,delta:a,callbackFunction:s},l[o].timeInterval=e(l[o])}}function a(i,e,t){i.mftTitleMarquee[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}var c=[],s={init:function(e){var s={mftMissYou:!0,mftMissYouTitle:"Hey! I miss you!",mftMissYouFavicon:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""},mftTitleBlink:{visible:!1,hidden:!1},mftTitleBlinkInterval:{visible:1e3,hidden:1e3},mftTitleAltText:{visible:"\ufeff",hidden:"\ufeff"},mftFaviconBlink:{visible:!1,hidden:!1},mftFaviconBlinkInterval:{visible:1e3,hidden:1e3},mftFaviconAltIcon:{visible:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""},hidden:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""}},mftTitleMarquee:{visible:!1,hidden:!1},mftTitleMarqueeDir:{visible:"left",hidden:"left"},mftTitleMarqueeDelay:{visible:200,hidden:500}},d=i.extend({},s,e),f=i(document).prop("title"),v={"apple-touch-icon-precomposed":i('link[rel="apple-touch-icon-precomposed"]').attr("href"),icon:i('link[rel="icon"]').attr("href"),"shortcut icon":i('link[rel="shortcut icon"]').attr("href")},m={visible:{},hidden:{}},u={visible:{},hidden:{}},h={visible:{},hidden:{}};for(var p in d)d.hasOwnProperty(p)&&"mftMissYou"!=p&&"mftMissYouTitle"!=p&&("string"==typeof d[p]||"number"==typeof d[p]?d[p]={visible:d[p],hidden:d[p]}:i.isArray(d[p])&&(d[p]={visible:d[p][0],hidden:d[p][1]}));return d.mftTitleMarquee.visible?r(d,s,h.visible,"visible"):d.mftTitleBlink.visible&&t(d,s,m.visible,"visible"),l(d,s,u.visible,"visible"),i(document).on("visibilitychange",function(){if(i(document).prop("hidden")){if(d.mftMissYou&&(""!==d.mftMissYouTitle?i(document).prop("title",d.mftMissYouTitle):i(document).prop("title",s.mftMissYouTitle),Object.keys(d.mftMissYouFavicon).length>0))for(var e in d.mftMissYouFavicon)d.mftMissYouFavicon.hasOwnProperty(e)&&i('link[rel="'+e+'"]').attr("href",d.mftMissYouFavicon[e]);n(d,m.visible,"visible"),o(d,u.visible,"visible"),a(d,h.visible,"visible"),d.mftTitleMarquee.hidden?r(d,s,h.hidden,"hidden"):d.mftTitleBlink.hidden&&t(d,s,m.hidden,"hidden"),l(d,s,u.hidden,"hidden")}else{if(i(document).prop("title",f),Object.keys(v).length>0)for(var c in v)v.hasOwnProperty(c)&&i('link[rel="'+c+'"]').attr("href",v[c]);n(d,m.hidden,"hidden"),o(d,u.hidden,"hidden"),a(d,h.hidden,"hidden"),d.mftTitleMarquee.visible?r(d,s,h.visible,"visible"):d.mftTitleBlink.visible&&t(d,s,m.visible,"visible"),l(d,s,u.visible,"visible")}}),i(document).data("mfancytitle",{settings:d,origTitle:f,origFavicon:v,titleBlinkOptions:m,faviconBlinkOptions:u,titleMarqueeOptions:h}),c=i(document).data("mfancytitle")},update:function(e){var t=i.extend({},c.settings,e);i.mFancyTitle("destroy"),i.mFancyTitle("init",t)},destroy:function(){n(c.settings,c.titleBlinkOptions.visible,"visible"),o(c.settings,c.titleBlinkOptions.visible,"visible"),a(c.settings,c.titleBlinkOptions.visible,"visible"),n(c.settings,c.titleBlinkOptions.hidden,"hidden"),o(c.settings,c.titleBlinkOptions.hidden,"hidden"),a(c.settings,c.titleBlinkOptions.hidden,"hidden"),i.removeData(c,"mfancytitle"),this.unbind(),this.element=null}};i.mFancyTitle=function(e){return s[e]?s[e].apply(i(document),Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void i.error("Method "+e+" does not exist on jQuery.mFancyTitle "):s.init.apply(i(document),arguments)}}(jQuery);

// Mega Menu
(function($) {
 "use strict";
 	$('.dropdown-toggle').dropdownHover().dropdown();

// Tooltips
    $("[data-toggle=tooltip]").tooltip();

    $("[data-toggle=popover]")
      .popover()	  
	  
// Menu drop down effect
		$('.dropdown-toggle').dropdownHover().dropdown();
		$(document).on('click', '.fhmm .dropdown-menu', function(e) {
		  e.stopPropagation()
		})
		  
// Count Script
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
	
		$this.html(++current);
		if(current > $this.data('count')){
			$this.html($this.data('count'));
		} else {    
			setTimeout(function(){count($this)}, 50);
		}
	}        
	
	$(".stat-count").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});

// Accordion Toggle Items
   var iconOpen = 'icon-minus',
        iconClose = 'icon-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
        var $target = $(e.target)
          $target.siblings('.accordion-heading')
          .find('em').toggleClass(iconOpen + ' ' + iconClose);
          if(e.type == 'show')
              $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
          if(e.type == 'hide')
              $(this).find('.accordion-toggle').not($target).removeClass('active');
    });

// Tooltip
	$('.dm-social, .client, .buddy-members').tooltip({
		selector: "a[data-toggle=tooltip]"
	})
	
	$('.dm-social, .client, .buddy-members').tooltip()

// Back to Top
 jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 1) {
			jQuery('.dmtop').css({bottom:"25px"});
		} else {
			jQuery('.dmtop').css({bottom:"-100px"});
		}
	});
	jQuery('.dmtop').click(function(){
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
		return false;
});

// Carousel Widgets
	$('#myCarousel').carousel();
	$('#myCarouselV').carousel();
	$('#BlogSlider').carousel();
	
/** Form [form plugin + validation plugin]
 **************************************************************** **/
function _form() {


	/** Form Validate 
		LOAD PLUGIN ONLY!
	 ************************ **/
	if(jQuery('form.validate-plugin').length > 0) {

		loadScript(plugin_path + 'form.validate/jquery.form.min.js', function() {
			loadScript(plugin_path + 'form.validate/jquery.validation.min.js');
		});

	}



	/** Form Validate
	 ************************ **/
	if(jQuery('form.validate').length > 0) {

		loadScript(plugin_path + 'form.validate/jquery.form.min.js', function() {
			loadScript(plugin_path + 'form.validate/jquery.validation.min.js', function() {

				if(jQuery().validate) {

					jQuery('form.validate').each(function() {

						var _t 			= jQuery(this),
							_Smessage 	= _t.attr('data-success') 			|| "Successfully! Thank you!",
							_Cmessage 	= _t.attr('data-captcha') 			|| "Invalid Captcha!",
							_Tposition 	= _t.attr('data-toastr-position') 	|| "top-right",
							_Ttype	 	= _t.attr('data-toastr-type') 		|| "success";
							_Turl	 	= _t.attr('data-toastr-url') 		|| false;

						// Append 'is_ajax' hidden input field!
						_t.append('<input type="hidden" name="is_ajax" value="true" />');

						_t.validate({
							submitHandler: function(form) {

								// Show spin icon
								jQuery(form).find('.input-group-addon').find('.fa-envelope').removeClass('fa-envelope').addClass('fa-refresh fa-spin');

								jQuery(form).ajaxSubmit({

									target: 	jQuery(form).find('.validate-result').length > 0 ? jQuery(form).find('.validate-result') : '',

									error: 		function(data) { 
										_toastr("Sent Failed!",_Tposition,"error",false);
									},

									success: 	function(data) {
										var data = data.trim();

										// SMTP ERROR
										if(data == '_failed_') {
											_toastr("SMTP ERROR! Please, check your config file!",_Tposition,"error",false);
										}

										// CAPTCHA ERROR
										else if(data == '_captcha_') {
											_toastr("Invalid Captcha!",_Tposition,"error",false);


										// SUCCESS
										} else {

											// Remove spin icon
											jQuery(form).find('.input-group-addon').find('.fa-refresh').removeClass('fa-refresh fa-spin').addClass('fa-envelope');

											// Clear the form
											jQuery(form).find('input.form-control').val('');

											// Toastr Message
											_toastr(_Smessage,_Tposition,_Ttype,_Turl);
										
										}
									}
								});

							}
						});

					});

				}

			});
		});

	}




	/** Masked Input
	 ************************ **/
	var _container = jQuery('input.masked');
	if(_container.length > 0) {

		loadScript(plugin_path + 'form.masked/jquery.maskedinput.js', function() {
			
			_container.each(function() {
			
				var _t 				= jQuery(this);
					_format 		= _t.attr('data-format') 		|| '(999) 999-999999',
					_placeholder 	= _t.attr('data-placeholder') 	|| 'X';

				jQuery.mask.definitions['f'] = "[A-Fa-f0-9]";
				_t.mask(_format, {placeholder:_placeholder});

			});
			
		});

	}

}
	
// Preloader
	$(window).load(function() {
		$('#status').delay(100).fadeOut('slow');
		$('#preloader').delay(100).fadeOut('slow');
		$('body').delay(100).css({'overflow':'visible'});
	})

})(jQuery);