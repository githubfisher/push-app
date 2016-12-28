<?php
namespace Admin\Controller;
use Think\Controller;
class MarketingController extends Controller {
	public function _initialize(){
		// if(!session('?name')){
		// 	$this->redirect('Admin/login/redirect',array(),0.1,'请登录。。。');
		// }
		header("content-type:text/html; charset=utf-8;");
	}
    public function index(){
       $this->assign('title','乐兔推广系统');
       $this->display();
    }
    //添加新推广-设置部分
    public function new_info(){
    	$this->display();
    }
    //添加新推广-网页部分
    public function new_web(){
      $this->display();
    }
    //预览推广网页效果
    public function preview(){
        $this->display();
    }
}