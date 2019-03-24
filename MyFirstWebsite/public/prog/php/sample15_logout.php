<?php
    session_start();

    session_unset();
    header('Location:../prog-php2.html');
    exit();
?>
