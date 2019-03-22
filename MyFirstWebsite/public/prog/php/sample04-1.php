<?php
//    REQUEST
    print('お名前: ' . htmlspecialchars($_REQUEST['my_name'] , ENT_QUOTES) . ' さんですね($_REQUEST)使用<br>');
    //    GET
    print('お名前: ' . htmlspecialchars($_GET['my_name'] , ENT_QUOTES ) . ' さんですね($_GET)使用<br>');
?>
