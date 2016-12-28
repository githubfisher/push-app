<?php
namespace Admin\Controller;
use Think\Controller;
class AccountController extends Controller {
	public function _initialize(){
		// if(!session('?name')){
		// 	$this->redirect('Admin/login/redirect',array(),0.1,'请登录。。。');
		// }
		header("content-type:text/html; charset=utf-8;");
	}
    public function index(){
       $this->assign('title','首页--乐兔推广系统');
       $this->display();
    }
}