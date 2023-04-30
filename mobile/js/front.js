if( window.console == undefined ){ console = { log : function(){} }; }

/** browser checker **/
let touchstart = "ontouchstart" in window;
let userAgent=navigator.userAgent.toLowerCase();
document.addEventListener("DOMContentLoaded",() => {
	layoutFunc();
});
window.addEventListener("load",() => {
	
});


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

	window.onload = function() {}

	function browserAdd(opt) {
		document.querySelector("html").classList.add(opt);
	}
}

function layoutFunc(){
    function flowNotice(){
		let flow_notice_slide = document.querySelectorAll(".flow_container .swiper-slide");
		var flow_notice_obj = null;
		if(flow_notice_slide.length>1){
			flow_notice_obj = new Swiper(".flow_container", {
				direction: "vertical",
				speed : 500,
				loop : true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				}
			});
		}
	}



    // mobile total
    function mbTotal(){
        var btn_htotal = document.querySelector(".btn_hdtotal"),
            mobile_mainmenu_zone = document.querySelector(".mobile_mainmenu_zone"),
            mainmenu_dim = document.querySelector(".mainmenu_dim"),
            mbmenu_toggle_one = document.querySelectorAll(".mbmenu_toggle_one"),
            mbmenu_two = document.querySelectorAll(".mbmenu_two"),
            btn_mbmenuclose = document.querySelector(".btn_mbmenuclose"),
            domHtml = document.querySelector("html"),
            domBody = document.querySelector("body");

        // init 
        if(mobile_mainmenu_zone === null){return;}
        btn_htotal.addEventListener("click",function(e){
            e.preventDefault();
            totalOpen();
        },false);
        btn_mbmenuclose.addEventListener("click",function(e){
            e.preventDefault();
            totalClose();
        },false);
		mbmenu_toggle_one.forEach((element)=>{
			element.addEventListener("click",function(e){
				e.preventDefault();
				let thisEventObj = e.currentTarget;
				let thisNextObj = thisEventObj.nextElementSibling;
				thisEventObj.classList.toggle("active");
				thisNextObj.classList.toggle("active");
			},false);
		});
		mbmenu_two.forEach((element)=>{
			element.addEventListener("click",function(e){
				e.preventDefault();
				let thisEventObj = e.currentTarget;
				let thisNextObj = thisEventObj.nextElementSibling;
				thisEventObj.classList.toggle("active");
				thisNextObj.classList.toggle("active");
			},false);
		});
        mainmenu_dim.addEventListener("click",function(e){
            e.preventDefault();
            totalClose();
        },false);
        function totalOpen(){
            mobile_mainmenu_zone.classList.add("active")
            setTimeout(function(){
                mobile_mainmenu_zone.classList.add("motion");
                if(touchstart){
                    domBody.setAttribute("data-scr", window.pageYOffset);
                    domBody.style.marginTop = -window.pageYOffset + "px";
                    domHtml.classList.add("touchDis");
                }
            },30);
        }
        function totalClose(){
            mobile_mainmenu_zone.classList.remove("motion");
            setTimeout(function(){
                mobile_mainmenu_zone.classList.remove("active");
                domHtml.classList.remove("touchDis");
                domBody.style.marginTop = 0;
                window.scrollTo(0, parseInt(domBody.getAttribute("data-scr")));
            },500);
        }
    }
    mbTotal();
    
	flowNotice();
}


function mainVisual(){
	let main_visual_obj = null;
	const mv_wrap = document.querySelector(".mv_wrap");
	const main_visual_container = document.querySelector(".mv_container");
	const swipercount = document.querySelector(".mv_wrap .swiper-count");
	const swiperlength = document.querySelector(".mv_wrap .swiper-length");
	const main_visual_slide = main_visual_container.querySelectorAll(".mv_container .swiper-slide");
    swiperlength.innerHTML = main_visual_slide.length;
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
				el: ".mv_wrap .mv-pagination",
			},
		});
        main_visual_obj.on("slideChange",()=>{
            swipercount.innerHTML = main_visual_obj.realIndex+1;
        });
	}else{
		mv_wrap.classList.add("nodata");
	}
}


function mcBanner(){
	let data_container_slide = document.querySelectorAll(".mc_banner_container .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".mc_banner_container", {
				speed : 1000,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
				loop : true,
				pagination: {
					el: '.mc_banner_container .swiper-pagination',
				}
			});
		}
	}
}


function mcThisPro(){
	let data_container_slide = document.querySelectorAll(".this_pro_swiper .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".this_pro_swiper", {
				slidesPerView: "auto",
				spaceBetween: 16,
				freeMode: true,
				mousewheelControl: true,
				pagination: {
					el: '.this_pro_swiper .swiper-pagination',
				}
			});
		}
	}
}

function scHotPro(){
	let data_container_slide = document.querySelectorAll(".this_hot_swiper .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".this_hot_swiper", {
				slidesPerView: "auto",
				mousewheelControl: true,
				pagination: {
					el: '.this_hot_swiper .swiper-pagination',
				}
			});
		}
	}
}

function mcImageBanner(){
	let data_container_slide = document.querySelectorAll(".mc_bannerimg_container .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".mc_bannerimg_container", {
			});
		}
	}
}

function scrollTab(target){
	let data_container_slide = document.querySelectorAll(`${target} .swiper-slide`);
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(`${target}`, {
				slidesPerView: "auto",
				spaceBetween: 7,
				freeMode: true,
				mousewheelControl: true
			});
		}
	}
}




function mcThisBest(){
	let data_container_slide = document.querySelectorAll(".nation_best_swiper .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".nation_best_swiper", {
				speed : 500,
				pagination: {
					el: '.nation_best_swiper .swiper-pagination',
				}
			});
		}
	}
}

function mcCardBanner(){
	let data_container_slide = document.querySelectorAll(".mc_bannerimg_container .swiper-slide");
	let data_swiper_obj = null;
	if(data_swiper_obj !== null){
		data_swiper_obj.update();
	}else{
		if(data_container_slide.length>1){
			data_swiper_obj = new Swiper(".mc_bannerimg_container", {
				speed : 500,
			});
		}
	}
}


function showPopup(target){
	const targetDom = document.querySelector(target);
	const targetCloseDom = targetDom.querySelector(".btn_modal_close");
	const htmlDom = document.querySelector("html");
	const bodyDom = document.querySelector("body");
	const htmlbodyMultiDom = [htmlDom,bodyDom];
	htmlbodyMultiDom.forEach((item)=>{
		item.classList.add("touch_disabled");
	});
	targetDom.classList.add("active");
	targetCloseDom.addEventListener("click",(e)=>{
		e.preventDefault();
		hidePopup(e.currentTarget.closest(".modal_zone"));
	})
	targetDom.addEventListener("click",(e)=>{
		if(e.target.closest(".modal_box")){
			return;
		}
		hidePopup(e.currentTarget);
	});
}

function hidePopup(target){
	const targetDom = target;
	const htmlDom = document.querySelector("html");
	const bodyDom = document.querySelector("body");
	const htmlbodyMultiDom = [htmlDom,bodyDom];
	targetDom.classList.remove("active");
	htmlbodyMultiDom.forEach((item)=>{
		item.classList.remove("touch_disabled");
	});
}

function segmentBox(target,callBtn){
	const targetDom = document.querySelector(target);
	const callBtnDom = document.querySelector(callBtn);
	const targetDomBtn = targetDom.querySelectorAll('.btn_segment_box');
	let activeDom = targetDom.querySelector('.btn_segment_box.active');
	targetDomBtn.forEach((item)=>{
		item.addEventListener("click",(e)=>{
			if(activeDom && activeDom !== e.currentTarget){
				activeDom.classList.remove("active");
			}
			e.currentTarget.classList.add("active");
			activeDom = e.currentTarget;
			callBtnDom.textContent = e.currentTarget.textContent;
			hidePopup(targetDom);
		})
	});
}

function activeWrap(parent,target){
	const parentDom = document.querySelector(parent);
	const targetBtn = parentDom.querySelectorAll(target);
	let activeDom = Array.from(targetBtn).filter(item => item.classList.contains("active"))[0];

	targetBtn.forEach((item)=>{
		item.addEventListener("click",(e)=>{
			if(activeDom && activeDom !== e.currentTarget){
				activeDom.classList.remove("active");
			}
			e.currentTarget.classList.add("active");
			activeDom = e.currentTarget;
		});
	});
}