// Isabella Hong
// Section A
// ijhong@andrew.cmu.edu
// Final Project - AudioVisualMixer

//variables for color in RGB mode 
var colorR = 255; 
var colorG = 255; 
var colorB = 255; 
//variable used in function Beat 
var s = 0; 
//variable used for noise effect
var xoff = 0; 

function setup() { 
	createCanvas(500, 500); //canvas size 
}

function draw() {
	background(0); //background color black

	//create values for the rotation, offset, and diameter of "Ring"
	var rotation = 45; 
	var offset = [50, 100, 150, 200, 250, 300]; 
	var d = [40, 25, 10, 5, 3, 2]; 

	//create continuous ring of ellipses 
	push();
	translate(width / 2, height / 2); 
	for (var i = 0; i < 25; i ++) {
		Ring(offset[0], 0, d[0]); 
		Ring(offset[1], 0, d[1]); 
		Ring(offset[2], 0, d[2]); 
		Ring(offset[3], 0, d[3]); 
		Ring(offset[4], 0, d[4]); 
		Ring(offset[5], 0, d[5]);
		rotate(radians(rotation)); 
		rotate(millis()/9500);  	
	} 
	pop(); 
	//various displays 
	Beat(100, 100);  
	Beat(400, 400); 
	Interject1();
	Interject2();   
	Interject3();  
}

//rotating ring (default display)
function Ring(x, y, d) {
	//randomize colors of ellipses 
	colorR = random(200, 255); 
	colorG = random(100, 255); 
	colorB = random(100, 200); 
	noStroke(); 
	colorMode(RGB); 
	fill(colorR, colorG, colorB); 
	ellipse(x, y, d, d); 
}

//pulsing
function Beat(x, y, s) { 
	s = random(100, 200); 
		if (keyIsPressed) {
			//press key p to display 
			if ((key == 'p')) {
				noStroke();
				//randomize size of ellipses in this range to create pusling effect
				s = random(10, 110);  
				fill(206, 255, 255); 
				ellipse(x, y, s, s);
			
				s = random(100, 200);
				strokeWeight(5); 
				stroke(205, 0, 205);
				noFill();   
				ellipse(x, y, s, s); 
			}
		}	
}

//oscillation
function Interject1() {
	//noise 
	xoff += 0.015; 
	var n = noise(xoff) * width; 
	if (keyIsPressed) {
		//press key m to display 
		if ((key == 'm')) {
			noStroke();
			//randomize color 
			colorR = random(155, 255); 
			colorG = random(155, 255); 
			colorB = random(155, 255);  
			//background
 			fill(colorR, colorG, colorB); 
 			rect(0, 0, 1000, 1000);
 			//objects affected by noise 
			strokeWeight(10); 
			stroke(255); 
			noFill();
			line(0, n, 100, n); 
			line(500, n, 400, n); 
			ellipse(250, 250, n, n); 
 		}
 		
	}
	
}

//rotating bar 
function Interject2() {
	//press key y to display 
	if ((key == 'y')) { 
 		noStroke(); 
 		fill(0); 
		rect(0, 0, 10000, 10000);
		rotate(millis()/275); 
		//create the rectangles to rotate 
		for (var i = 0; i < 1000; i += 50) {
		 	rectMode(CENTER);
		 	noFill(); 
		 	strokeWeight(10); 
			stroke(255, 255, 0);
			rect(i, i, 100, 100)
		 	stroke(255, 0, 255); 
		 	rect(i, i, 200, 200); 
		 	stroke(0, 255, 255); 
		 	rect(i, i, 300, 300); 
		 	strokeWeight(10); 
			stroke(255, 255, 0);
			rect(i, i, 100, 100)
		 	stroke(255, 0, 255); 
		 	rect(i, i, 200, 200); 
		 	stroke(0, 255, 255); 
		 	rect(i, i, 300, 300);
	 	}
 		
 	}
 		
}

//shaky strings 
function Interject3() {
	//press key a to display 
	if ((key == 'a')) {
		//randomize colors
		colorR = random(100, 200); 
		colorG = random(200, 255); 
		colorB = random(200, 150); 
		//background
		fill(colorR, colorG, colorB); 
		rect(0, 0, 1000, 1000); 
		//drawing strings 
		for (var a = 0; a < width; a += 10) {
			stroke(255);
			strokeWeight(1);
			line(a, 400, width, a); 
		}
		for (var b = 0; b < height; b += 10) {
			stroke(255, 0, 255); 
			strokeWeight(1);
			line(b, 400, height - 100, b); 
		}
		for (var c = 0; c < width; c += 10) {
			stroke(255);
			strokeWeight(2);
			line(c, 300, width - 640, c);
		}
		for (var d = 0; d < height; d += 5) {
			stroke(0, 255, 255);
			strokeWeight(1); 
			line(d, 100, height - 640, d); 
		}
	}
}




	
	


	

