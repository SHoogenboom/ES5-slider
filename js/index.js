var slider = document.querySelector('.slider');
var buttons = document.querySelectorAll('.slider__button');
var img = 1;
var interval = false;

buttons[0].addEventListener('click', function(){ changeImg(-1); });
buttons[1].addEventListener('click', imgVal);
buttons[2].addEventListener('click', function(){ changeImg(1); });

function changeImg( next ) {
    switch(img) {
		case 1:
			slider.src = "img/bier.png";
			if(next === -1){
                img = 4;
            }
            else{
                img = 2; 
            }
		break;
		case 2:
			slider.src = "img/bier!.png";
			img += next;
        break;
        case 3:
			slider.src = "img/busje.png";
			img += next;
        break;
        case 4:
			slider.src = "img/bus.png";
            if(next === 1){
                img = 1;
            }
            else{
                img = 3;
            }
        break;
	}
}

function imgVal() {
    if(interval === true) {
        clearInterval(imgVal);
        interval = false;
    }
    else {
        imgVal = setInterval(function() { 
            changeImg(1); 
        }, 1000);
        interval = true;
    }
}

imgVal();