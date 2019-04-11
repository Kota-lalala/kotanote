<?php
//ローカル開発用
//$db = mysqli_connect('localhost','root','','weather_db')
//    or die(mysqli_connect_error());
//mysqli_set_charset($db , 'utf8');

//サーバーへのアップ用
$db = mysqli_connect('mysql7078.xserver.jp','kotanote_test','9kdi38fh47dkt8','kotanote_weather')
    or die(mysqli_connect_error());
mysqli_set_charset($db , 'utf8');

?>
