var stars = [];
function setup() {
	createCanvas(1300, 570);
  var i;
  for (i = 0; i < 2000; i++) { 
      stars[i] = new Star();
  }
}

function draw() {	
	background(0);
  translate(width/2,height/2);
  stars.forEach(function(each){
    each.update();
  	each.show();
  });
}
