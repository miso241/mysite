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



});