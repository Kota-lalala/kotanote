<?php
//jsonのタイプ指定 無くても良い？
//header('Content-Type: application/json; charaset=utf-8');

//データベースに接続する
require('dbconnect.php');

//データベースにweatherの値を保存する
$sqlIn = sprintf('INSERT INTO main SET weather="%s"',mysqli_real_escape_string($db,$_POST['weather']));
mysqli_query($db , $sqlIn) or die(mysqli_error($db));

//データベースのweatherの点数をカウントして呼び出し、その値を返す
$count = array();
$sqlOut = 'SELECT COUNT(weather) AS cnt FROM main WHERE weather="晴れ" AND  created >= date_sub(NOW(), interval 1 hour)';
$recordSetOut = mysqli_query($db , $sqlOut);
$data = mysqli_fetch_assoc($recordSetOut);
$count[0] = $data['cnt'];
$sqlOut = 'SELECT COUNT(weather) AS cnt FROM main WHERE weather="曇り" AND  created >= date_sub(NOW(), interval 1 hour)';
$recordSetOut = mysqli_query($db , $sqlOut);
$data = mysqli_fetch_assoc($recordSetOut);
$count[1] = $data['cnt'];
$sqlOut = 'SELECT COUNT(weather) AS cnt FROM main WHERE weather="雨"   AND  created >= date_sub(NOW(), interval 1 hour)';
$recordSetOut = mysqli_query($db , $sqlOut);
$data = mysqli_fetch_assoc($recordSetOut);
$count[2] = $data['cnt'];

echo json_encode($count);



//$count = 1;
//
//$result = array();
//
//
//
//
//if(isset($_POST['weather'])){
//    $weather = $_POST['weather'];
//    $count+=1;
//    $result['weather'] = $count;
//    echo json_encode($result);
//}else{
//    echo 'FAIL TO AJAX REQUEST';
//}

//$result = array(
//    'name' => 'やっとできました',
//    'age'  => 60
//);
//
//$result = json_encode($result);
//echo $result;

//echo 'phpより';

?>
