<?php

    //    複数でも出来る
    print('お名前は「' . htmlspecialchars($_REQUEST['my_name'] , ENT_QUOTES) . ' 」さんですね。私は「Kota」です。よろしくお願いします。($_REQUEST)使用<br>');
    print('なるほど 「' . htmlspecialchars($_GET['food'] , ENT_QUOTES ) . '」 が好きなんですね。($_GET)使用<br>');
    print('へー 「' . htmlspecialchars($_REQUEST['color'] , ENT_QUOTES ) . '」 が好きなんですか、いいですね($_REQUEST)使用<br>');
    print('奇遇ですね 「' . htmlspecialchars($_GET['message'] , ENT_QUOTES ) . '」 私もその言葉は嫌いです(-_-) ($_GET)使用<br>');

?>
