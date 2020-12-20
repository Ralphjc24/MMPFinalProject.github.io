function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
    

}

function draw() {
    if (mouseIsPressed) {
    	background("white");
    	fill("#C4A829");
    	textSize(25);
    	text("Congratulations!", 270, 100);
    	text("The University of [Retracted]", 270,140);
    	text("Conferred this degree in HTML/CSS to", 270, 180);
    	text("[Firstname][Last name]", 270, 210);
    }   else{
    	background("black");
    }
    
     



}