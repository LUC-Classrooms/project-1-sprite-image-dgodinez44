/**
 * Project 1 - Interactive Image
 * Name: Denise Godinez
 * Completion date: 02/25/2024
 * Basic description of the image: Draws a yellow duck
 * Basic description of user interactions to expect: The duck moves around
 * with the mouse and when mouse is pressed the duck "quacks" 
 */

// Global Variables go here
// create variables x and y for width and height
var x = 0; 
var y = 0;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
}
/**
 * Draw function creates a yellow duck.
 * Several shapes are incorporated suck as ellipse, 
 * triangle, arc, and line. 
 * The duck also moves to the x and y coordinates of 
 * the mouse. 
 */

function draw(){
  // this function runs again and again (60x per second)
  background(170, 210, 230); //light blue background
  //creates a new layer for the duck 
  push();
  //move the image to wherever the mouse is
  translate(mouseX, mouseY);

  //head 
  strokeWeight(2);
  fill ("yellow");
  ellipse(x - 50, y, 80, 60);
  //body 
  ellipse(x + 20, y + 40, 110, 70);
  //eye
  fill("black");
  ellipse(x - 65, y -10, 10, 15);
  //wing
  noFill();
  rotate(PI/-2);
  arc(x - 40, y + 10, 30, 80, 0, PI);
  //beak 
  fill("orange");
  triangle(x, y - 110, x + 10, y - 90, x - 10, y - 90);
  ellipse(x + 2, y - 95, 8, 3);
  //tail 
  triangle(x - 40, y + 95, x - 30, y + 75, x - 50, y + 75);
  //left leg
  line(x - 70, y, x - 90, y);
  line(x - 90, y, x - 100, y - 10);
  line(x - 90, y, x - 105, y);
  line(x - 90, y, x - 100, y + 10);
  //right leg
  line(x - 70, y + 45, x - 90, y + 45);
  line(x - 90, y + 45, x - 100, y + 35);
  line(x - 90, y + 45, x - 105, y + 45);
  line(x - 90, y + 45, x - 100, y + 55);

  //gets rid of the duck layer
  pop();
  
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
  if statement that has the duck "quack" when the mouse is pressed
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    //move the text to have it so it moves around with the duck
    translate(mouseX, mouseY);
    textSize(18); 
    textFont("Courier New");
    //work quack appears when mouse is pressed
    text("QUACK", x - 140, y + 40);
    
  }
} // end of draw function