// control de indicadores slider como lo hacemos
var circles = [...document.querySelectorAll("#circle")];;
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var contador = 0;
// control varra de progreso como lo hacemos
var progressBar = document.querySelector("#progressBar");
// variables para control de botones ver mas
var btnSeeMore1 = document.querySelector("#btn-see-more1");
var btnSeeMore2 = document.querySelector("#btn-see-more2");
var btnSeeMore3 = document.querySelector("#btn-see-more3");
var btnSeeMore4 = document.querySelector("#btn-see-more4");
var hideText1 = [...document.querySelectorAll("#hide-text1")];
var hideText2 = [...document.querySelectorAll("#hide-text2")];
var hideText3 = [...document.querySelectorAll("#hide-text3")];
var hideText4 = [...document.querySelectorAll("#hide-text4")];

// control inicial barra de progreso
var porcent = 100/circles.length;
progressBar.setAttribute("style",`width:${porcent}%`);
var progress = porcent;

// eventos click en controles de slider como lo hacemos
next.addEventListener("click",nextCard);
prev.addEventListener("click",prevCard);

// // eventos click en botones "ver mas"
btnSeeMore1.addEventListener("click", function () { seemore(btnSeeMore1,hideText1);});
btnSeeMore2.addEventListener("click", function () { seemore(btnSeeMore2,hideText2);});
btnSeeMore3.addEventListener("click", function () { seemore(btnSeeMore3,hideText3);});
btnSeeMore4.addEventListener("click", function () { seemore(btnSeeMore4,hideText4);});

// funcion para ver mas de todos los botones 
function seemore(btn,hide){
	hide.forEach(element => element.classList.toggle("show"));
	if(btn.textContent=="ver mas"){
        btn.textContent="ver menos";
    }else{
        btn.textContent="ver mas";
    }
}



// funcion para cuando hacen click en siguiente slaider de como lo hacemos
function nextCard(event){
	incProgressBar(1);
	contador++;
	for (let index = 0; index < circles.length; index++) {
		if (contador == index) {
			circles[index].classList.replace("disable-circle","active-circle");
		}
		else{
			circles[index].classList.replace("active-circle","disable-circle");
		}
	}
	if (contador>=circles.length) {
		contador = 0;
		circles[contador].classList.replace("disable-circle","active-circle");
	}else{}
}

// funcion cunado dan click en anterior de slider de como lo hacemos
function prevCard(event){
	incProgressBar(0);
	contador--;
	if (contador<0) {
		contador = circles.length-1;
		circles[contador].classList.replace("disable-circle","active-circle");
	}else{}
	for (let index = 0; index < circles.length; index++) {
		if (contador == index) {
			circles[index].classList.replace("disable-circle","active-circle");
		}
		else{
			circles[index].classList.replace("active-circle","disable-circle");
		}
	}
}

// funcion incremento de barra de progreso
function incProgressBar(direction){
	if (direction ==1) { // aumente la barra de progreso
		progress = progress + porcent;
	}else{  // disminuya la barra de progreso
		progress = progress - porcent;
	}
	if (progress>100) {
		progress = porcent; 
	}else{}
	if (progress<0) {
		progress = circles.length * porcent;
	}else{}
	progressBar.setAttribute("style",`width:${progress}%`);
}


// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});


