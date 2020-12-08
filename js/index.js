$(document).ready(function(){

	var windowWidth = $(window).width();
	var mouseX = 0;


	$(document).mouseover(function(e){
		mouseX = e.pageX;
		if (mouseX > windowWidth / 2){

			var a = 10;

			setTimeout(function(){
				$(".error").css("display", "block");
				$(".error2").css("display", "block");
			}, 2000)

		}
	});


	if (a = 10) {
		RandomSquare()
		RandomWords()
		$( '.square:nth-child(4n)' ).css("width", "100px");
		$( '.square:nth-child(3n+7)' ).css("width", "30px");
		$( '.square:nth-child(3n+7)' ).css("height", "30px");
	};


	var colors = ['rgb(255, 255, 0)', 'rgb(0, 255, 0', 'rgb(0, 0, 255)','rgb(255, 0, 255)']

	$(".square").each(function(){
		$(this).css("background-color", colors[Math.floor(Math.random()  * colors.length)]);
	});
	
	setInterval("autoRefresh_div", 2000);

})


function RandomSquare(number){
	for (var i = 0; i < 70; i++){			
		var windowWidth = $(window).width() * Math.random();
		var windowHeight = $(window).height() * Math.random();
		$(".error2").append("<div class='square' id='squareDIV' style='left:" + windowWidth + "px; top:" +windowHeight + "px;'></div>")
	};
}

function RandomWords(number){
	for (var i = 0; i < 3; i++){			
		var windowWidth = $(window).width() * Math.random();
		var windowHeight = $(window).height() * Math.random();
		$(".error2").append("<p class='words' style='left:" + windowWidth + "px; top:" +windowHeight + "px;'>Bigbrother is watching you</p>")
	};
}

function autoRefresh_div(){
		$('#errorDIV2').load(window.location.href + '#errorDIV2');
	}
