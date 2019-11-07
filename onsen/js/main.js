$(function() {
	//faqの閉会
	$('.faq__body dt').click(function() {
		$(this).next().slideToggle('fast');
	});

	//ナビを押した時のスライド
	$('.nav__item:eq(0)').click(function() {
		$('html, body').animate({scrollTop: $('#sypa__image').offset().top});
	});

	$('.nav__item:eq(1)').click(function() {
		$('html, body').animate({scrollTop: $('#ans__charm').offset().top});
	});

	$('.nav__item:eq(2)').click(function() {
		$('html, body').animate({scrollTop: $('#price').offset().top});
	});

	$('.nav__item:eq(3)').click(function() {
		$('html, body').animate({scrollTop: $('#photo__rooms').offset().top});
	});

	$('.nav__item:eq(4)').click(function() {
		$('html, body').animate({scrollTop: $('#customer').offset().top});
	});

	$('.nav__item:eq(5)').click(function(){
		$('html, body').animate({scrollTop: $('#faq').offset().top});
	});

	$('.nav__item:eq(6)').click(function() {
		$('html, body').animate({scrollTop: $('#access__title').offset().top},);
	});

	$('.header__apo, .nav__form').click(function() {
		$('html, body').animate({scrollTop: $('#contact__title').offset().top});
	});

});

//フォトギャラリーのホバー時画像切り替え
function myChgPic01(myPicURL) {
  document.images["myBigImage01"].src = myPicURL;
}
function myChgPic02(myPicURL) {
  document.images["myBigImage02"].src = myPicURL;
}
function myChgPic03(myPicURL) {
  document.images["myBigImage03"].src = myPicURL;
}
function myChgPic04(myPicURL) {
  document.images["myBigImage04"].src = myPicURL;
}


