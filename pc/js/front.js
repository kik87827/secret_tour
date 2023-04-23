if( window.console == undefined ){ console = { log : function(){} }; }

/** browser checker **/
let touchstart = "ontouchstart" in window;
let userAgent=navigator.userAgent.toLowerCase();
document.addEventListener("DOMContentLoaded",() => {
	commonInit();
	commonResize();
	layoutFunc();
});
window.addEventListener("load",() => {
	posLayerEvent();
	
});

function subMinHeight(){
	var sub_middle = document.querySelector(".sub_middle");
	var sub_middle_pos = sub_middle !== null ? sub_middle.getBoundingClientRect().top : 0;
	var footer_zone = document.querySelector(".footer_zone");
	var footer_zone_height = footer_zone !== null ? footer_zone.offsetHeight : 0;
	if(sub_middle !== null){
		sub_middle.style.minHeight = `calc(100vh - ${sub_middle_pos + footer_zone_height}px)`
	}
}

function commonResize(){
	var $window_width = 0;
	$(window).on("resize",function(){
		if($window_width == $(window).width()){
			return;
		}
		posLayerResize();
	}).resize();
}

function commonInit() {
	let touchstart = "ontouchstart" in window;
	let userAgent = navigator.userAgent.toLowerCase();
	let checkitem = [];
	if (touchstart) {
		browserAdd("touchmode");
	}
	if (userAgent.indexOf('samsung') > -1) {
		browserAdd("samsung");
	}

	if (navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('win') > -1) {
		browserAdd("window");
	}

	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
		// iPad or iPhone
		browserAdd("ios");
	}

	function browserAdd(opt) {
		document.querySelector("html").classList.add(opt);
	}
}


function layoutFunc(){
	function btnTop(){
		let btn_gotop = document.querySelector(".btn_pagetop");
		if(btn_gotop ===null){return;}
		btn_gotop.addEventListener("click",(e)=>{
			e.preventDefault();
			window.scrollTo(0,0);
		});
	}
	btnTop();
}


function posLayerEvent(){
	var posCallBtn = $("[data-poslayer]");
	var poslayer_z = $(".poslayer_z");
	
	$("body").append(poslayer_z);

	
	
	posCallBtn.on("click",function(e){
		var $this = $(this),
			$t_t = $($this.attr("data-poslayer"));
		e.preventDefault();
		posLayerShow($t_t,$this);
	});
	poslayer_z.on("click",".layerclose",function(e){
		e.preventDefault();
		posLayerHide($(this).parents(".poslayer_z"));
	});

	$(document).on("click",".btn_psubmit",function(e){
		e.preventDefault();
		let thisParent = $(this).parents(".poslayer_z");
		let targetCols = $(`[data-poslayer='#${thisParent.attr("id")}']`);
		let activeDate = thisParent.attr("data-date");
		let activeText = thisParent.find(".pclayer_vlist > li.active").text();
		if(thisParent.attr("data-date") !== undefined){
			targetCols.find(".search_form_text_result").html(activeDate);
			targetCols.addClass("result_mode");
		}else{
			targetCols.find(".search_form_text_result").html(activeText);
			targetCols.addClass("result_mode");
		}
		posLayerHide(thisParent);
	});

	$(document).on("click",".pcv_chk",function(e){
		e.preventDefault();
		$(this).parents("li").siblings().removeClass("active");
		$(this).parents("li").addClass("active");
	});

	$(document).on("click",function(e){
		if (!$(e.target).parents("[data-poslayer] , .poslayer_z , .layer_in_control").length && !$(e.target).is("[data-poslayer]") && !$(e.target).is(".layer_in_control")){
			posLayerHide($(".poslayer_z.active"));
		}
	});
}

function posLayerShow(target,btn){
	var poslayer_z = $(".poslayer_z");
	var target = $(target);
	
	$("body").append(target);
	poslayer_z.removeClass("active");
	target.addClass("active");
	posLayerPos(target,btn);
}

function posLayerResize(){
	var poslayer_z = $(".poslayer_z");
	if (poslayer_z.length){
		poslayer_z.each(function(){
			posLayerResizeAction($(this));
		});
	}
}

function posLayerPos(target,btn){
	var $target = $(target);
	var $target_tvitdep = $target.find(".tvitdep_vlist_wrap");
	var $target_tvitdep_pos = $target_tvitdep.length ? $target_tvitdep.offset().left : 0;
	var $target_tvitdep_wid = $target_tvitdep.length ? $target_tvitdep.outerWidth() : 0;
	var $targetWid = $target.length ? $target.outerWidth() : 0;
	var $btn = $(btn);
	var $btnIndex = $btn.index();
	var $btnPosTop = $btn.length ? $btn.offset().top : 0;
	var $btnPosHeight = $btn.length ? $btn.outerHeight() : 0;
	var $btnPosLeft = $btn.length ? $btn.offset().left : 0;
	var $btnWid = $btn.length ? $btn.outerWidth() : 0;
	var elseMargin = 0;
	$target.css({"top":"", "left" : "" , "right" : "" , "width" : ""});
	if ($targetWid + $btnPosLeft > $(window).width()){
		$target.css({
			"top": $btnPosTop + $btnPosHeight + 20,
			"left": "auto",
			"right" : 20
		});
	}else{
		$target.css({
			"top": $btnPosTop + $btnPosHeight + 20,
			"left": $btnPosLeft
		});
	}
}

function posLayerResizeAction(target){
	var $target = $(target);
	var $target_tvitdep = $target.find(".tvitdep_vlist_wrap");
	var $target_tvitdep_pos = $target_tvitdep.length ? $target_tvitdep.offset().left : 0;
	var $target_tvitdep_wid = $target_tvitdep.length ? $target_tvitdep.outerWidth() : 0;
	var $targetWid = $target.length ? $target.outerWidth() : 0;
	var $btn = $("[data-poslayer='#" + $target.attr("id") +"']");
	var $btnIndex = $btn.index();
	var $btnPosTop = $btn.length ? $btn.offset().top : 0;
	var $btnPosHeight = $btn.length ? $btn.outerHeight() : 0;
	var $btnPosLeft = $btn.length ? $btn.offset().left : 0;
	var $btnWid = $btn.length ? $btn.outerWidth() : 0;
	$target.css({"top":"", "left" : "" , "right" : "" , "width" : ""});
	if ($targetWid + $btnPosLeft > $(window).width()) {
		$target.css({
			"top": $btnPosTop + $btnPosHeight + 20,
			"left": "auto",
			"right": 20
		});
	} else {
		$target.css({
			"top": $btnPosTop + $btnPosHeight + 20,
			"left": $btnPosLeft
		});
	}
}

function posLayerHide(target){
	var target = $(target) || target;
	target.removeClass("active");
}



function mainVisual(){
	let main_visual_obj = null;
	const main_visual_container = document.querySelector(".mv_container");
	const mv_zone = document.querySelector(".mv_zone");
	const main_visual_slide = main_visual_container.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;
	if(main_visual_slide.length>1){
		main_visual_obj = new Swiper(".mv_container", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.main_visual_paging",
			},
            navigation: {
                nextEl: '.btn_mv_control.next_control',
                prevEl: '.btn_mv_control.prev_control',
            },
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		});
		btn_mv_stop = document.querySelector(".btn_mv_stop");
		btn_mv_play = document.querySelector(".btn_mv_play");

		btn_mv_play.addEventListener("click", (e) => {
			e.preventDefault();
			main_visual_obj.autoplay.start();
		},false);

		btn_mv_stop.addEventListener("click", (e) => {
			e.preventDefault();
			main_visual_obj.autoplay.stop();
		},false);
	}else{
		mv_zone.classList.add("nodata_type");
	}
}


var global_swiper_obj = null;
function mcGlobalSwiper(){
	const target_swiper_slide = document.querySelectorAll(`#global_swiper .swiper-slide`);
	if(target_swiper_slide.length>3){
		global_swiper_obj = new Swiper("#global_swiper .swiper-container", {
			speed : 800,
			slidesPerView: 3, 
			slidesPerGroup: 3,
			loop : true,
			navigation: {
				nextEl: `#global_swiper .next_control`,
				prevEl: `#global_swiper .prev_control`,
			},
			pagination: {
				clickable: true,
				el: "#global_swiper .swiper-pagination",
			},
		});
	}else{
		document.querySelector("#global_swiper .swiper-pagination").style.display = "none";
		document.querySelectorAll("#global_swiper .btn_slider_control_wrap").forEach((item)=>{
			item.style.display = "none";
		})
	}
}

function mcGlobalSwiperUpdate(){
	if(global_swiper_obj !== null){
		global_swiper_obj.update();
	}
}

var global_swiper_obj2 = null;
function mcGlobalSwiper2(){
	const target_swiper_slide = document.querySelectorAll(`#global_swiper2 .swiper-slide`);
	if(target_swiper_slide.length>3){
		global_swiper_obj2 = new Swiper("#global_swiper2 .swiper-container", {
			speed : 800,
			slidesPerView: 3, 
			slidesPerGroup: 3,
			loop : true,
			navigation: {
				nextEl: `#global_swiper2 .next_control`,
				prevEl: `#global_swiper2 .prev_control`,
			},
			pagination: {
				clickable: true,
				el: "#global_swiper2 .swiper-pagination",
			},
		});
	}else{
		document.querySelector("#global_swiper2 .swiper-pagination").style.display = "none";
		document.querySelectorAll("#global_swiper2 .btn_slider_control_wrap").forEach((item)=>{
			item.style.display = "none";
		})
	}
}

function mcGlobalSwiperUpdate2(){
	if(global_swiper_obj2 !== null){
		global_swiper_obj2.update();
	}
}




var mdpick_swiper_obj = null;
function mdPickSwiper(){
	const target_swiper = document.querySelector(`#mdpick_swiper`);
	const target_swiper_slide = document.querySelectorAll(`#mdpick_swiper .swiper-slide`);
	
	resizeAction();
	
	if(target_swiper_slide.length>3){
		mdpick_swiper_obj = new Swiper("#mdpick_swiper .swiper-container", {
			speed : 800,
			slidesPerView: 3, 
			slidesPerGroup: 3,
			loop : true,
			navigation: {
				nextEl: `#mdpick_swiper .next_control`,
				prevEl: `#mdpick_swiper .prev_control`,
			},
			pagination: {
				clickable: true,
				el: "#mdpick_swiper .swiper-pagination",
			},
		});
	}else{
		document.querySelector("#mdpick_swiper .swiper-pagination").style.display = "none";
	}

	
	window.addEventListener("resize",()=>{
		resizeAction();
		if(mdpick_swiper_obj !== null){
			mdpick_swiper_obj.update();
		}
	});

	function resizeAction(){
		target_swiper.style.width = (window.innerWidth - target_swiper.getBoundingClientRect().left - 64)+'px';
	}
}

function mdPickSwiperUpdate(){
	if(mdpick_swiper_obj !== null){
		mdpick_swiper_obj.update();
	}
}
