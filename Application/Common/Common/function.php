<?php
// 日志函数
function logger($log_content){     
    $max_size = 1000000;   
    $log_filename = "log.txt";      
    if(file_exists($log_filename) && (abs(filesize($log_filename)) > $max_size)){
        unlink($log_filename);
    }
    //写入日志，内容前加上时间， 后面加上换行， 以追加的方式写入
    file_put_contents($log_filename, date('Y-m-d H:i:s')." ".$log_content." \r\n", FILE_APPEND);   
}
?>