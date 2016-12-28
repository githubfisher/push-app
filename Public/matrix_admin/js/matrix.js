
$(document).ready(function(){

	
	
	// === Sidebar navigation === //
	
	$('.submenu > a').click(function(e)
	{
		e.preventDefault();
		var submenu = $(this).siblings('ul');
		var li = $(this).parents('li');
		var submenus = $('#sidebar li.submenu ul');
		var submenus_parents = $('#sidebar li.submenu');
		if(li.hasClass('open'))
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenu.slideUp();
			} else {
				submenu.fadeOut(250);
			}
			li.removeClass('open');
		} else 
		{
			if(($(window).width() > 768) || ($(window).width() < 479)) {
				submenus.slideUp();			
				submenu.slideDown();
			} else {
				submenus.fadeOut(250);			
				submenu.fadeIn(250);
			}
			submenus_parents.removeClass('open');		
			li.addClass('open');	
		}
	});
	
	var ul = $('#sidebar > ul');
	
	$('#sidebar > a').click(function(e)
	{
		e.preventDefault();
		var sidebar = $('#sidebar');
		if(sidebar.hasClass('open'))
		{
			sidebar.removeClass('open');
			ul.slideUp(250);
		} else 
		{
			sidebar.addClass('open');
			ul.slideDown(250);
		}
	});
	
	// === Resize window related === //
	$(window).resize(function()
	{
		if($(window).width() > 479)
		{
			ul.css({'display':'block'});	
			$('#content-header .btn-group').css({width:'auto'});		
		}
		if($(window).width() < 479)
		{
			ul.css({'display':'none'});
			fix_position();
		}
		if($(window).width() > 768)
		{
			$('#user-nav > ul').css({width:'auto',margin:'0'});
            $('#content-header .btn-group').css({width:'auto'});
		}
	});
	
	if($(window).width() < 468)
	{
		ul.css({'display':'none'});
		fix_position();
	}
	
	if($(window).width() > 479)
	{
	   $('#content-header .btn-group').css({width:'auto'});
		ul.css({'display':'block'});
	}
	
	// === Tooltips === //
	$('.tip').tooltip();	
	$('.tip-left').tooltip({ placement: 'left' });	
	$('.tip-right').tooltip({ placement: 'right' });	
	$('.tip-top').tooltip({ placement: 'top' });	
	$('.tip-bottom').tooltip({ placement: 'bottom' });	
	
	// === Search input typeahead === //
	$('#search input[type=text]').typeahead({
		source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons','Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs','Widgets'],
		items: 4
	});
	
	// === Fixes the position of buttons group in content header and top user navigation === //
	function fix_position()
	{
		var uwidth = $('#user-nav > ul').width();
		$('#user-nav > ul').css({width:uwidth,'margin-left':'-' + uwidth / 2 + 'px'});
        
        var cwidth = $('#content-header .btn-group').width();
        $('#content-header .btn-group').css({width:cwidth,'margin-left':'-' + uwidth / 2 + 'px'});
	}
	
	// === Style switcher === //
	$('#style-switcher i').click(function()
	{
		if($(this).hasClass('open'))
		{
			$(this).parent().animate({marginRight:'-=190'});
			$(this).removeClass('open');
		} else 
		{
			$(this).parent().animate({marginRight:'+=190'});
			$(this).addClass('open');
		}
		$(this).toggleClass('icon-arrow-left');
		$(this).toggleClass('icon-arrow-right');
	});
	
	$('#style-switcher a').click(function()
	{
		var style = $(this).attr('href').replace('#','');
		$('.skin-color').attr('href','css/maruti.'+style+'.css');
		$(this).siblings('a').css({'border-color':'transparent'});
		$(this).css({'border-color':'#aaaaaa'});
	});
	
	// $('.lightbox_trigger').click(function(e) {
		
	// 	e.preventDefault();
		
	// 	var image_href = $(this).attr("href");
		
	// 	if ($('#lightbox').length > 0) {
			
	// 		$('#imgbox').html('<img src="' + image_href + '" /><p><i class="icon-remove icon-white"></i></p>');
		   	
	// 		$('#lightbox').slideDown(500);
	// 	}
		
	// 	else { 
	// 		var lightbox = 
	// 		'<div id="lightbox" style="display:none;">' +
	// 			'<div id="imgbox"><img src="' + image_href +'" />' + 
	// 				'<p><i class="icon-remove icon-white"></i></p>' +
	// 			'</div>' +	
	// 		'</div>';
				
	// 		$('body').append(lightbox);
	// 		$('#lightbox').slideDown(500);
	// 	}
		
	// });
	$('.lightbox_trigger').click(function(e) {
		
		e.preventDefault();
		
		var image_href = $(this).attr("href");
		
		if ($('#lightbox').length > 0) {
			
			$('#imgbox').html('<img src="' + image_href + '" /><p><i class="icon-remove icon-white"></i></p>');
		   	
			$('#lightbox').slideDown(500);
			$('#back').slideDown(500);
		}
		
		else { 
			var chaourl = 'http://www.eecc.com.cn/about.html';
			var chaourld = 'http://www.eecc.com.cn/';
			var lightbox = 
			'<div id="back"></div><div id="lightbox" style="display:none;">' +
				'<div id="pre_top" class="opacity_pc">' + 
					'<p><i class="icon-remove icon-white"></i></p>' +
				'</div>' + '<div id="pre_center"><div class="pre_center_div opacity_pc" id="center_one"></div><div class="pre_center_div" id="center_two">'+
				'<div id="i_top"></div>'+
				'<div id="i_middle">'+
					'<div id="a_left"></div>'+
					'<div id="a_middle"><iframe id="precontent" name="precontent" frameborder="0" scrolling="yes" width="100%" height="100%" src="'+ chaourld +'"></iframe></div>'+
					'<div id="a_right"></div>'+
					'</div><div id="i_foot"></div></div><div class="pre_center_div opacity_pc" id="center_there"></div></div>'+
				'<div id="pre_footer" class="opacity_pc"><a href="http://ceshi.wxwkf.com/index.php/Home/Intro/index" target="precontent" title="ceshibaidu">营销页面</a>/<a href="http://www.baidu.com" target="precontent" title="ceshibaidu">百度</a><br/>'+
				'<a href="javascript:void(0);" onclick="huan();">切换</a></div>'	+
			'</div>'+
			'<div id="lightbox_m" style="display:none;">' +
				'<div id="mp_top" class="opacity_mobile">' + 
					'<p><i class="icon-remove icon-white"></i></p>' +
				'</div>' + '<div id="mp_center"><div class="mp_center_div opacity_mobile" id="m_center_one" ></div><div class="mp_center_div" id="m_center_two">'+
				'<div id="m_top"></div>'+
				'<div id="m_middle">'+
					'<div id="ma_left"></div>'+
					'<div id="ma_middle"><iframe id="mprecontent" name="mprecontent" frameborder="0" scrolling="yes" width="100%" height="100%" src="' + chaourl + '"></iframe></div>'+
					'<div id="ma_right"></div>'+
					'</div><div id="m_foot"></div></div><div class="mp_center_div opacity_mobile" id="m_center_there"></div></div>'+
				'<div id="mp_footer" class="opacity_mobile"><a href="http://ceshi.wxwkf.com/index.php/Home/Intro/index" target="mprecontent" title="ceshibaidu">营销页面</a>/<a href="' + url2 + '" target="mprecontent" title="ceshibaidu">系统首页</a><br/>'+
				'<a href="javascript:void(0);" onclick="qie();">切换</a></div>'	+
			'</div>';
				
			$('body').append(lightbox);
			$('#lightbox').slideDown(500);
		}
		
	});
	// $('.lightbox_trigger').click(function(e) {
		
	// 	e.preventDefault();
		
	// 	var image_href = $(this).attr("href");
		
	// 	if ($('#lightbox').length > 0) {
			
	// 		$('#imgbox').html('<img src="' + image_href + '" /><p><i class="icon-remove icon-white"></i></p>');
		   	
	// 		$('#lightbox').slideDown(500);
	// 	}
		
	// 	else { 
	// 		var lightbox = 
	// 		'<div id="lightbox" style="display:none;">' +
	// 			'<div id="mp_top">' + 
	// 				'<p><i class="icon-remove icon-white"></i></p>' +
	// 			'</div>' + '<div id="mp_center"><div class="mp_center_div" id="m_center_one">222</div><div class="mp_center_div" id="m_center_two">'+
	// 			'<div id="m_top"></div>'+
	// 			'<div id="m_middle">'+
	// 				// '<div id="ma_left"></div>'+
	// 				'<div id="ma_middle"><iframe id="mprecontent" name="mprecontent" frameborder="0" scrolling="yes" width="100%" height="100%"></iframe></div>'+
	// 				// '<div id="ma_right"></div>'+
	// 				'</div><div id="m_foot"></div></div><div class="mp_center_div" id="m_center_there">4444</div></div>'+
	// 			'<div id="mp_footer"><a href="http://ceshi.wxwkf.com/index.php/Home/Intro/index" target="mprecontent" title="ceshibaidu">营销页面</a>/<a href="' + url2 + '" target="mprecontent" title="ceshibaidu">系统首页</a>/<a href="http://www.mi.com" target="mprecontent">小米</a></div>'	+
	// 		'</div>';
				
	// 		$('body').append(lightbox);
	// 		$('#lightbox').slideDown(500);
	// 	}
		
	// });

	$('#pre_top').live('click', function() { 
		$('#lightbox').hide(200);
		$('#back').hide(200);
	});
	$('#mp_top').live('click', function() { 
		$('#lightbox_m').hide(200);
		$('#back').hide(200);
	});
});

