canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 70;
greencar_height = 90;

greencar_x = 5;
greencar_y = 225;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadBackground;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);	
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);		
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (greencar_y >=0) 
{
    greencar_y = greencar_y - 5;
    uploadBackground();
    uploadgreencar();
    console.log("up pressed, x="+greencar_x+ "and y="+greencar_y);
}   
}
function down()
{
if (greencar_y <=500) 
{
    greencar_y = greencar_y + 5;
    uploadBackground();
    uploadgreencar();
    console.log("up pressed, x="+greencar_x+ "and y="+greencar_y);
}   
}
function left()
{
if (greencar_x >=0) 
{
    greencar_x = greencar_x - 50;
    uploadBackground();
    uploadgreencar();
    console.log("up pressed, x="+greencar_x+ "and y="+greencar_y);
}   
}
function right()
{
if (greencar_x <=700) 
{
    greencar_x = greencar_x + 50;
    uploadBackground();
    uploadgreencar();
    console.log("up pressed, x="+greencar_x+ "and y="+greencar_y);
}   
}