  //스크롤 내리면 나오는 탑버튼
  $(window).scroll(function(){
    if($(this).scrollTop()>70){
        $(".top_box").fadeIn(1000);
    }else{
        $(".top_box").fadeOut('slow');
    }
});

