// Export selectors engine
var $$ = Dom7;
var today = new Date();
var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
// var day_pick = [];

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

	var $modal = {
			title: '开店啦',
			text: '<span class="days">31</span>',
			afterText: '<a class="button button-big button-red button-fill share"><i class="share-w icon"></i>分享</a>'+
				'<a class="sign sign-1"><i class="list-w icon"></i></a>'+
				'<img class="note note-1" src="img/store-open-1.png">'+
				'<img class="note note-2" src="img/store-open-2.png">'+
				'<a class="sign sign-2" href="operations.html" onclick="closeModal();"><img src="img/store-open-3.png"></a>'
		};

	$$(".datepicker").change(function(e) {
		var v = this.value;
		$$(".countdown-calendar .content").addClass("with-note").find(".text-red").removeClass("hidden");
		$$(".item-content").addClass("with-status with-checkbox");
	});

	$$(".button.submit").click(function() {
		myApp.modal($modal);
		$$(".modal-in").addClass("store-open");
	});

	function closeModal() {
		debugger;
		myApp.closeModal($modal);
	}
});

myApp.onPageInit('before_open', function (page) {
	var y = today.getFullYear();
	var m = today.getMonth();
	var d = today.getDate();
	var w = week[today.getDay()];
	$$(".calendar-title").html(y+"-"+(m+1)+"-"+d+" "+w);
});

myApp.onPageInit('after_close', function (page) {
	var y = today.getFullYear();
	var m = today.getMonth();
	var d = today.getDate();
	var w = week[today.getDay()];
	$$(".calendar-title").html(y+"-"+(m+1)+"-"+d+" "+w);
});

myApp.onPageInit('calendar', function (page) {
	var monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月' , '9月' , '10月', '11月', '12月'];
	var y = today.getFullYear();
	var m = today.getMonth();
	var d = today.getDate();
	var w = week[today.getDay()];
	$$(".calendar-title").html(y+"-"+(m+1)+"-"+d+" "+w);

	var calendarInline = myApp.calendar({
	    container: '#calendar-inline-container',
	    value: [new Date()],
	    direction: 'vertical', 
	    firstDay: 0,
	    toolbar: false,
	    weekHeader: false,
	    toolbarTemplate: 
	    	'<div class="picker-calendar-row days">' + 
        		'<div class="picker-calendar-day">日</div>' +
        		'<div class="picker-calendar-day">一</div>' +
        		'<div class="picker-calendar-day">二</div>' +
        		'<div class="picker-calendar-day">三</div>' +
        		'<div class="picker-calendar-day">四</div>' +
        		'<div class="picker-calendar-day">五</div>' +
        		'<div class="picker-calendar-day">六</div>' +
        	'</div>',
	    onOpen: function (p) {
	        $$('.calendar-custom-toolbar .center').text(p.currentYear+"年 "+monthNames[p.currentMonth]);
	        $$('.prev').on('click', function () {
	            calendarInline.prevMonth();
	        });
	        $$('.next').on('click', function () {
	            calendarInline.nextMonth();
	        });
	    },
	    onMonthAdd: function(p, values, displayValues) {
	    	var m = $(values).data('month');
	    	var y = $(values).data('year');
	    	$$(values).prepend("<div class='picker-calendar-title'>"+y+"年 "+monthNames[m]+"</div>");
	    },
	    onChange: function (p, values, displayValues) {
	    	console.log("onChange: "+p, values, displayValues);
	    },
	    onMonthYearChangeStart: function (p) {
	    	console.log("onMonthYearChangeStart: "+p, p.currentYear, p.currentMonth);
	        $$('.calendar-custom-toolbar .center').text(p.currentYear+"年 "+monthNames[p.currentMonth]);
	    },
	    onMonthYearChangeEnd: function (p, year, month) {
	    	console.log("onMonthYearChangeEnd: "+p, year, month);
	    },
	    onDayClick: function (p, dayContainer, year, month, day) {
	    	today.setYear(year);
	    	today.setMonth(month);
	    	today.setDate(day);
	    	var wk = week[today.getDay()];
	    	$$(".calendar-title").html(year+"-"+(Number(month)+1)+"-"+day+" "+wk);
	    	$$("a.back").click();
	    }
	});
});

myApp.onPageInit('site-detail', function (page) {
	$$("input[type='file']").change(function(){
		mainView.router.loadPage('site-image-info.html');
	});
});

myApp.onPageInit('shop-detail', function(e) {
    var mySwiper = new Swiper('.swiper-container', {
		preloadImages: false,
		lazyLoading: true,
		pagination: '.swiper-pagination'
	});
});

myApp.onPageInit('cart', function(e) {

	$$("#check-all").change(function(e){
		var chk = this.checked;
		$$(".list-block.media-list.cart").find('input[type="checkbox"]').each(function(){
			this.checked = chk;
		});
	});

	$$(".num-tool a.button").on("click", function(e) {
		var input = $(this).siblings('input');
		var val = Number(input.val());
		if($(this).hasClass('less')) {
			input.val(val-1<0?0:val-1);
		} else {
			input.val(val+1);
		}
	});
});

myApp.onPageInit('my-orders', function(e) {
	$$(".num-tool a.button").on("click", function(e) {
		var input = $(this).siblings('input');
		var val = Number(input.val());
		if($(this).hasClass('less')) {
			input.val(val-1<0?0:val-1);
		} else {
			input.val(val+1);
		}
	});
});

myApp.onPageInit('cart-confirm', function(e) {
	myApp.popup('.popup-pay');
});

