$(function() {

    var count = 3;

    var weatherSize = {
        sunny : 33,
        cloudy : 33,
        rain : 33,
    }

    var weatherCount = {
        sunny : 1,
        cloudy : 1,
        rain : 1,
    };

    $('#weather-sunny').css('width',weatherSize['sunny']+'%');
    $('#weather-cloudy').css('width',weatherSize['cloudy']+'%');
    $('#weather-rain').css('width',weatherSize['rain']+'%');

    $('#weather-sunny').click(function(){
        weatherCount['sunny']+=1;
        count+=1;
        var tmp = weatherCount['sunny']/count;
        weatherSize['sunny']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['sunny']*=100;
        tmp = weatherCount['cloudy']/count;
        weatherSize['cloudy']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['cloudy']*=100;
        tmp = weatherCount['rain']/count;
        weatherSize['rain']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['rain']*=100;
        $('#weather-sunny').css('width',weatherSize['sunny']+'%');
        $('#weather-cloudy').css('width',weatherSize['cloudy']+'%');
        $('#weather-rain').css('width',weatherSize['rain']+'%');
    });

    $('#weather-cloudy').click(function(){
        weatherCount['cloudy']+=1;
        count+=1;
        var tmp = weatherCount['sunny']/count;
        weatherSize['sunny']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['sunny']*=100;
        tmp = weatherCount['cloudy']/count;
        weatherSize['cloudy']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['cloudy']*=100;
        tmp = weatherCount['rain']/count;
        weatherSize['rain']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['rain']*=100;
        $('#weather-sunny').css('width',weatherSize['sunny']+'%');
        $('#weather-cloudy').css('width',weatherSize['cloudy']+'%');
        $('#weather-rain').css('width',weatherSize['rain']+'%');
    });

    $('#weather-rain').click(function(){
        weatherCount['rain']+=1;
        count+=1;
        var tmp = weatherCount['sunny']/count;
        weatherSize['sunny']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['sunny']*=100;
        tmp = weatherCount['cloudy']/count;
        weatherSize['cloudy']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['cloudy']*=100;
        tmp = weatherCount['rain']/count;
        weatherSize['rain']=Math.floor( tmp * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ;
        weatherSize['rain']*=100;
        $('#weather-sunny').css('width',weatherSize['sunny']+'%');
        $('#weather-cloudy').css('width',weatherSize['cloudy']+'%');
        $('#weather-rain').css('width',weatherSize['rain']+'%');
    });

});


//$(this).css('width','10%');
//$('h1').html('2019.4.3 「Twitter風」の記事へ追記をしました。');
