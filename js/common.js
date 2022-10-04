window.onunload=function(){};

$(function(){
        $("header .drawer").click(function(){
            $('body').toggleClass('nav-open');
            $('header .nav_bar').fadeToggle(200);
        });

        $("header li a").click(function () {
            $('body').toggleClass('nav-open');
            $('header .nav_bar').fadeToggle(200);
        });
});
