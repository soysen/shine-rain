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
    if(page.name=="change-pw") {
  //   	var modal = new Modal({
		// 	title: "为了您的账户安全! <br/>请修改密码!",
		// 	text: '<form>' +
		// 		'<input type="password" name="password" />' +
		// 		'<input type="password" name="password_comfirmation" />' +
		// 		'<button type="submit">保存</button>' +
		// 		'</form>'
		// });
    }
});

// Initialize your app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('change-pw', function (page) {

});
