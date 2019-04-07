

$(function() {

    //index.phpの新着情報への書き込み文章
    $('.newinfo-text').html('2019.4.7 Programming noteの「今のお天気なあに？」を改良しました。(v1.11です)');


    //index.phpのリリースノートへの書き込み文章
    $('.release-text').html('2019.4.7 「今のお天気なあに？」へのカードをトップページへ追加しました');

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
