var slider = document.querySelector('.slider__box');
var img = 1;

function changeImg() {
	console.log('')
	switch(img) {
		case 1:
			slider.src = "img/bier.png";
			img++;
		break;
		case 2:
			slider.src = "img/bier!.png";
			img = 1;
		break;
	}
}

setInterval(function() { 
				changeImg(); 
			}, 300);