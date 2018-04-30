var canvas;

function setup () {
	canvas = createCanvas (windowWidth, 333);
	canvas.position (0, 0);
	// canvas.parent ('js_canvas');
	frameRate (2);
}

function draw () {
	background (randColour ());
}

function randColour () {
	var c = color (random (255), random (255), random (255));
	return c;
}
