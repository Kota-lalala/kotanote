洗濯された機器はこちらです↓無事でしたか？<br>
<?php
foreach($_REQUEST['$itemKey'] as $getItems) {
    print(htmlspecialchars($getItems , ENT_QUOTES ).'<br>') ;
}
?>
