// Initialize your app
var myApp = new Framework7();
var today = new Date();

// Export selectors engine
var $$ = Dom7;

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
	    	return values[0] + '.' + values[1] + '.' + values[2];
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

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('schedule', function (page) {
	
	var dp_1 = myApp.picker(pickerOpt("#datepicker-1"));
	var dp_2 = myApp.picker(pickerOpt("#datepicker-2"));
	var dp_3 = myApp.picker(pickerOpt("#datepicker-3"));
	var dp_4 = myApp.picker(pickerOpt("#datepicker-4"));
	var dp_5 = myApp.picker(pickerOpt("#datepicker-5"));
	var dp_6 = myApp.picker(pickerOpt("#datepicker-6"));
	var dp_7 = myApp.picker(pickerOpt("#datepicker-7"));

});

myApp.onPageInit('site-option', function (page) {

	$$(document).on('navbarInit', function (e) {
		console.log(e);
		var navbar = e.detail.navbar;
		var page = e.detail.page
	});	

	var myPhotoBrowserPopupDark = myApp.photoBrowser({
	    photos : [
	        'http://lorempixel.com/1024/1024/sports/1/',
	        'http://lorempixel.com/1024/1024/sports/2/',
	        'http://lorempixel.com/1024/1024/sports/3/',
	    ],
	    theme: 'dark',
	    type: 'popup'
	});
	$$('.pb-popup').on('click', function () {
	    myPhotoBrowserPopupDark.open();
	}); 

});


myApp.onPageInit('buy-list', function (page) {
	
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

myApp.onPageInit('share-selector', function (page) {
	var btn_toggle = 0;
	
	$$(".btn-multi-select").on('click', function(){
		
		btn_toggle = !btn_toggle
		
		$(this).text(btn_toggle==0?"多选":"确定");
		$('.list-block.media-list.selector').find(".item-content").toggleClass("selector");

		if(btn_toggle==0 && $("input[type='checkbox']:checked").length ) {
			myApp.modal({
				title: '发送给',
				afterText: '<div class="item-content">'+
						'<div class="item-image"><img src="http://placehold.it/48x48" /></div>'+
						'<div class="item-title-row">'+
							'<div class="item-title">一个小可爱</div>'+
							'<div class="item-text">南京市 新街口广场的东南侧</div>'+
						'</div>'+
					'</div>'+
					'<div class="item-title">留言</div>'+
					'<div><input type="text"></div>',
				buttons: [
			      {
			        text: '取消',
			        onClick: function() {
			          // myApp.alert('You clicked first button!')
			        }
			      },
			      {
			        text: '<span class="text-red">发送</span>',
			        onClick: function() {
			          // myApp.alert('You clicked second button!')
			        }
			      }]
			});
		}

	});
});

myApp.onPageInit('order-list', function (page) {
	
	$('#list-chart').highcharts({
        chart: {
            type: 'line',
            height: 160,
            color: "#FFF",
            backgroundColor: 'transparent',
        },
        colors: ['#FFFFFF'],
        legend: { enable: false },
        title: { text: "" },
        subtitle: { text: "" },
		credits: { enabled: false },
		legend:	 { enabled: false },
		tooltip: { enabled: false }, 
		exporting: { enabled: false },
        yAxis: {
        	gridLineWidth: 0, minorGridLineWidth: 0,
			labels: {
                enabled: false
            },
            title: {
                text: null
            }
        }, 
        xAxis: {
            categories: ['4月', '5月', '6月', '7月', '8月'],
            gridLineWidth: 0, minorGridLineWidth: 0,
            labels: {
            	style: { color: "#ffffff" }
            }
        },
        plotOptions: {
            line: {
            	color: "#fff",
                dataLabels: {
                    enabled: true,
                    style: { 
                    	fontSize: '11px', textShadow: "none",
                    	// transform: 'scale(0.85)',
                    	color: "rgba(255,255,255,.8)"
                    }
                }
                // enableMouseTracking: false
            }
        },
        series: [{
            data: [2393, 9009, 4009, 8904, 12090]
        }]
    });

});

myApp.onPageInit('order-list-detail', function (page) {
	
	$('#list-detail-chart').highcharts({
        chart: {
            type: 'line',
            height: 160,
            color: "#FFF",
            backgroundColor: 'transparent',
        },
        colors: ['#FFFFFF'],
        legend: { enable: false },
        title: { text: "" },
        subtitle: { text: "" },
		credits: { enabled: false },
		legend:	 { enabled: false },
		tooltip: { enabled: false }, 
		exporting: { enabled: false },
        yAxis: {
        	gridLineWidth: 0, minorGridLineWidth: 0,
			labels: {
                enabled: false
            },
            title: {
                text: null
            }
        }, 
        xAxis: {
            categories: ['4月', '5月', '6月', '7月', '8月'],
            gridLineWidth: 0, minorGridLineWidth: 0,
            labels: {
            	style: { color: "#ffffff" }
            }
        },
        plotOptions: {
            line: {
            	color: "#fff",
                dataLabels: {
                    enabled: true,
                    style: { 
                    	fontSize: '11px', textShadow: "none",
                    	// transform: 'scale(0.85)',
                    	color: "rgba(255,255,255,.8)"
                    }
                }
                // enableMouseTracking: false
            }
        },
        series: [{
            data: [2393, 9009, 4009, 8904, 12090]
        }]
    });

});

myApp.onPageInit('calendar', function (page) {
	var $$ = Dom7;
	var monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月' , '9月' , '10月', '11月', '12月'];
	 
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
	    	console.log("onDayClick: "+p, dayContainer, year, month, day);
	    }
	});
});

myApp.onPageInit('my', function (page) {
	$$('.navbar').addClass('no-bg');
	
	$$("a").click(function() {
		$$('.navbar').removeClass('no-bg');
	})
});