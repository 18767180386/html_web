function erroritt(that){
	that.src = 'http://cdn.jisuapp.cn/zhichi_frontend/static/pc/index/img/in4.jpg';
}

$(function(){
	// $('#banner-section, #banner-images-area').css('height', $(window).width() / 1900 * 490);
	// $(window).resize(function() {
	// 	$('#banner-section, #banner-images-area').css('height', $(window).width() / 1900 * 490);
	// });
	// bannerObj.init();
	// $('#slides').css('height', $(window).width() / 1900 * 490);
	// $(window).resize(function () {
	// 	$('#slides').css('height', $(window).width() / 1900 * 490);
	// });
	// var count = $('#slides').attr('data-carousel-count');
	// if(count >1){
	// 	$('#slides').slidesjs({
	// 	width: $(window).width(),
	// 	height: $(window).width() / 1900 * 490,
	// 	navigation: {
	// 		active: false,
	// 		effect: 'fade'
	// 	},
	// 	pagination: {
	// 		active: true,
	// 		effect: 'fade'
	// 	},
	// 	play: {
	// 		active: true,
	// 		effect: 'fade',
	// 		interval: 5000,
	// 		auto: true,
	// 		swap: false,
	// 		pauseOnHover: true,
	// 		restartDelay: 2500
	// 	},
	// 	effect: {
	// 		slide: {
	// 			speed: 500
	// 		},
	// 		fade: {
	// 			speed: 500,
	// 			// [number] Speed in milliseconds of the fade animation.
	// 			crossfade: true
	// 			// [boolean] Cross-fade the transition.
	// 		}
	// 	}
	// });
	// 	$('.slidesjs-navigation').show();	
	// }else{
	// 	$('.slidesjs-navigation').hide();	
	// }
	// 新banner
	var bannerObj = {
		durTime: 5000,
		bannerArr: [],
		bannerSize: 0,
		activeIdx: 0,
		stop: false,
		init: function () {
			//检测轮播有多少组图片
			var $this = this;
			$this.bannerSize = $('#banner-images-area .banner-image-item').length;
			if ($this.bannerSize < 2) {
				return;
			}
			for (var i = 0; i < $this.bannerSize; i++) {
				$this.bannerArr.push(i == 0 ? 1 : 0);
			}
			$this.startInterVal();
			$this.eventBind();
		},
		startInterVal: function () {
			var $this = this;
			setInterval(function () {
				if ($this.stop) {
					return;
				}
				$this.bannerArr.unshift($this.bannerArr.pop());
				$this.bannerChangeAction();
			},$this.durTime)
		},
		bannerChangeAction: function () {
			var $this = this;
			$this.bannerArr.some(function (item, index) {
				if (item === 1) {
					$this.activeIdx = index;
					$('#banner-images-area .banner-image-item').eq(index).addClass('active')
					.siblings('.banner-image-item').removeClass('active');
					$('#banner-pagination-area .banner-pagination-item').eq(index).addClass('active')
					.siblings('.banner-pagination-item').removeClass('active');
					return true;
				}
				return false;
			})
		},
		bannerChangeActiveIdx: function (index) {
			this.bannerArr = this.bannerArr.map(function (bItem, bIndex) {
				var res = bIndex == index ? 1 : 0;
				return res;
			})
			this.bannerChangeAction();
		},
		eventBind: function () {
			var $this = this;
			$('#banner-section').on('mouseenter', function () {
				$this.stop = true;
			}).on('mouseleave', function () {
				$this.stop = false;
			}).on('click', '.banner-pagination-item', function () {
				var pIndex = $(this).index();
				$this.bannerChangeActiveIdx(pIndex);
			}).on('click', '.banner-btn', function (item, index) {
				var _this = $(this),
				activeIdx = $this.activeIdx;
				if (_this.hasClass('banner-btn-prev')) {
					activeIdx = activeIdx == 0 ? ($this.bannerSize - 1) : (activeIdx - 1);
				}else {
					activeIdx = (activeIdx == $this.bannerSize - 1) ? 0 : (activeIdx + 1);
				}
				$this.bannerChangeActiveIdx(activeIdx);
			});
		}
	}
	bannerObj.init();

	$('.lunbo').css({
		'height': 770 / 1920 * $(window).width()
	})

	initialCoin();
	function GetQueryString(name)
		{
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		}
			//右小角联小图标
	$('.contact .local').show();

	//点击播放视频
	var played = false,
		oVideo = $(".banner-video-player")[0];
	$(".tutorial_video img").click(function () {
		$(".banner-video").addClass("banner-video-in");
		$(".banner-video").removeClass("banner-video-out");
		$('.nav-wrap').hide();
		$('.nav_top').hide();
		oVideo.play();
	})
	$(".banner-video-player").click(function () {
		if (played) {
			this.pause();
		} else {
			this.play();
		}
		played = !played;
	})
	$(".banner-video-btn-close").click(function () {
		oVideo.pause();
		$('.nav-wrap').show();
		$('.nav_top').show();
		$(".banner-video").addClass("banner-video-out");
		$(".banner-video").removeClass("banner-video-in");
	})

function showlogin(){
	var my_show = GetQueryString("login");
	if(my_show == 1){
		loginFunc();
		$(".lg-mask").show();
	}else{

	}
}
showlogin();
window.onload = function() {
	var i_time;
	var s_time;
	var swiper = new Swiper('.slider_zong.swiper-container', {
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    slidesPerView: 1,
	    paginationClickable: true,
	    loop: true,
	    grabCursor: true,
	    autoplay: 15000,
	    autoplayDisableOnInteraction : false,
	    preventLinksPropagation : true,
	    onSlideChangeEnd: function(sw){
	        $("#slider_wrap .animate-content").removeClass('show');
			$("#slider_wrap .swiper-slide-active > .animate-content").addClass('show');
	    }
	});
};
$(".slide1,.slide2").click(function(event) {
	window.open('/index.php?r=pc/Webapp/myapp','_blank');
	});
	function textEllipsis(){
		$.each($(".page2_ulwrap li p"), function(index, val) {
			 var stlenght = $(this).text();

			 if(stlenght.length > 18){
			 	var showtext = stlenght.substring(0,18) + ' ....';
			 	$(this).text(showtext);
			 }
			
		});
	}	
	function getIntData() {
		$.ajax({
			url: '/index.php?r=pc/index/getAppCase',
			type: 'get',
			dataType: 'json',
			data: {
				page: 1,
				page_size:8
			},
			success: function(msg) {
				if (msg.status == 0) {
					var int_li = '';
					$(msg.data).each(function(index, item) {
						int_li+='<div class="ex_case">'
						      +'<img class="case_pic" src="'+item.cover+'" alt="">'
					        +'<a href="/index.php?r=pc/Webapp/preview&id='+item.app_id+'" target="_blank"><div class="prw_code"><img class="code_pic" src="'+item.qrcode+'"></div></a><a href="/index.php?r=pc/Webapp/preview&id='+item.app_id+'" target="_blank"><div class="preview_btn">预览</div></a></div>';

					  if(index >= 7){
					  	return false;
					  }
					});

				$('#example_con').append(int_li);

				}
			var $exWidth = $('.ex_case').width(),
			  	$exWidth = $exWidth+"px";
			  $('.ex_case').css("height",$exWidth);
			}
		});
	}
	getIntData();
	$(window).resize(function(){
   		initialCoin();
	});
	function initialCoin(){
		var $exWidth = $('.ex_case').width(),
				$exampleTop = $('.example_top').height(),
    		$exWidth = $exWidth+"px";
    		$exampleTop = $exampleTop + 'px';
	    $('.ex_case').css("height",$exWidth);
	    $('.example_top').css("line-height",$exampleTop);
	}	
	var $window           = $(window);
	    $window.on('scroll', revealOnScroll);

	function revealOnScroll() {
	    var scrolled = $window.scrollTop() * 2;
	        //win_height_padded = $window.height() * 1.1;

	    $(".revealOnScroll:not(.animated)").each(function () {
	        var $this     = $(this),
	            offsetTop = $this.offset().top;

	        if (scrolled  > offsetTop) {
	        	if ($this.data('timeout')) {
	          		window.setTimeout(function(){
	            	$this.addClass('animated ' + $this.data('animation'));
	          }, parseInt($this.data('timeout'),10));
	        } else {
	          $this.addClass('animated ' + $this.data('animation'));
	        }
	      }
	    });
	   $(".revealOnScroll.animated").each(function (index) {
	      	var $this     = $(this),
	          	offsetTop = $this.offset().top;
	      	if (scrolled < offsetTop) {
	        	$(this).removeClass('animated fadeInLeft fadeInRight coins')
	      }
	    });
	  }

	revealOnScroll();

   	//引导页隐藏显示
	var num=1;
	
	$(".guide_wrap").on("click",".guide_del",function(){
		$('body').css('overflow','auto')
		$(".guide_wrap").hide();
	}).on('click',".guide_btn",function(){
		if(num<6){
			num++;  
		    $(".guide_content img").attr("src","http://testfe.zhichiwangluo.com/static/pc/index/img/resget_guide"+num+".png");
		}
		if(num==2){
            $(".guide_content").css('left',"48.5%");
            //$(".guide_nav").html('应用管理').css('left',"-14%");
            $(".guide_nav").html('应用管理').css('left',"-14%");
		}
		if(num==3){
			$(".guide_content").css('left',"52%");
			$(".guide_nav").html("官方定制").css('left',"-2%");
		}
		if(num==4){
			$(".guide_nav").html("案例").css('left',"19%");
		}
		if(num==5){
			$(".guide_nav").html("产品介绍").css('left',"38%");
		}
		if(num==6){
			$(".guide_btn").html('视频教程')
			$(".guide_nav").html("商家社区").css('left',"64%");
            $(".guide_btn").click(function(){
            	window.location.href="http://bbs.zhichiwangluo.com/plugin.php?id=tpgao_edu:view&typeid=12&cpid=8&courseid=1"
            })
		}

	});

	$('.webapp-nav-list').on("mouseover", "li", function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('on');
		}
	});
	$('.webapp-nav-list').on('mouseout', "li", function () {
		$(this).removeClass('on');
	})
	$(".webapp-nav-list").on("click", "li", function () {
		$(".preview-btn").hide();
		var idx = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(".webapp-list-item.active").removeClass("active");
		$(".webapp-list-item").eq(idx).addClass("active");
		// if ( $(".webapp-list-item").eq(idx).find(".preview-detail-item.active").length ){
		// 	$(".webapp-list-item").eq(idx).find(".preview-detail-item.active").click();
		// }else{
		// 	iframeContent.src = "/app?_app_id=undefined";
		// }
		$(".webapp-list-item-content-list .preview-detail-intro-content.active").removeClass('active');
		$(".webapp-list-item-content-list .preview-detail-intro-content").eq(idx).addClass('active');
		// 切换背景图
		bgChange(idx);
	});
	// 切换背景图
	function bgChange(idx) {
		var bgIndex = idx;
		if ($(".top-nav a.active").text() == "微页") {
			bgIndex += 9;
		}
		$(".preview-bg-box img.active").removeClass('active');
		$(".preview-bg-box img").eq(bgIndex).addClass('active');
	}
	$(".preview-detail-list").on('mouseover', 'a', function () {
		$(this).siblings().find('li').removeClass('active');
		$(this).find('li').addClass('active');
	})
});

//行业热文
$(function(){
	$(".hot-article-list-item").each(function(index,item){
		index++;
		if(index%3==0){
			$(this).css("margin-right",0);
		};
		//热文介绍长度超过两行显示省略号
		var oTextItem = $(this).find(".item-intro");
			textLen = oTextItem.html().length*14,
			maxLen = oTextItem.width()*2;
		if(textLen>maxLen){
			var text = oTextItem.text().substr(0,40) + "...";
			oTextItem.html(text);
		};
	})
})
