// Export selectors engine
var $$ = Dom7;

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;
    if(page.name=="index") {
    	var mySwiper = new Swiper('.swiper-container', {
			preloadImages: false,
			lazyLoading: true,
			pagination: '.swiper-pagination'
		});
    }
});

// Initialize your app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('message', function (page) {
	// $$('.navbar').addClass('inverted');
	
	// $$("a").click(function() {
	// 	$$('.navbar').removeClass('inverted');
	// });
});

myApp.onPageInit('express', function (page) {
	// $$('.navbar').removeClass('inverted');
});