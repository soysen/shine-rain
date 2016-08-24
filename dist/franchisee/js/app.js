// Export selectors engine
var $$ = Dom7;
var today = new Date();

function pickerOpt(id) {
	return {
	    input: id,
	    rotateEffect: true,
	    toolbarTemplate: 
	        '<div class="toolbar data-picker">' +
	            '<div class="toolbar-inner">' +
	                '<div class="left">' +
	                    '<a href="#" class="link close-picker">取消</a>' +
	                '</div>' +
	                '<div class="center">' +
	                    '选择日期' +
	                '</div>' +
	                '<div class="right">' +
	                    '<a href="#" class="link close-picker">确定</a>' +
	                '</div>' +
	            '</div>' +
	        '</div>',
	    value: [today.getFullYear(), today.getMonth(), today.getDate()],
	    onChange: function (picker, values, displayValues) {
	        var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
	        if (values[1] > daysInMonth) {
	            picker.cols[1].setValue(daysInMonth);
	        }
	    },
	    formatValue: function (p, values, displayValues) {
	    	return values[0] + '.' + (Number(values[1])+1) + '.' + values[2];
	    },
	    cols: [
	        // Years
	        {
	            values: (function () {
	                var arr = [];
	                for (var i = 1950; i <= 2030; i++) { arr.push(i); }
	                return arr;
	            })(),
	            displayValues: (function() {
	            	var arr = [];
	                for (var i = 1950; i <= 2030; i++) { arr.push(i + " 年"); }
	                return arr;
	            })()
	        },
	        // Months
	        {
	            values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
	            displayValues: ('01 月,02 月,03 月,04 月,05 月,06 月,07 月,08 月,09 月,10 月,11 月,12 月').split(','),
	            textAlign: 'center'
	        },
	        // Days
	        {
	        	values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' '),
	            displayValues: ('1 日,2 日,3 日,4 日,5 日,6 日,7 日,8 日,9 日,10 日,11 日,12 日,13 日,14 日,15 日,16 日,17 日,18 日,19 日,20 日,21 日,22 日,23 日,24 日,25 日,26 日,27 日,28 日,29 日,30 日,31 日').split(','),
	            textAlign: 'center'
	       	}
	    ]
	};
	// body...
}

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

myApp.onPageInit('schedule-plan', function (page) {

	var dp_1 = myApp.picker(pickerOpt("#datepicker-11"));
	var dp_2 = myApp.picker(pickerOpt("#datepicker-12"));
	var dp_3 = myApp.picker(pickerOpt("#datepicker-13"));
	var dp_4 = myApp.picker(pickerOpt("#datepicker-14"));
	var dp_5 = myApp.picker(pickerOpt("#datepicker-15"));
	var dp_6 = myApp.picker(pickerOpt("#datepicker-16"));
	var dp_7 = myApp.picker(pickerOpt("#datepicker-17"));

});

myApp.onPageInit('schedule-self', function (page) {

	var dp_1 = myApp.picker(pickerOpt("#datepicker-21"));
	var dp_2 = myApp.picker(pickerOpt("#datepicker-22"));
	var dp_3 = myApp.picker(pickerOpt("#datepicker-23"));
	var dp_4 = myApp.picker(pickerOpt("#datepicker-24"));
	var dp_5 = myApp.picker(pickerOpt("#datepicker-25"));
	var dp_6 = myApp.picker(pickerOpt("#datepicker-26"));
	var dp_7 = myApp.picker(pickerOpt("#datepicker-27"));

	$$(".datepicker").change(function(e) {
		var v = this.value;
		$$(".countdown-calendar .content").addClass("with-note").find(".text-red").removeClass("hidden");
		$$(".item-content").addClass("with-status with-checkbox");
	});

	$$(".button.submit").click(function() {
		myApp.modal({
			title: '开店啦',
			text: '<span class="days">31</span>',
			afterText: '<a class="button button-big button-red button-fill share"><i class="share-w icon"></i>分享</a>'+
				'<a class="sign sign-1"><i class="list-w icon"></i></a>'+
				'<img class="note note-1" src="img/store-open-1.png">'+
				'<img class="note note-2" src="img/store-open-2.png">'+
				'<a class="sign sign-2" href=""><img src="img/store-open-3.png"></a>'
		});

		$$(".modal-in").addClass("store-open");

	});
});


myApp.onPageInit('site-detail', function (page) {
	
	$$("input[type='file']").change(function(){
		mainView.router.loadPage('site-image-info.html');
	});

});
