
<?php
    $my_age = mb_convert_kana($_REQUEST['my_age'],'n','UTF-8');

    if(is_numeric($my_age)) {
        print($my_age . '歳');
    } else {
        print('数字でご入力ください');
    }
?>
