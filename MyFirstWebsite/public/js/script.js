

$(function() {

    //index.phpの新着情報への書き込み文章
    $('.newinfo-text').html('2019.4.13 Programming noteへ「学習しているプログラミング言語について」の記事を追加しました。');


    //index.phpのリリースノートへの書き込み文章
    $('.release-text').html('2019.4.10 「今のお天気なあに？」にalertを追加しました');

    //時間帯によって色を変える

    const d = new Date();
    const hour = d.getHours();

    if(hour >= 3 && hour < 9){
        $('.index-body').css('background-color','aliceblue');
    } else if(hour>= 10 && hour < 18){
        $('.index-body').css('background-color','lightyellow');
    } else {
        $('.index-body').css('background-color','darkgray');
    }

});
