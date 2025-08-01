// FAQ アコーディオン
$(function() {
  //dt（質問）をクリックしたら…
  $('.faq-list dt').on('click', function() {
    
    //クリックしたdtの、すぐ次にあるdd（答え）を
    //    スライドしながら開いたり閉じたりする
    $(this).next('dd').slideToggle();

    //クリックしたdtのクラスを付け外しする
    $(this).toggleClass('is-active');

  });






  // hamburger menu
  $(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
    $('html, body').toggleClass('is-scroll-fixed');
  });

  
  // メニューのリンクをクリックした時
  $("#nav a").on("click", function () {
    $("header").toggleClass("open");
  });
  $("#nav a").on("click", function () {
    $("header").removeClass("open");
    $('html, body').removeClass('is-scroll-fixed');
  });






  


  // fadein
    $(window).on('load scroll', function (){

// ↓↓↓ ここに index を追加します！
$('.fadeIn').each(function(index){
  
  var boxOffset = $(this).offset().top;
  var scrollPos = $(window).scrollTop();
  var wh = $(window).height();

  if(scrollPos > boxOffset - wh + 100 ){

    if(!$(this).hasClass('done')) {
      
      // ↓↓↓ 1つずつズラすための遅延時間を設定（0.3秒）
      var delay = 100; // 300ミリ秒 = 0.3秒

      // ↓↓↓ .delay() を .animate() の前に追加！
      $(this).addClass('done').delay(index * delay).animate({
        opacity: 1,
        top: 0
      }, 2000); // ← アニメーション自体の時間は2.5秒のまま

    }
  }
});









    });
    






});