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
  });
  