<?php
$myId = $_POST['my_id'];
$password = $_POST['password'];
if(isset($_POST['save'])){
    $save = $_POST['save'];
} else {
    $save = 'off';
}


//Cookieに保存
if($save == 'on') {
    setcookie('my_id',$myId,time()+60*60*24*14);
    $message = 'ログイン情報を記録しました';
} else {
    setcookie('my_id','');
    $message = '記録しませんでした';
}
?>

<p><?php echo $message; ?></p>
<p><a href="../prog-php2.html">戻る</a></p>
