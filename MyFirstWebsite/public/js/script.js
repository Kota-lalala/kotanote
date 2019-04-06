

$(function() {

    //index.phpの新着情報への書き込み文章
    $('.newinfo-text').html('2019.4.6 Programming noteへ「今のお天気なあに？」を改良しました。<br>2019.4.6 Programming noteへ「SQL学習済み内容の吐き出し部屋」の(書きかけ)記事へ追記しました。<br>2019.4.6 Music noteへ「BOKE」〜CIKI〜を追加しました。');


    //index.phpのリリースノートへの書き込み文章
    $('.release-text').html('2019.4.6 「今のお天気なあに？」を改良しました。(PHP&jQuery&MySQL)');

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