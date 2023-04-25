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

function mainVisualBanner(){
	let mvbanner_obj = null;
	const mvlayer_parent = document.querySelector(".mvlayer_parent");
	const mvbanner_container = document.querySelector(".mv_banner_container");
	const mvbanner_slide = mvbanner_container.querySelectorAll(".swiper-slide");
	if(mvbanner_slide.length>1){
		mvbanner_obj = new Swiper(".mv_banner_container", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.mv_banner_paging",
			}
		});
	}else{
		mvlayer_parent.classList.add("nodata_type");
	}
}

function subVisual(){
	let sub_visual_obj = null;
	const sub_visual_container = document.querySelector(".sv_container");
	const sv_zone = document.querySelector(".sv_zone");
	const sub_visual_slide = sub_visual_container.querySelectorAll(".swiper-slide");
	let btn_mv_stop = null;
	let btn_mv_play = null;
	if(sub_visual_slide.length>1){
		sub_visual_obj = new Swiper(".sv_container", {
			speed : 1000,
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.sub_visual_paging",
			},
            navigation: {
                nextEl: '.sv_wrap .btn_mv_control.next_control',
                prevEl: '.sv_wrap .btn_mv_control.prev_control',
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
		sv_zone.classList.add("nodata_type");
	}
}

function specialBanner(){
	let mcswiper_obj = null;
	const mc_swiper_list = document.querySelector(".mc_swiper_list");
	const mc_swiper_list_slide = mc_swiper_list.querySelectorAll(".swiper-slide");
	if(mc_swiper_list_slide.length>1){
		mcswiper_obj = new Swiper(".mc_swiper_list", {
			speed : 1000,
			loop : true,
			slidesPerView: 3, 
			slidesPerGroup: 1, 
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.mc_paging",
			}
		});
	}else{
		mc_swiper_list.classList.add("nodata_type");
	}
}

function thisMonthBanner(){
	let primary_swiper_obj = null;
	const primary_swiper_list = document.querySelector(".primary_swiper_list");
	const primary_swiper_list_slide = primary_swiper_list.querySelectorAll(".swiper-slide");
	if(primary_swiper_list_slide.length>1){
		primary_swiper_obj = new Swiper(".primary_swiper_list", {
			speed : 1000,
			loop : true,
			slidesPerView: 3, 
			slidesPerGroup: 1, 
			loop : true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			pagination: {
				clickable: true,
				el: ".swiper-pagination.primary_paging",
			}
		});
	}else{
		primary_swiper_list.classList.add("nodata_type");
	}
}

function quickMenu(){
	const mc_wrap = document.querySelector(".mc_wrap");
	const quick_item_zone = document.querySelector(".quick_item_zone");
	let mc_wrap_pos = mc_wrap !== null ? mc_wrap.offsetTop+90 : 0;
	console.log(window.scrollY , mc_wrap_pos);
	window.addEventListener("scroll",(e)=>{
		if(window.scrollY > mc_wrap_pos){
			quick_item_zone.classList.add("fixed");
		}else{
			quick_item_zone.classList.remove("fixed");
		}
	});
}