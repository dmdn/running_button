var x1 = 0, y1 = 0;

document.getElementById('btn').addEventListener('mousemove', function() {
	var coordinateX,
	coordinateY;
  	x = Math.floor(Math.random() * 301); // перемещение до 30px
	y = Math.floor(Math.random() * 301); // перемещение до 30px
  	top_bottom = Math.ceil(Math.random() * 2); //перемещение верх/низ
  	left_raight = Math.ceil(Math.random() * 2); // перемещение лево/право
  	x1 = x;
	y1 = y;  
	switch (top_bottom) {
  		case 1:
    		this.style.top = y+"px";
    		break;
		case 2:
			this.style.bottom = y+"px";
			break;
	};

	switch (left_raight) {
  		case 1:
    		this.style.left = x+"px";
    		break;
		case 2:
			this.style.right = x+"px";
			break;
	};
})

document.getElementById('btn').addEventListener('click', function() {
	this.style.backgroundColor='#e77b69';
	this.textContent = '! Ты попал по мне !';
	this.style.position='static';
})
 