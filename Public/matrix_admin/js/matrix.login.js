
$(document).ready(function(){

	var login = $('#loginform');
	var recover = $('#recoverform');
	var loginbox = $('#loginbox');
    var userbox = $('#loginok');
	var speed = 400;

	$('#to-recover').click(function(){ //忘记密码
		
		$("#loginform").slideUp();
		$("#recoverform").fadeIn();
	});
	$('#to-login').click(function(){ //返回登录
		
		$("#recoverform").hide();
		$("#loginform").fadeIn();
	});
	$('#to-sply').click(function(e){ //提交电子邮箱
        //alert('sply_form'); //debug
        var sply_email = $('#splyemail');
        if(sply_email.val() == ''){
            loginbox.effect('shake');
            return false;
        }else{
            //alert('ajax_sply_email'); //debug
            e.preventDefault();
            loginbox.animate({'top':'+=100px','opacity':'0'},250,function(){
                $('.user_name').text("提交成功！");
                userbox.animate({'top':"+=75px",'opacity':'1'},250,function(){
                    setTimeout(function(){
                        window.location.href = url;
                    },600);
                });
            });
        }
    });
	
	$('#login-to').click(function(e){  //登录
		//alert('hello_login'); //debug
		var thisForm = $(this); 
        var userinput = $('#username');
        var passinput = $('#password');
        if(userinput.val() == '' || passinput.val() == '') {
        	//alert(userinput.val());  //debug
            // highlight_error(userinput);
            // highlight_error(passinput);
            loginbox.effect('shake');
            //alert('filed');//debug
            return false;
        } else {
            e.preventDefault();
            loginbox.animate({'top':'+=100px','opacity':'0'},250,function(){
                $('.user_name').text(userinput.val());
                userbox.animate({'top':"+=105px",'opacity':'1'},250,function(){
                    setTimeout(function(){
                        window.location.href = url;
                    },600);
                });
            }); 

        	//alert('ajax_login'); //debug
            //AJAX发送用户输入信息到登录控制器
            // $.post("login",{username:userinput.val(),password:passinput.val()},function(data){
            //     if(data.status == 1){
            //         e.preventDefault();
            //         loginbox.animate({'top':'+=100px','opacity':'0'},250,function(){
            //             $('.user_name').text(userinput.val());
            //             userbox.animate({'top':"+=105px",'opacity':'1'},250,function(){
            //                 setTimeout(function(){
            //                     window.location.href = url;
            //                 },600);
            //             });
            //         });
            //         return true;
            //     }else{
            //          $('.login-message').text(data.info);
            //         //alert(data.info);
            //         //window.location.reload();
            //     }
            // });
        }
	});
    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });         
    }
});
function highlight_error(el) {
    if(el.val() == '') {
        el.parent().addClass('has-error');
    } else {
        el.parent().removeClass('has-error');
    }
}