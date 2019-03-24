<?php
mb_language("japanese");
mb_internal_encoding("UTF-8");

$body_from = "=======Kota message: メールテストをしていただきありがとうございます！無事見れている様ですね。良かったです。今後もたまにはこのサイトに足を運んでくださいねm(_ _)m";

if(!empty($_POST['email'])) {
    $to = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['message'];
    $from = mb_encode_mimeheader(mb_convert_encoding("Kota","JIS","UTF-8"))."<kotanote@gmail.com>";

    $success = mb_send_mail($to, $subject, "Your message: ".$body.$body_from,"From:".$from);
}
?>

<?php
if($success){
    print('送信しました');
} else {
    print('送信に失敗しました');
}
?>
