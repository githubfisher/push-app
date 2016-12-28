<?php
namespace Admin\Controller;
use Think\Controller;

class LoginController extends Controller{
	public function _initialize(){

	}
	public function index(){
		$this->assign('title','登录--乐兔推广系统');
		$this->display();
	}
	public function login(){
		logger('登录开始');
		// $usr = var_export($_REQUEST,TRUE); //debug
		if(IS_AJAX){
			$name = $_POST['username'];
			$pwd = $_POST['password'];
			logger("APP会员--".$name."--请求登录-->");
			$user = D('app_user');
			$where = array(
				'username' => $name,
				'password' => $pwd
			);
			$result = $user->where($where)->find();
			if($result){
				session('name',$name);
				$data['status'] = 1;
				$data['info'] = '登录成功!';
				logger("登录成功！\n");
				$this->ajaxReturn($data);
			}else{
				$data['status'] = 0;
				$data['info'] = '用户名或密码错误，登录失败！!';
				logger("用户名或密码错误，登录失败！\n");
				$this->ajaxReturn($data);
			}

		}else{
			$data['status'] = 3;
			$data['info'] = '未收到任何信息，登录失败!';
			logger("未收到任何信息，登录失败!\n");
			$this->ajaxReturn($data);
		}
	}
	public function redirect(){
		$this->assign('title','请登录--乐兔推广系统');
		$this->display();
	}
	public function logout(){
		session('name',NULL);
		$this->redirect("{:U('Admin/login/index')}",array(),0.1,'退出');
	}
}