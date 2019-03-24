<?php
$name = htmlspecialchars($_REQUEST['my_name2'] , ENT_QUOTES ) ;
?>

<p>ようこそ <?php print($name); ?> さん</p>
<ul>
    <li><a href="#"><?php print($name); ?>さんのマイページを見る</a></li>
    <li><?php print($name); ?>さんのブログを更新する</li>
    <li><?php print($name); ?>さんのプロフィールを変更する</li>
    <li><?php print($name); ?>さんの夢を語る</li>
</ul>
